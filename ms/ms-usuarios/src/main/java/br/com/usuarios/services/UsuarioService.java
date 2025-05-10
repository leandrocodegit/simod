package br.com.usuarios.services;

import br.com.usuarios.keycloak.UserKeycloak;
import br.com.usuarios.repositoryes.TenantRepository;
import br.com.usuarios.repositoryes.UsuarioRepository;
import br.modelos.Exception.ExceptionResponse;
import br.modelos.dto.usuarios.mapper.UsuarioMapper;
import br.modelos.dto.usuarios.request.Credencial;
import br.modelos.dto.usuarios.request.UsuarioRequest;
import br.modelos.dto.usuarios.response.UsuarioResponse;
import br.modelos.entidades.cliente.Tenant;
import br.modelos.entidades.usuarios.Usuario;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.lang.reflect.Executable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;
    private final TenantRepository tenantRepository;
    private final UsuarioMapper usuarioMapper;
    private final UserKeycloak userKeycloak;


    public List<UsuarioResponse> listaTodosUsuarios(Pageable pageable) {
        return usuarioRepository.findAll(pageable).stream().map(usuarioMapper::toResponse).toList();
    }

    @Transactional
    public void criarUsuario(String tenant, UsuarioRequest request) {
        try{
            Map<String, Object> atributos = new HashMap<>();
            atributos.put("tenant", tenant);

            var userKeyclaok = usuarioMapper.toKeycloak(request);
            userKeyclaok.setEnabled(true);
            userKeyclaok.setAttributes(atributos);
            userKeyclaok.setUsername(UUID.randomUUID().toString());
            userKeyclaok.setCredentials(List.of(new Credencial()));
            userKeycloak.criarUsuario(tenant, userKeyclaok);
        }catch (Exception err){
            System.out.println(err.getMessage());
        }

        var response = userKeycloak.buscarUsuario(tenant, request.getEmail());

        if(response.isEmpty())
            throw new ExceptionResponse("Falha ao criar usuário, servidor de credenciais não respondeu");
        var user = usuarioMapper.toEntity(response.get(0));

        Tenant tenancy = Tenant.builder()
                .hostName(tenant)
                .build();
        if(tenantRepository.findByHostName(tenant).isPresent()) {
             tenancy = tenantRepository.findByHostName(tenant).orElseThrow(() ->
                    new ExceptionResponse("Falha ao criar usuário, servidor de credenciais não respondeu")
            );

        }else{
            tenantRepository.save(Tenant.normalize(tenancy));
        }
        user.setTenant(tenancy);
        usuarioRepository.save(Usuario.normalize(user));
    }
}

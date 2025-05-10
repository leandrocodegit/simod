package br.com.clientes.services;

import br.com.clientes.keycloak.Login;
import br.com.clientes.keycloak.LoginKeycloak;
import br.com.clientes.reposytories.ClienteRepository;
import br.modelos.Exception.ExceptionResponse;
import br.modelos.dto.cliente.mapper.ClienteMapper;
import br.modelos.dto.cliente.request.ClienteRequest;
import br.modelos.dto.cliente.response.ClienteResponse;
import br.modelos.entidades.cliente.Cliente;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ClienteService {

    private final KeycloakService keycloakService;
    private final ClienteRepository clienteRepository;
    private final ClienteMapper clienteMapper;

    public ClienteResponse criarContaCliente(ClienteRequest request){

//        if(!clienteRepository.existsByEmailOrDocumento(request.getEmail(), request.getDocumento()))
//            throw new ExceptionResponse("Cliente já cadastrado");
        var cliente = clienteMapper.toEntity(request);
        keycloakService.configurarContaCliente(request);
        return clienteMapper.toResponse(clienteRepository.save(Cliente.normalize(cliente)));
    }


}

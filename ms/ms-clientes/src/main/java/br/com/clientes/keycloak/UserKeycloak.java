package br.com.clientes.keycloak;

import br.com.clientes.configs.FeignConfig;
import br.com.clientes.models.UsuarioKeycloak;
import br.modelos.dto.usuarios.request.UsuarioKeycloakRequest;
import br.modelos.dto.usuarios.request.UsuarioRequest;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(value = "keycloak", url = "${keycloak.url}", configuration = FeignConfig.class)
public interface UserKeycloak {

    @PostMapping("/{realm}/users")
    public void criarUsuario(@PathVariable String realm, UsuarioKeycloak usuarioKeycloak);
    @GetMapping("/{realm}/users")
    public List<UsuarioRequest> buscarUsuario(@PathVariable String realm, @RequestParam(required = true) String email);
    @PostMapping("/{realm}/users")
    public void criarUsuario(@PathVariable String realm, UsuarioKeycloak usuarioKeycloak, @RequestHeader String athorization);
    @GetMapping("/{realm}/users")
    public List<UsuarioRequest> buscarUsuario(@PathVariable String realm, @RequestParam(required = true) String email, @RequestHeader String athorization);
}

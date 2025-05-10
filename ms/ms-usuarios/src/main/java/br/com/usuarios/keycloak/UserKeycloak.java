package br.com.usuarios.keycloak;

import br.com.usuarios.configs.FeignConfig;
import br.modelos.dto.usuarios.request.UsuarioKeycloakRequest;
import br.modelos.dto.usuarios.request.UsuarioRequest;
import br.modelos.dto.usuarios.response.UsuarioResponse;
import feign.Param;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@FeignClient(value = "keycloak", url = "${keycloak.url}", configuration = FeignConfig.class)
public interface UserKeycloak {

    @PostMapping("/{realm}/users")
    public void criarUsuario(@PathVariable String realm, UsuarioKeycloakRequest request);
    @GetMapping("/{realm}/users")
    public List<UsuarioRequest> buscarUsuario(@PathVariable String realm, @RequestParam(required = true) String email);
}

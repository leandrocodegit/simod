package br.com.clientes.keycloak;

import br.com.clientes.configs.FeignConfig;
import br.modelos.dto.keycloak.TokenKeycloak;
import br.modelos.dto.usuarios.request.UsuarioKeycloakRequest;
import br.modelos.dto.usuarios.request.UsuarioRequest;
import feign.Headers;
import feign.Param;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@FeignClient(value = "keycloak-login", url = "${keycloak-login.url}", configuration = FeignConfig.class)
public interface LoginKeycloak {

    @PostMapping(value = "/master/protocol/openid-connect/token", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    @Headers("Content-Type: application/x-www-form-urlencoded")
    ResponseEntity<TokenKeycloak> login(@RequestBody Map<String, ?> form);
}

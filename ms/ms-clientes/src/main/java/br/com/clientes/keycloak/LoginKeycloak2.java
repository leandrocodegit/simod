package br.com.clientes.keycloak;

import br.com.clientes.configs.FeignConfig;
import br.modelos.dto.keycloak.TokenKeycloak;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(value = "keycloak-login2", url = "${keycloak.url}", configuration = FeignConfig.class)
public interface LoginKeycloak2 {

    @PostMapping(value = "/{realm}/protocol/openid-connect/token", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    TokenKeycloak login(
            @RequestParam("client_id") String clientId,
            @RequestParam("grant_type") String grantType,
            @RequestParam("username") String username,
            @RequestParam("password") String password,
            @RequestParam(value = "scope", required = false) String scope,
            @RequestParam(value = "client_secret", required = false) String clientSecret
    );
}

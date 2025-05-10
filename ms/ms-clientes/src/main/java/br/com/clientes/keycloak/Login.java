package br.com.clientes.keycloak;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class Login {

    @JsonProperty("client_id")
    private String cliente_id;
    private String username;
    private String password;
    @JsonProperty("grant_type")
    private String grant_type;
    private String scope;
}

package br.com.clientes.models;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Map;

@Getter
@Setter
@Builder
public class UsuarioKeycloak {

    private Map<String, Object> attributes;
    private List<String> requiredActions;
    private boolean emailVerified;
    private String username;
    private String email;
    private String firstName;
    private String lastName;
    private List<String> groups;
    private boolean enabled;
}

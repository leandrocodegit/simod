package br.com.clientes.models;

import lombok.*;

import java.util.Map;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AtributoUsuarioKeycloak {
    private String name;
    private String displayName;
    private AttributeValidation validations;
    private RequiredRoles required;
    private Permissions permissions;
    private boolean multivalued;
    private String group;
}

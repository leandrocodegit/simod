package br.com.clientes.models;

import lombok.*;

import java.util.List;
import java.util.Map;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OpenIdScopeKeycloak {
    private String id;
    private String name;
    private String description;
    private String protocol;
    private Map<String, String> attributes;
    private List<ProtocolMapper> protocolMappers;
}

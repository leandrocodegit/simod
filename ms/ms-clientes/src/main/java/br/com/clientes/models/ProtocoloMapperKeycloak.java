package br.com.clientes.models;

import lombok.*;

import java.util.Map;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProtocoloMapperKeycloak {
    private String protocol;
    private String protocolMapper;
    private String name;
    private Map<String, String> config;
}

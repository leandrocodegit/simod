package br.com.clientes.models;

import lombok.*;

import java.util.Map;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProtocolMapper {
    private String id;
    private String name;
    private String protocol;
    private String protocolMapper;
    private boolean consentRequired;
    private Map<String, String> config;
}

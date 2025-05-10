package br.com.clientes.models;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class RealmRequest {
    private String realm;
    private boolean enabled;
}

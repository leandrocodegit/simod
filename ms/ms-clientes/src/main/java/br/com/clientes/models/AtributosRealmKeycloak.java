package br.com.clientes.models;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class AtributosRealmKeycloak {

    private List<AtributoUsuarioKeycloak> attributes;
}

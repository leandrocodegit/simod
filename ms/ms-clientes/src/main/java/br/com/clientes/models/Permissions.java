package br.com.clientes.models;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Permissions {
    private List<String> view;
    private List<String> edit;
}

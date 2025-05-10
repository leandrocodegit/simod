package br.com.clientes.models;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RequiredRoles {
    private List<String> roles;
}

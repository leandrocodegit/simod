package br.com.clientes.models;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AttributeValidation {
    private AttributeLengthValidation length;
}

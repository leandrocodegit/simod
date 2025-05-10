package br.com.clientes.models;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AttributeLengthValidation {
    private int min;
    private int max;
}

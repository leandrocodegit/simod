package br.com.clientes.configs;

import br.modelos.dto.cliente.mapper.ClienteMapper;
import br.modelos.dto.cliente.mapper.ClienteMapperImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MapperConfig {

    @Bean
    public ClienteMapper clienteMapper(){
        return new ClienteMapperImpl();
    }
}

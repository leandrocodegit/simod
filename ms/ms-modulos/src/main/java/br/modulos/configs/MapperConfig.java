package br.modulos.configs;

import br.modelos.dto.agenda.mapper.AgendaMapper;
import br.modelos.dto.agenda.mapper.AgendaMapperImpl;
import br.modelos.dto.agenda.mapper.ConfiguracaoMapper;
import br.modelos.dto.agenda.mapper.ConfiguracaoMapperImpl;
import br.modelos.dto.modulos.mapper.ModuloMapper;
import br.modelos.dto.modulos.mapper.ModuloMapperImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.TimeZone;

@Configuration
public class MapperConfig {

    @Bean
    public ModuloMapper moduloMapper(){
        return new ModuloMapperImpl();
    }
}

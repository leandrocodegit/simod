package br.com.agendas.configs;

import br.modelos.dto.agenda.mapper.AgendaMapper;
import br.modelos.dto.agenda.mapper.AgendaMapperImpl;
import br.modelos.dto.agenda.mapper.ConfiguracaoMapper;
import br.modelos.dto.agenda.mapper.ConfiguracaoMapperImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.TimeZone;

@Configuration
public class MapperConfig {


    @Bean
    public AgendaMapper agendaMapper(){
        TimeZone.setDefault(TimeZone.getTimeZone("America/Sao_Paulo"));
        return new AgendaMapperImpl();
    }

    @Bean
    public ConfiguracaoMapper configuracaoMapper(){
        return new ConfiguracaoMapperImpl();
    }
}

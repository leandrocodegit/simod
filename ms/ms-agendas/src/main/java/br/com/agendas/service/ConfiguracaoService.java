package br.com.agendas.service;

import br.com.agendas.repository.AgendaRepository;
import br.com.agendas.repository.ConfiguracaoRepository;
import br.modelos.dto.agenda.mapper.AgendaMapper;
import br.modelos.dto.agenda.mapper.ConfiguracaoMapper;
import br.modelos.dto.agenda.request.AgendaRequest;
import br.modelos.dto.agenda.request.ConfiguracaoRequest;
import br.modelos.dto.agenda.response.AgendaResponse;
import br.modelos.dto.agenda.response.ConfiguracaoResponse;
import br.modelos.entidades.agenda.Configuracao;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ConfiguracaoService {


    private final ConfiguracaoRepository configuracaoRepository;
    private final ConfiguracaoMapper configuracaoMapper;

    public Page<ConfiguracaoResponse> listaConfiguracaoes(Pageable pageable){
        return configuracaoRepository.findAll(pageable).map(configuracaoMapper::toResponse);
    }

    public ConfiguracaoResponse salvarConfiguracao(ConfiguracaoRequest request){
        var configuracao = Configuracao.normalize(configuracaoMapper.toEntity(request)) ;
        return configuracaoMapper.toResponse(configuracaoRepository.save(configuracao));
    }
}

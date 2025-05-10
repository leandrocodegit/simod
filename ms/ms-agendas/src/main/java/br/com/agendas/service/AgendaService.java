package br.com.agendas.service;

import br.com.agendas.repository.AgendaRepository;
import br.com.agendas.repository.ConfiguracaoRepository;
import br.modelos.dto.agenda.mapper.AgendaMapper;
import br.modelos.dto.agenda.mapper.ConfiguracaoMapper;
import br.modelos.dto.agenda.request.AgendaRequest;
import br.modelos.dto.agenda.request.ConfiguracaoRequest;
import br.modelos.dto.agenda.response.AgendaResponse;
import br.modelos.dto.agenda.response.ConfiguracaoResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AgendaService {

    private final AgendaRepository agendaRepository;
    private final AgendaMapper agendaMapper;

    public Page<AgendaResponse> listaAgendas(Pageable pageable){
        return agendaRepository.findAll(pageable).map(agendaMapper::toResponse);
    }

    public AgendaResponse salvarAgenda(AgendaRequest request){
        var agenda = agendaMapper.toEntity(request);

        if(agenda.getId() == null)
            agenda.setId(UUID.randomUUID());
        return agendaMapper.toResponse(agendaRepository.save(agenda));
    }
}

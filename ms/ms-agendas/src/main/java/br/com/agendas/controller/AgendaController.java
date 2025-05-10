package br.com.agendas.controller;

import br.com.agendas.repository.AgendaRepository;
import br.com.agendas.service.AgendaService;
import br.modelos.dto.agenda.mapper.AgendaMapper;
import br.modelos.dto.agenda.request.AgendaRequest;
import br.modelos.dto.agenda.request.ConfiguracaoRequest;
import br.modelos.dto.agenda.response.AgendaResponse;
import br.modelos.dto.agenda.response.ConfiguracaoResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("agenda")
@RequiredArgsConstructor
public class AgendaController {

//    private final AgendaService service;
//
//    @GetMapping
//    public ResponseEntity<Page<AgendaResponse>> listaAgenda(Pageable pageable, @RequestHeader(value = "authorization", required = false) String Authorizarion){
//        return ResponseEntity.ok(service.listaAgendas(pageable));
//    }
//
//    @PostMapping
//    public ResponseEntity<AgendaResponse> criarAgenda(AgendaRequest request){
//        return ResponseEntity.ok(service.salvarAgenda(request));
//    }
}

package br.com.agendas.controller;

import br.com.agendas.service.AgendaService;
import br.com.agendas.service.ConfiguracaoService;
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
@RequestMapping("agenda/configuracao")
@RequiredArgsConstructor
public class ConfiguracaoController {

    private final ConfiguracaoService service;

    @GetMapping
    public ResponseEntity<Page<ConfiguracaoResponse>> listaAgenda(Pageable pageable, @RequestHeader(value = "authorization", required = false) String Authorizarion){
        return ResponseEntity.ok(service.listaConfiguracaoes(pageable));
    }

    @PostMapping
    public ResponseEntity<ConfiguracaoResponse> salvarConfiguracao(@RequestBody ConfiguracaoRequest request){
        return ResponseEntity.ok(service.salvarConfiguracao(request));
    }
}

package br.com.clientes.controllers;

import br.com.clientes.models.AtributosRealmKeycloak;
import br.com.clientes.services.ClienteService;
import br.modelos.dto.cliente.request.ClienteRequest;
import br.modelos.dto.cliente.response.ClienteResponse;
import br.modelos.dto.modulos.request.ModuloRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cliente")
@RequiredArgsConstructor
public class ClienteController {

    private final ClienteService clienteService;

    @PostMapping
    public ResponseEntity<?> criarCleinte(@RequestBody ClienteRequest request){
        return ResponseEntity.ok(clienteService.criarContaCliente(request));
    }

    @PostMapping("/teste")
    public ResponseEntity<?> teste(@RequestBody AtributosRealmKeycloak request){
        return ResponseEntity.ok().build();
    }

    @GetMapping("/teste")
    public ResponseEntity<?> teste2(@RequestBody AtributosRealmKeycloak request){
        var item = new AtributosRealmKeycloak();
        return ResponseEntity.ok(new AtributosRealmKeycloak());
    }

    @GetMapping
    public ResponseEntity<ClienteResponse> buscarCleinte(){
        return ResponseEntity.ok().build();
    }

}

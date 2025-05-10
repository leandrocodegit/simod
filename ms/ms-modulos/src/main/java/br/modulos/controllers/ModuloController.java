package br.modulos.controllers;

import br.modelos.dto.modulos.request.ModuloRequest;
import br.modelos.dto.modulos.response.ModuloResponse;
import br.modulos.services.ModuloService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/modulo")
@RequiredArgsConstructor
public class ModuloController {

    private final ModuloService moduloService;

    @GetMapping
    public ResponseEntity<List<ModuloResponse>> listaUsuarios(){
        return ResponseEntity.ok(moduloService.listaTodosModulos());
    }

    @PostMapping
    public ResponseEntity<?> salvarUsuarios(@RequestBody ModuloRequest request){
        moduloService.salvarModulo(request);
        return ResponseEntity.ok().build();
    }
}

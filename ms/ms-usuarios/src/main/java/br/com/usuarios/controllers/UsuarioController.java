package br.com.usuarios.controllers;

import br.com.usuarios.services.UsuarioService;
import br.modelos.dto.usuarios.request.UsuarioRequest;
import br.modelos.dto.usuarios.response.UsuarioResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuario")
@RequiredArgsConstructor
public class UsuarioController {

    private final UsuarioService usuarioService;

    @GetMapping
    public ResponseEntity<List<UsuarioResponse>> listaUsuarios(Pageable pageable){
        return ResponseEntity.ok(usuarioService.listaTodosUsuarios(pageable));
    }

    @PostMapping
    public ResponseEntity<?> criarUsuarios(@RequestHeader("X-Tenant-ID") String tenant, @RequestBody @Validated UsuarioRequest request){
        usuarioService.criarUsuario(tenant, request);
        return ResponseEntity.ok().build();
    }
}

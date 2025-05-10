package br.modulos.services;

import br.modelos.dto.modulos.mapper.ModuloMapper;
import br.modelos.dto.modulos.mapper.ModuloMapperImpl;
import br.modelos.dto.modulos.request.ModuloRequest;
import br.modelos.dto.modulos.response.ModuloResponse;
import br.modelos.entidades.modulos.Modulo;
import br.modulos.repositoryes.ModuloRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ModuloService {

     private final ModuloRepository moduloRepository;
     private final MenuService menuService;
     private ModuloMapperImpl moduloMapper = new ModuloMapperImpl();


     public List<ModuloResponse> listaTodosModulos(){
         return moduloRepository.findAll().stream().map(moduloMapper::toResponse).toList();
     }
    public Modulo salvarModulo(ModuloRequest request) {

        var modulo = moduloMapper.toEntity(request);
        if (modulo.getId() == null)
            modulo.setId(UUID.randomUUID());

        menuService.salvarMenu(modulo.getMenu());
        return moduloRepository.save(modulo);
    }
}

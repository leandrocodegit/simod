package br.modulos.services;

import br.modelos.entidades.modulos.Menu;
import br.modulos.repositoryes.MenuRepository;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class MenuService {

   private final MenuRepository menuRepository;

    public MenuService(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
    }

    public Menu salvarMenu(Menu menu) {

        if(menu.getId() == null)
            menu.setId(UUID.randomUUID());
        return menuRepository.save(menu);
    }
}

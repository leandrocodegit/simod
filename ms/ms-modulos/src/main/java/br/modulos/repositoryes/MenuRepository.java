package br.modulos.repositoryes;

import br.modelos.entidades.modulos.Menu;
import br.modelos.entidades.modulos.Modulo;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;


public interface MenuRepository extends MongoRepository<Menu, UUID> {
}

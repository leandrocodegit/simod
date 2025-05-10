package br.modulos.repositoryes;

import br.modelos.entidades.User;
import br.modelos.entidades.modulos.Modulo;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;


public interface ModuloRepository extends MongoRepository<Modulo, UUID> {
}

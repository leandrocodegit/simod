package br.com.clientes.reposytories;

import br.modelos.entidades.cliente.Cliente;
import org.springframework.data.domain.Example;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface ClienteRepository extends MongoRepository<Cliente, UUID> {

  boolean existsByEmailOrDocumento(String email, String documento);
}

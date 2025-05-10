package br.com.agendas.repository;

import br.modelos.entidades.agenda.Agenda;
import br.modelos.entidades.agenda.Configuracao;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface ConfiguracaoRepository extends MongoRepository<Configuracao, UUID> {
}

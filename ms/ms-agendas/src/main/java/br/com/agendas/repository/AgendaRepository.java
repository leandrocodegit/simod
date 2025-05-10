package br.com.agendas.repository;

import br.modelos.entidades.agenda.Agenda;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface AgendaRepository extends MongoRepository<Agenda, UUID> {
}

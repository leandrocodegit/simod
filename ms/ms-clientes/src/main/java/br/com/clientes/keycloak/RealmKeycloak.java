package br.com.clientes.keycloak;

import br.com.clientes.configs.FeignConfig;
import br.com.clientes.models.*;
import br.modelos.dto.usuarios.request.UsuarioKeycloakRequest;
import br.modelos.dto.usuarios.request.UsuarioRequest;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(value = "keycloak-realm", url = "${keycloak.url}", configuration = FeignConfig.class)
public interface RealmKeycloak {

    @PostMapping
    public void criarRealm(@RequestBody RealmRequest request, @RequestHeader String athorization);
    @PutMapping("/{realm}/ui-ext")
    public void atualizarReal(@PathVariable String realm, @RequestBody RealmRepresentation realmRepresentation, @RequestHeader String athorization);
    @GetMapping("/{realm}")
    public RealmRepresentation buscarRealm(@PathVariable String realm, @RequestHeader String athorization);
    @PostMapping("/{realm}/users")
    public void criarUsuario(@PathVariable String realm, UsuarioKeycloakRequest request);
    @GetMapping("/{realm}/users/profile")
    public ResponseEntity<AtributosRealmKeycloak> buscarAtributos(@PathVariable String realm, @RequestHeader String athorization);
    @PutMapping("/{realm}/users/profile")
    public void criarAtributos(@PathVariable String realm, @RequestBody AtributosRealmKeycloak atributoUsuarioKeycloak, @RequestHeader String athorization);
    @GetMapping("/{realm}/users")
    public List<UsuarioRequest> buscarUsuario(@PathVariable String realm, @RequestParam(required = true) String email);
    @PostMapping("/{realm}/client-scopes/{scopeId}/protocol-mappers/models")
    public void protocoloMapperKeycloak(@PathVariable String realm, @PathVariable String scopeId, @RequestBody ProtocoloMapperKeycloak atributoUsuarioKeycloak, @RequestHeader String athorization);
    @GetMapping("/{realm}/client-scopes")
    public List<OpenIdScopeKeycloak> buscarScopes(@PathVariable String realm, @RequestParam(required = true) String email);
}

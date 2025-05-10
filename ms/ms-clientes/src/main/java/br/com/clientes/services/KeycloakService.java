package br.com.clientes.services;

import br.com.clientes.keycloak.LoginKeycloak;
import br.com.clientes.keycloak.RealmKeycloak;
import br.com.clientes.keycloak.UserKeycloak;
import br.com.clientes.models.*;
import br.com.clientes.reposytories.ClienteRepository;
import br.modelos.Exception.ExceptionResponse;
import br.modelos.dto.cliente.mapper.ClienteMapper;
import br.modelos.dto.cliente.request.ClienteRequest;
import br.modelos.dto.cliente.response.ClienteResponse;
import br.modelos.dto.keycloak.TokenKeycloak;
import br.modelos.dto.usuarios.request.UsuarioKeycloakRequest;
import br.modelos.entidades.cliente.Cliente;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class KeycloakService {

    private final LoginKeycloak loginKeycloak;
    private final RealmKeycloak realmKeycloak;
    private final UserKeycloak userKeycloak;
    private final ClienteMapper clienteMapper;

    public void configurarContaCliente(ClienteRequest request) {

        var token = login();
        criarRealm(request.getNome(), token.getAccessToken());
        crairMapperRealm(request.getNome(), token.getAccessToken());
        criarUsuario(request, token.getAccessToken());
        crairAtributos(request.getNome(), token.getAccessToken());

    }

    private void criarRealm(String host, String token) {
        RealmRepresentation realm = null;
        try{
            realm = realmKeycloak.buscarRealm(host, token);
        }catch (Exception err){}
        if (realm == null)
            realmKeycloak.criarRealm(RealmRequest.builder()
                    .realm(host)
                    .enabled(true)
                    .build(), token);
        realm = realmKeycloak.buscarRealm(host, token);
        realm.setLoginTheme("auth");
        realm.setAccessTokenLifespan(1200);
        realm.setSsoSessionIdleTimeout(3600);
        realm.setInternationalizationEnabled(true);
        realm.setDefaultLocale("pt-BR");
        realm.setSupportedLocales(List.of("pt-BR"));
        realmKeycloak.atualizarReal(host, realm, token);


    }

    private void crairMapperRealm(String host, String token) {
        var scopes = realmKeycloak.buscarScopes(host, token);
        var atributos = List.of("color", "dark");
        var atributosMult = List.of("tenants");
        var atributosScope = List.of("email", "profile");

        scopes.forEach(scope -> {
            if (atributosScope.contains(scope.getName())) {
                atributos.forEach(att -> {
                    if (scope.getProtocolMappers() == null || scope.getProtocolMappers().stream().noneMatch(map -> map.getName().equals(att)))
                        realmKeycloak.protocoloMapperKeycloak(host, scope.getId(), ProtocoloMapperKeycloak.builder()
                                        .name(att)
                                        .protocol("openid-connect")
                                        .protocolMapper("oidc-usermodel-attribute-mapper")
                                        .config(criarConfig(att, false))
                                        .build(),
                                token);
                });

                atributosMult.forEach(att -> {
                    if (scope.getProtocolMappers() == null || scope.getProtocolMappers().stream().noneMatch(map -> map.getName().equals(att)))
                        realmKeycloak.protocoloMapperKeycloak(host, scope.getId(), ProtocoloMapperKeycloak.builder()
                                        .name(att)
                                        .protocol("openid-connect")
                                        .protocolMapper("oidc-usermodel-attribute-mapper")
                                        .config(criarConfig(att, true))
                                        .build(),
                                token);
                });
            }
        });

    }

    private Map<String, String> criarConfig(String mapper, boolean multivalue) {
        Map<String, String> config = new HashMap<>();
        config.put("access.token.claim", "true");
        config.put("claim.name", mapper);
        config.put("id.token.claim", "true");
        config.put("introspection.token.claim", "password");
        config.put("jsonType.label", "String");
        config.put("lightweight.claim", "false");
        config.put("user.attribute", mapper);
        config.put("userinfo.token.claim", "true");
        if (multivalue)
            config.put("multivalued", "true");
        return config;
    }

    private void crairAtributos(String host, String token) {
        var atributos = realmKeycloak.buscarAtributos(host, token).getBody();

        if (atributos.getAttributes().stream().noneMatch(att -> att.getName().equals("color")))
            atributos.getAttributes().add(AtributoUsuarioKeycloak.builder()
                    .name("color")
                    .displayName("${color}")
                    .multivalued(false)
                    .permissions(Permissions.builder()
                            .edit(List.of("user", "admin"))
                            .view(List.of("user", "admin"))
                            .build())
                    .build());
        if (atributos.getAttributes().stream().noneMatch(att -> att.getName().equals("dark")))
            atributos.getAttributes().add(AtributoUsuarioKeycloak.builder()
                    .name("dark")
                    .displayName("${dark}")
                    .multivalued(false)
                    .permissions(Permissions.builder()
                            .edit(List.of("user", "admin"))
                            .view(List.of("user", "admin"))
                            .build())
                    .build());
        if (atributos.getAttributes().stream().noneMatch(att -> att.getName().equals("tenants")))
            atributos.getAttributes().add(AtributoUsuarioKeycloak.builder()
                    .name("tenants")
                    .displayName("${tenants}")
                    .multivalued(true)
                    .permissions(Permissions.builder()
                            .edit(List.of("admin"))
                            .view(List.of("admin"))
                            .build())
                    .build());

        realmKeycloak.criarAtributos(host, atributos, token);

    }

    private void criarUsuario(ClienteRequest request, String token) {
        var user = userKeycloak.buscarUsuario(request.getNome(), request.getEmail(), token);
        if (user == null || user.isEmpty()) {
            Map<String, Object> attributes = new HashMap<>();
            attributes.put("color", "pink");
            attributes.put("dark", "true");
            attributes.put("tenants", List.of(request.getNome()));
            attributes.put("grant_type", "password");
            userKeycloak.criarUsuario(request.getNome(), UsuarioKeycloak.builder()
                    .attributes(attributes)
                    .firstName(request.getNome())
                    .lastName(request.getNome())
                    .username(request.getEmail())
                    .email(request.getEmail())
                    .emailVerified(true)
                    .enabled(true)
                    .build());
        }
        user = userKeycloak.buscarUsuario(request.getNome(), request.getEmail(), token);
    }

    public TokenKeycloak login() {
        MultiValueMap<String, String> form = new LinkedMultiValueMap<>();
        form.add("client_id", "admin-cli");
        form.add("client_secret", "bJKaQmLm2Ffon5OZccw7OP2WTr2ZynGs");
        form.add("username", "admin");
        form.add("password", "admin");
        form.add("grant_type", "password");
        //form.add("grant_type","client_credentials");
        form.add("scope", "openid profile");


        Map<String, String> forms = new HashMap<>();
        forms.put("client_id", "admin-cli");
        //forms.put("client_secret","bJKaQmLm2Ffon5OZccw7OP2WTr2ZynGs");
        forms.put("username", "admin");
        forms.put("password", "admin");
        forms.put("grant_type", "password");
        //form.add("grant_type","client_credentials");
        forms.put("scope", "openid profile");

        return loginKeycloak.login(forms).getBody();
    }
}

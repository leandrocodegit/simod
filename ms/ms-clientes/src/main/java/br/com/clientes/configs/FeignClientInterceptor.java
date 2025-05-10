package br.com.clientes.configs;

import feign.RequestInterceptor;
import feign.RequestTemplate;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class FeignClientInterceptor implements RequestInterceptor {

    @Autowired
    private HttpServletRequest request;

    @Override
    public void apply(RequestTemplate template) {
        String authHeader = request.getHeader("Authorization");
        if (!template.feignTarget().name().contains("login") && authHeader != null && !authHeader.isEmpty()) {
            template.header("Authorization", authHeader);
        }
    }
}

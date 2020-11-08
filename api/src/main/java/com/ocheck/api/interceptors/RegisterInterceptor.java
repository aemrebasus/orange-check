package com.ocheck.api.interceptors;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author Ahmet Emrebas on 11/8/2020 2:57 AM
 * @project api
 */

@Configuration
public class RegisterInterceptor implements WebMvcConfigurer {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new SecureOrganizations())
                .addPathPatterns(
                        "/api/v1/issues","/api/v1/issues/**",
                        "/api/v1/users","/api/v1/users/**",
                        "/api/v1/projects","/api/v1/projects/**",
                        "/api/v1/projects","/api/v1/projects/**"
                );
    }
}

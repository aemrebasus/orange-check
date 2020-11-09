package com.ocheck.api.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

/**
 * @author Ahmet Emrebas on 11/8/2020 5:06 PM
 * @project api
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf()
                .disable()
                .authorizeRequests()

                .antMatchers("/", "index", "/css/*", "/js/*").permitAll()

                .antMatchers("/api/v1/issues")
                .hasRole(UserRoles.DEVELOPER.name())


                .antMatchers("/api/v1/users")
                .hasRole(UserRoles.ADMIN.name())


                .anyRequest()
                .authenticated()
                .and()
                .httpBasic();
    }

}

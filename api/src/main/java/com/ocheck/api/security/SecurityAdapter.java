package com.ocheck.api.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/*
 @project spring-project-management-app
 @author Ahmet Emrebas on 9/1/2020
 @since 1.0.0
*/
@Configuration
@EnableWebSecurity
public class SecurityAdapter extends WebSecurityConfigurerAdapter {
    @Autowired
    UserDetailsService userDetailsService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
//        http.csrf().disable();
//        http.authorizeRequests().antMatchers(HttpMethod.POST).permitAll();
//        http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/v1/users").permitAll();
//        http.authorizeRequests().antMatchers(HttpMethod.PUT, "/api/v1/users").permitAll();
//        http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/api/v1/users").permitAll();
//        http.authorizeRequests().antMatchers(HttpMethod.POST, "**").permitAll();

        http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/v1/users")
                .hasAuthority("ADMIN");

        http.authorizeRequests().anyRequest().authenticated().and().formLogin();
    }

    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }

}

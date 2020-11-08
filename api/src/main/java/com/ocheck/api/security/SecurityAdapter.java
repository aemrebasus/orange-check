package com.ocheck.api.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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
        http.authorizeRequests()

                .antMatchers("/login", "/login/**", "/logout").permitAll()

                .antMatchers("/", "/css", "/css/**", "/js", "js/**", "/assets", "/assets/**").permitAll()

                .antMatchers(HttpMethod.GET, "/api/v1/users", "/api/v1/users/**")
                .hasAnyAuthority("ADMIN", "SCRUMMASTER")

                .antMatchers(HttpMethod.GET, "/api/v1/issues", "/api/v1/issues/**")
                .hasAnyAuthority("DEVELOPER", "ADMIN", "SCRUMMASTER")

                .antMatchers(HttpMethod.GET, "/api/v1/subs", "/api/v1/subs/**")
                .hasAnyAuthority("SUPERUSER")

                .and().httpBasic();
    }

    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return new BCryptPasswordEncoder(10);
    }

    @Override
    @Bean
    protected UserDetailsService userDetailsService() {

        return super.userDetailsService();
    }

}

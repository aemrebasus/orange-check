package com.ocheck.api.security;

import org.hibernate.tool.schema.internal.exec.ScriptTargetOutputToFile;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

import static com.ocheck.api.security.UserRoles.*;
import static com.ocheck.api.security.UserPermission.*;

/**
 * @author Ahmet Emrebas on 11/8/2020 5:06 PM
 * @project api
 */
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http
                .csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                .and()
                .authorizeRequests()

                .antMatchers(HttpMethod.GET, "/", "index", "/css/*", "/js/*").permitAll()

                .antMatchers(HttpMethod.GET, "/api/v1/users").hasAuthority(USER_READ.getPermission())
                .antMatchers(HttpMethod.POST, "/api/v1/users").hasAuthority(USER_WRITE.getPermission())
                .antMatchers(HttpMethod.DELETE, "/api/v1/users").hasAuthority(USER_WRITE.getPermission())
                .antMatchers(HttpMethod.PUT, "/api/v1/users").hasAuthority(USER_WRITE.getPermission())

                .antMatchers(HttpMethod.GET, "/api/v1/projects").hasAuthority(PROJECT_READ.getPermission())
                .antMatchers(HttpMethod.POST, "/api/v1/projects").hasAuthority(PROJECT_WRITE.getPermission())
                .antMatchers(HttpMethod.PUT, "/api/v1/projects").hasAuthority(PROJECT_WRITE.getPermission())
                .antMatchers(HttpMethod.DELETE, "/api/v1/projects").hasAuthority(PROJECT_WRITE.getPermission())

                .antMatchers(HttpMethod.GET, "/api/v1/issues").hasAuthority(ISSUE_READ.getPermission())
                .antMatchers(HttpMethod.POST, "/api/v1/issues").hasAuthority(ISSUE_WRITE.getPermission())
                .antMatchers(HttpMethod.PUT, "/api/v1/issues").hasAuthority(ISSUE_WRITE.getPermission())
                .antMatchers(HttpMethod.DELETE, "/api/v1/issues").hasAuthority(ISSUE_WRITE.getPermission())

                .antMatchers(HttpMethod.GET, "/api/v1/messages").hasAuthority(MESSAGE_READ.getPermission())
                .antMatchers(HttpMethod.POST, "/api/v1/messages").hasAuthority(MESSAGE_WRITE.getPermission())
                .antMatchers(HttpMethod.PUT, "/api/v1/messages").hasAuthority(MESSAGE_WRITE.getPermission())
                .antMatchers(HttpMethod.DELETE, "/api/v1/messages").hasAuthority(MESSAGE_WRITE.getPermission())


                .anyRequest()
                .authenticated()
                .and()
                .formLogin()
                .loginPage("/login").permitAll()
                .defaultSuccessUrl("/", true)
                .and()
                .rememberMe();
    }

}

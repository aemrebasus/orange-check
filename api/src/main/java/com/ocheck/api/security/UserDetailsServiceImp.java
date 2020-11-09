package com.ocheck.api.security;

import com.ocheck.api.models.UserModel;
import com.ocheck.api.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.core.GrantedAuthorityDefaults;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;


/**
 * @author Ahmet Emrebas on 11/8/2020 7:21 PM
 * @project api
 */

@Configuration
public class UserDetailsServiceImp implements UserDetailsService {

    @Autowired
    private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserModel user = userService.findByUserName(username).get();
        return User.builder()
                .username(user.getUserName())
                .password(user.getPassword())
                .roles(user.getRoles().name())
                .build();
    }
}

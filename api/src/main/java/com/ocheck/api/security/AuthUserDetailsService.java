package com.ocheck.api.security;

import com.ocheck.api.models.User;
import com.ocheck.api.models.UserSession;
import com.ocheck.api.services.UserService;
import com.ocheck.api.services.UserSessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * @author Ahmet Emrebas on 11/2/2020 1:43 PM
 * @project spring-project-management-app
 */

@Service
public class AuthUserDetailsService implements UserDetailsService {

    @Autowired
    UserService userService;


    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        Optional<User> user = this.userService.findByUserName(s);
        user.orElseThrow(()->new UsernameNotFoundException("Not found: " + s));
        return user.map(AuthUserDetails::new).get();
    }
}

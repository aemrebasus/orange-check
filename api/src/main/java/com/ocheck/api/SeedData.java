package com.ocheck.api;

import com.ocheck.api.models.UserModel;
import com.ocheck.api.security.UserRoles;
import com.ocheck.api.services.IssueService;
import com.ocheck.api.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * @author Ahmet Emrebas on 11/8/2020 7:31 PM
 * @project api
 */

@Configuration
public class SeedData implements CommandLineRunner {

    @Autowired
    private UserService userService;

    @Autowired
    private IssueService issueService;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public void run(String... args) throws Exception {

        UserModel admin = new UserModel()
                .setUserName("admin")
                .setPassword(passwordEncoder.encode("password"))
                .setRoles(UserRoles.ADMIN);

        UserModel dev = new UserModel()
                .setUserName("dev")
                .setPassword(passwordEncoder.encode("password"))
                .setRoles(UserRoles.DEVELOPER);

        UserModel sm = new UserModel()
                .setUserName("sm")
                .setPassword(passwordEncoder.encode("password"))
                .setRoles(UserRoles.SCRUMMASTER);

        this.userService.saveOne(admin);
        this.userService.saveOne(dev);
        this.userService.saveOne(sm);
    }

}

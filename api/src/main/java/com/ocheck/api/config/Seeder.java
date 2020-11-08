package com.ocheck.api.config;

import com.ocheck.api.models.Issue;
import com.ocheck.api.models.Message;
import com.ocheck.api.models.User;
import com.ocheck.api.services.IssueService;
import com.ocheck.api.services.MessageService;
import com.ocheck.api.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

/**
 * @author Ahmet Emrebas on 11/7/2020 11:18 PM
 * @project api
 */
@Configuration
public class Seeder implements CommandLineRunner {
    @Autowired
    private UserService userService;

    @Autowired
    private MessageService messageService;
    @Autowired
    private IssueService issueService;

    @Override
    public void run(String... args) throws Exception {

        User admin = new User().setId(1L).setEmail("admin@email.com")
                .setOrgId(1L)
                .setUserName("admin")
                .setPassword("12345678")
                .setRoles("ADMIN");

        User developer = new User().setId(2L).setEmail("dev@gmail.com")
                .setOrgId(2L)
                .setUserName("dev")
                .setPassword("12345678")
                .setRoles("DEVELOPER");

        Issue issue1 = new Issue().setId(1L).setOrgId(1L).setTitle("This is in org 1");
        Issue issue2 = new Issue().setId(1L).setOrgId(2L).setTitle("This is in org 2");

        this.userService.saveOne(admin);
        this.userService.saveOne(developer);

        this.issueService.saveOne(issue1);
        this.issueService.saveOne(issue2);

    }
}

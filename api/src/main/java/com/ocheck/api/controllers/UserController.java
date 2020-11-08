package com.ocheck.api.controllers;

import com.nimbusds.oauth2.sdk.http.HTTPResponse;
import com.ocheck.api.security.AuthUserDetails;
import com.ocheck.api.security.OrgSecurity;
import com.ocheck.api.services.UserSessionService;
import com.ocheck.api.models.User;
import com.ocheck.api.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * @author Ahmet Emrebas on 11/4/2020 12:53 AM
 * @project api
 */
@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private OrgSecurity orgSecurity;

    @Autowired
    private UserSessionService session;

    @GetMapping
    public List<User> findAll(@RequestParam Long orgId, Authentication authentication) {
        if (orgSecurity.hasOrgId(orgId, authentication)) {
            return userService.findByOrgId(orgId);
        } else {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "The request is forbidden!");
        }
    }


    @GetMapping({"/{id}"})
    public Optional<User> findById(@PathVariable Long id) {
        return userService.findById(id);
    }

    @GetMapping({"/username/{userName}"})
    public Optional<User> findByUserName(@PathVariable String userName) {
        return userService.findByUserName(userName);
    }

    @GetMapping({"/firstname/{firstName}"})
    public List<User> findByFirstName(@PathVariable String firstName) {
        return userService.findByFirstName(firstName);
    }

    @GetMapping({"/lastname/{lastName}"})
    public List<User> findByLastName(@PathVariable String lastName) {
        return userService.findByLastName(lastName);
    }

    @PostMapping
    public void saveOne(@RequestBody User user) {
        userService.saveOne(user);
    }

    @PutMapping("/{id}")
    public void updateOneById(@PathVariable Long id, @RequestBody User updatedUser) {
        userService.updateOneById(id, updatedUser);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        userService.deleteById(id);
    }

}

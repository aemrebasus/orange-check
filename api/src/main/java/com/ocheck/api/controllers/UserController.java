package com.ocheck.api.controllers;

import com.ocheck.api.models.User;
import com.ocheck.api.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping
    public List<User> findAll() {
        return userService.findAll();
    }

    @GetMapping({"/{id}"})
    public Optional<User> findById(@PathVariable Long id) {
        return userService.findById(id);
    }

    @GetMapping({"/firstname/{firstName}"})
    public List<User> findByFirstName(@PathVariable String name) {
        return userService.findByFirstName(name);
    }

    @GetMapping({"/lastname/{lastName}"})
    public List<User> findByLastName(@PathVariable String name) {
        return userService.findByLastName(name);
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

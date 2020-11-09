package com.ocheck.api.controllers;

import com.ocheck.api.models.UserModel;
import com.ocheck.api.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
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
    private HttpSession session;

    @GetMapping
    public List<UserModel> findAll() {
        return userService.findAll();
    }

    @GetMapping({"/{id}"})
    public Optional<UserModel> findById(@PathVariable Long id) {
        return userService.findById(id);
    }

    @GetMapping({"/username/{userName}"})
    public Optional<UserModel> findByUserName(@PathVariable String userName) {
        return userService.findByUserName(userName);
    }

    @GetMapping({"/firstname/{firstName}"})
    public List<UserModel> findByFirstName(@PathVariable String firstName) {
        return userService.findByFirstName(firstName);
    }

    @GetMapping({"/lastname/{lastName}"})
    public List<UserModel> findByLastName(@PathVariable String lastName) {
        return userService.findByLastName(lastName);
    }

    @PostMapping
    public void saveOne(@RequestBody UserModel user) {
        userService.saveOne(user);
    }

    @PutMapping("/{id}")
    public void updateOneById(@PathVariable Long id, @RequestBody UserModel updatedUser) {
        userService.updateOneById(id, updatedUser);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        userService.deleteById(id);
    }

}

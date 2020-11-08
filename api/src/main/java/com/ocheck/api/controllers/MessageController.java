package com.ocheck.api.controllers;

import com.ocheck.api.models.Message;
import com.ocheck.api.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

/**
 * @author Ahmet Emrebas on 11/7/2020 6:52 PM
 * @project api
 */


@RestController
@RequestMapping("/api/v1/messages")
public class MessageController {

    @Autowired
    private MessageService service;

    @GetMapping
    public List<Message> findAll() {
        return service.findAll();
    }

    @GetMapping({"/{id}"})
    public Optional<Message> findById(@PathVariable Long id) {
        return service.findById(id);
    }


    @PostMapping
    public void saveOne(@RequestBody Message entity) {
        service.saveOne(entity);
    }

    @PutMapping("/{id}")
    public void updateOneById(@PathVariable Long id, @RequestBody Message updated) {
        service.updateOneById(id, updated);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        service.deleteById(id);
    }

}


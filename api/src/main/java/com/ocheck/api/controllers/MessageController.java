package com.ocheck.api.controllers;

import com.ocheck.api.models.Message;
import com.ocheck.api.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

/**
 * @author Ahmet Emrebas on 11/7/2020 6:52 PM
 * @project api
 */


@RestController
@RequestMapping({"/api/v1/messages", "/api/v1/message"})
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
    @PreAuthorize("hasAuthority('message:write')")
    public void saveOne(@RequestBody Message entity) {
        service.saveOne(entity);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('message:write')")
    public void updateOneById(@PathVariable Long id, @RequestBody Message updated) {
        service.updateOneById(id, updated);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('message:write')")
    public void deleteById(@PathVariable Long id) {
        service.deleteById(id);
    }

}


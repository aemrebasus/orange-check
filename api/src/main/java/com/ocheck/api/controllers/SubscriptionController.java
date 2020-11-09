package com.ocheck.api.controllers;

import com.ocheck.api.models.Subscription;
import com.ocheck.api.services.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * @author Ahmet Emrebas on 11/7/2020 8:14 PM
 * @project api
 */
@RestController
@RequestMapping({"/api/v1/subs", "/api/v1/sub"})
public class SubscriptionController {

    @Autowired
    private SubscriptionService service;

    @GetMapping
    @PreAuthorize("hasRole('SUPER')")
    public List<Subscription> findAll() {
        return service.findAll();
    }

    @GetMapping({"/{id}"})
    @PreAuthorize("hasRole('SUPER')")
    public Optional<Subscription> findById(@PathVariable Long id) {
        return service.findById(id);
    }


    @PostMapping
    @PreAuthorize("hasAuthority('super:write')")
    public void saveOne(@RequestBody Subscription entity) {
        service.saveOne(entity);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('super:write')")
    public void updateOneById(@PathVariable Long id, @RequestBody Subscription updated) {
        service.updateOneById(id, updated);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('super:write')")
    public void deleteById(@PathVariable Long id) {
        service.deleteById(id);
    }


}

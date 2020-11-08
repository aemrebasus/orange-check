package com.ocheck.api.controllers;

import com.ocheck.api.models.Project;
import com.ocheck.api.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * @author Ahmet Emrebas on 11/7/2020 9:39 PM
 * @project api
 */

@RestController
@RequestMapping({"/api/v1/projects"})
public class ProjectController {

    @Autowired
    private ProjectService service;

    @GetMapping
    public List<Project> findAll() {
        return service.findAll();
    }

    @GetMapping({"/{id}"})
    public Optional<Project> findById(@PathVariable Long id) {
        return service.findById(id);
    }


    @PostMapping
    public void saveOne(@RequestBody Project entity) {
        service.saveOne(entity);
    }

    @PutMapping("/{id}")
    public void updateOneById(@PathVariable Long id, @RequestBody Project updated) {
        service.updateOneById(id, updated);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        service.deleteById(id);
    }

}

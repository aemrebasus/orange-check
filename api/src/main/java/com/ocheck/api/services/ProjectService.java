package com.ocheck.api.services;

import com.ocheck.api.models.Project;
import com.ocheck.api.repositories.ProjectRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * @author Ahmet Emrebas on 11/7/2020 9:40 PM
 * @project api
 */

@Service
public class ProjectService implements IService<Project> {

    @Autowired
    private ProjectRepository repository;

    @Override
    public List<Project> findAll() {
        return this.repository.findAll();
    }

    @Override
    public Optional<Project> findById(Long id) {
        return this.repository.findById(id);
    }

    @Override
    public void saveOne(Project entity) {
        this.repository.save(entity);
    }

    @Override
    public void updateOneById(Long id, Project updated) {
        Project existing = repository.findById(id).get();
        BeanUtils.copyProperties(updated, existing, "id");
        this.repository.save(existing);
    }

    @Override
    public void deleteById(Long id) {
        this.repository.deleteById(id);
    }
}


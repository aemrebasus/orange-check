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
    private ProjectRepository repo;

    @Override
    public List<Project> findAll() {
        return this.repo.findAll();
    }

    @Override
    public Optional<Project> findById(Long id) {
        return this.repo.findById(id);
    }

    @Override
    public void saveOne(Project entity) {
        this.repo.save(entity);
    }

    @Override
    public void updateOneById(Long id, Project updated) {
        Project existing = repo.findById(id).get();
        BeanUtils.copyProperties(updated, existing, "id");
        this.repo.save(existing);
    }

    @Override
    public void deleteById(Long id) {
        this.repo.deleteById(id);
    }

    @Override
    public List<Project> findByOrgId(Long id) {
        return repo.findByOrgId(id);
    }
}


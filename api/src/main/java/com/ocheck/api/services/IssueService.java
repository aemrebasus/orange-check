package com.ocheck.api.services;

import com.ocheck.api.models.Issue;
import com.ocheck.api.models.User;
import com.ocheck.api.repositories.IssueRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * @author Ahmet Emrebas on 11/7/2020 8:57 AM
 * @project api
 */
@Service
public class IssueService implements IService<Issue> {
    @Autowired
    private IssueRepository repo;

    @Override
    public List<Issue> findAll() {
        return this.repo.findAll();
    }

    @Override
    public Optional<Issue> findById(Long id) {
        return this.repo.findById(id);
    }

    @Override
    public void saveOne(Issue issue) {
        this.repo.save(issue);
    }

    @Override
    public void updateOneById(Long id, Issue updated) {
        Issue existingIssue= this.repo.findById(id).get();
        BeanUtils.copyProperties(updated, existingIssue, "id","created_at");
        this.repo.save(existingIssue);
    }

    @Override
    public void deleteById(Long id) {
        this.repo.deleteById(id);
    }

    @Override
    public List<Issue> findByOrgId(Long id) {
        return repo.findByOrgId(id);
    }
}

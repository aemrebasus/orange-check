package com.ocheck.api.controllers;

import com.ocheck.api.models.Issue;
import com.ocheck.api.security.AuthUserDetails;
import com.ocheck.api.services.IssueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * @author Ahmet Emrebas on 11/7/2020 8:37 AM
 * @project api
 */
@RestController
@RequestMapping("/api/v1/issues")
public class IssueController {

    @Autowired
    private IssueService issueService;

    @GetMapping
    public List<Issue> findAll() {
//        return issueService.findByOrgId();
        return null;
    }

    @GetMapping({"/{id}"})
    public Optional<Issue> findById(@PathVariable Long id, Authentication authentication) {
        return issueService.findById(id);
    }

    @PostMapping
    public void saveOne(@RequestBody Issue issue, Authentication authentication) {
        issueService.saveOne(issue);
    }

    @PutMapping("/{id}")
    public void updateOneById(@PathVariable Long id, @RequestBody Issue updatedIssue, Authentication authentication) {
        issueService.updateOneById(id, updatedIssue);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id, Authentication authentication) {
        issueService.deleteById(id);
    }


}

package com.ocheck.api.controllers;

import com.ocheck.api.models.Issue;
import com.ocheck.api.security.OrgSecurity;
import com.ocheck.api.services.IssueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
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

    @Autowired
    private OrgSecurity orgSecurity;

    @GetMapping
    public List<Issue> findAll(@RequestParam Long orgId, Authentication authentication) {
        if (orgSecurity.hasOrgId(orgId, authentication)) {
            return issueService.findByOrgId(orgId);
        } else {
            return null;
        }
    }

    @GetMapping({"/{id}"})
    public Optional<Issue> findById(@PathVariable Long id) {
        return issueService.findById(id);
    }


    @PostMapping
    public void saveOne(@RequestBody Issue issue) {
        issueService.saveOne(issue);
    }

    @PutMapping("/{id}")
    public void updateOneById(@PathVariable Long id, @RequestBody Issue updatedIssue) {
        issueService.updateOneById(id, updatedIssue);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        issueService.deleteById(id);
    }


}

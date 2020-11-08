package com.ocheck.api.repositories;

import com.ocheck.api.models.Issue;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * @author Ahmet Emrebas on 11/7/2020 9:03 AM
 * @project api
 */

public interface IssueRepository extends JpaRepository<Issue, Long> {
    List<Issue> findByOrgId(Long id);

}

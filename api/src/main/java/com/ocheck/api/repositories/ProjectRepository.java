package com.ocheck.api.repositories;

import com.ocheck.api.models.Project;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Ahmet Emrebas on 11/7/2020 9:41 PM
 * @project api
 */

public interface ProjectRepository extends JpaRepository<Project, Long> {
}

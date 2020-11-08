package com.ocheck.api.repositories;

import com.ocheck.api.models.Issue;
import com.ocheck.api.models.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * @author Ahmet Emrebas on 11/7/2020 6:48 PM
 * @project api
 */

public interface MessageRepository extends JpaRepository<Message, Long> {
    List<Message> findByOrgId(Long id);
}

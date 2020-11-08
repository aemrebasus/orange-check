package com.ocheck.api.repositories;

import com.ocheck.api.models.Message;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Ahmet Emrebas on 11/7/2020 6:48 PM
 * @project api
 */

public interface MessageRepository extends JpaRepository<Message, Long> {
}

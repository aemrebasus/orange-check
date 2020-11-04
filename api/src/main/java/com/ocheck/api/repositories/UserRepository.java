package com.ocheck.api.repositories;

import com.ocheck.api.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

/**
 * @author Ahmet Emrebas on 11/4/2020 1:16 AM
 * @project api
 */

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUserName(String userName);

    List<User> findByFirstNameContains(String firstName);

    List<User> findByLastNameContains(String lastName);


}

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

    Optional<User> findByEmail(String userName);

    List<User> findByFirstNameContains(String firstName);

    List<User> findByLastNameContains(String lastName);


    List<User> findByOrgId(Long orgId);

    Optional<User> findByOrgIdAndId(Long orgId, Long id);

    Optional<User> findByOrgIdAndEmail(Long id, String email);

    Optional<User> findByOrgIdAndUserNameContains(Long id, String userName);

    List<User> findByOrgIdAndFirstNameContains(Long id, String firstName);

    List<User> findByOrgIdAndLastNameContains(Long id, String lastName);

    void deleteByOrgIdAndId(Long orgId, Long id);

}

package com.ocheck.api.repositories;

import com.ocheck.api.models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

/**
 * @author Ahmet Emrebas on 11/4/2020 1:16 AM
 * @project api
 */

public interface UserRepository extends JpaRepository<UserModel, Long> {

    Optional<UserModel> findByUserName(String userName);

    Optional<UserModel> findByEmail(String userName);

    List<UserModel> findByFirstNameContains(String firstName);

    List<UserModel> findByLastNameContains(String lastName);


    List<UserModel> findByOrgId(Long orgId);

    Optional<UserModel> findByOrgIdAndId(Long orgId, Long id);

    Optional<UserModel> findByOrgIdAndEmail(Long id, String email);

    Optional<UserModel> findByOrgIdAndUserNameContains(Long id, String userName);

    List<UserModel> findByOrgIdAndFirstNameContains(Long id, String firstName);

    List<UserModel> findByOrgIdAndLastNameContains(Long id, String lastName);

    void deleteByOrgIdAndId(Long orgId, Long id);

}

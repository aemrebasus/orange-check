package com.ocheck.api.services;

import com.ocheck.api.models.User;

import java.util.List;
import java.util.Optional;

/**
 * @author Ahmet Emrebas on 11/4/2020 1:14 AM
 * @project api
 */

public interface IUserService extends IService<User> {

    Optional<User> findByUserName(String userName);
    List<User> findByFirstName(String firstName);
    List<User> findByLastName(String lastName);


}

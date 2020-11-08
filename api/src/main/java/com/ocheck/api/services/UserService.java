package com.ocheck.api.services;

import com.ocheck.api.models.User;
import com.ocheck.api.repositories.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * @author Ahmet Emrebas on 11/4/2020 1:06 AM
 * @project api
 */

@Service
public class UserService implements IService<User> {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }


    @Override
    public void saveOne(User user) {
        userRepository.save(user);
    }

    @Override
    public void updateOneById(Long id, User updatedUser) {
        User existingUser = userRepository.findById(id).get();
        BeanUtils.copyProperties(updatedUser, existingUser, "id", "username", "created_at");
        this.userRepository.save(existingUser);
    }

    @Override
    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }


    public Optional<User> findByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }

    public List<User> findByFirstName(String firstName) {
        return userRepository.findByFirstNameContains(firstName);
    }

    public List<User> findByLastName(String lastName) {
        return userRepository.findByLastNameContains(lastName);
    }

    public List<User> findByOrgId(Long id){
        return userRepository.findByOrgId(id);
    }


}

package com.ocheck.api.services;

import com.ocheck.api.models.UserModel;
import com.ocheck.api.repositories.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Optional;

/**
 * @author Ahmet Emrebas on 11/4/2020 1:06 AM
 * @project api
 */

@Service
public class UserService implements IService<UserModel> {

    @Autowired
    private UserRepository repo;

    @Autowired
    private HttpSession session;

    @Override
    public List<UserModel> findAll() {
        return repo.findAll();
    }

    @Override
    public Optional<UserModel> findById(Long id) {
        return this.repo.findById(id);
    }

    @Override
    public void saveOne(UserModel entity) {
        this.repo.save(entity);
    }


    @Override
    public void updateOneById(Long id, UserModel updatedUser) {
        UserModel existingUser = repo.findById(id).get();
        BeanUtils.copyProperties(updatedUser, existingUser, "id", "username", "created_at");
        this.repo.save(existingUser);
    }

    @Override
    public void deleteById(Long id) {
        repo.deleteById(id);
    }

    @Override
    public List<UserModel> findByOrgId(Long id) {
        return repo.findByOrgId(id);
    }

    public Optional<UserModel> findByUserName(String userName) {
        return repo.findByUserName(userName);
    }

    public List<UserModel> findByFirstName(String firstName) {
        return repo.findByFirstNameContains(firstName);
    }

    public List<UserModel> findByLastName(String lastName) {
        return repo.findByLastNameContains(lastName);
    }

}


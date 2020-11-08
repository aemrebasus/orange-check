package com.ocheck.api.services;

import com.ocheck.api.models.User;
import com.ocheck.api.repositories.UserRepository;
import com.ocheck.api.security.GetOrgId;
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
    private UserRepository repo;

    @Autowired
    private GetOrgId oid; // Organization ID;


    public List<User> findInMyOrg() {
        return repo.findByOrgId(this.oid.get());
    }

    public Optional<User> findInMyOrgById(Long id) {
        return repo.findByOrgIdAndId(this.oid.get(), id);
    }

    @Override
    public List<User> findAll() {
        return repo.findAll();
    }

    @Override
    public Optional<User> findById(Long id) {
        return repo.findByOrgIdAndId(this.oid.get(), id);
    }

    @Override
    public void saveOne(User user) {
        user.setOrgId(this.oid.get());
        repo.save(user);
    }

    @Override
    public void updateOneById(Long id, User updatedUser) {
        User existingUser = repo.findByOrgIdAndId(this.oid.get(), id).get();
        BeanUtils.copyProperties(updatedUser, existingUser, "id", "username", "created_at");
        existingUser.setOrgId(this.oid.get());
        this.repo.save(existingUser);
    }

    @Override
    public void deleteById(Long id) {
        repo.deleteByOrgIdAndId(this.oid.get(), id);
    }

    @Override
    public List<User> findByOrgId(Long id) {
        return repo.findByOrgId(id);
    }

    public Optional<User> findByUserName(String userName) {
        return repo.findByOrgIdAndUserNameContains(this.oid.get(), userName);
    }

    public List<User> findByFirstName(String firstName) {
        return repo.findByFirstNameContains(firstName);
    }

    public List<User> findByLastName(String lastName) {
        return repo.findByLastNameContains(lastName);
    }

}


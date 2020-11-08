package com.ocheck.api.services;

import com.ocheck.api.models.Subscription;
import com.ocheck.api.repositories.SubscriptionRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * @author Ahmet Emrebas on 11/7/2020 8:13 PM
 * @project api
 */

@Service
public class SubscriptionService implements IService<Subscription> {

    @Autowired
    private SubscriptionRepository repo;

    @Override
    public List<Subscription> findAll() {
        return this.repo.findAll();
    }

    @Override
    public Optional<Subscription> findById(Long id) {
        return this.repo.findById(id);
    }

    @Override
    public void saveOne(Subscription entity) {
        this.repo.save(entity);
    }

    @Override
    public void updateOneById(Long id, Subscription updated) {
        Subscription existing = repo.findById(id).get();
        BeanUtils.copyProperties(updated, existing, "id");
        this.repo.save(existing);
    }

    @Override
    public void deleteById(Long id) {
        this.repo.deleteById(id);
    }

    @Override
    public List<Subscription> findByOrgId(Long id) {
        return repo.findByOrgId(id);
    }

}

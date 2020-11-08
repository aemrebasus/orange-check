package com.ocheck.api.services;

import com.ocheck.api.models.Message;
import com.ocheck.api.repositories.MessageRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * @author Ahmet Emrebas on 11/7/2020 6:47 PM
 * @project api
 */
@Service
public class MessageService implements IService<Message> {

    @Autowired
    private MessageRepository repo;

    @Override
    public List<Message> findAll() {
        return this.repo.findAll();
    }

    @Override
    public Optional<Message> findById(Long id) {
        return this.repo.findById(id);
    }

    @Override
    public void saveOne(Message msg) {
        this.repo.save(msg);
    }

    @Override
    public void updateOneById(Long id, Message updated) {
        Message existing = repo.findById(id).get();
        BeanUtils.copyProperties(updated, existing, "id", "created_at", "from_who", "to_whom");
        this.repo.save(existing);
    }

    @Override
    public void deleteById(Long id) {
        this.repo.deleteById(id);
    }

    @Override
    public List<Message> findByOrgId(Long id) {
        return repo.findByOrgId(id);
    }
}

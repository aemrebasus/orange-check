package com.ocheck.api.services;

import com.ocheck.api.models.Message;
import com.ocheck.api.models.User;
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
    private MessageRepository repository;


    @Override
    public List<Message> findAll() {
        return this.repository.findAll();
    }

    @Override
    public Optional<Message> findById(Long id) {
        return this.repository.findById(id);
    }

    @Override
    public void saveOne(Message msg) {
        this.repository.save(msg);
    }

    @Override
    public void updateOneById(Long id, Message updated) {
        Message existing = repository.findById(id).get();
        BeanUtils.copyProperties(updated, existing, "id", "created_at", "from_who", "to_whom");
        this.repository.save(existing);
    }

    @Override
    public void deleteById(Long id) {
        this.repository.deleteById(id);
    }
}

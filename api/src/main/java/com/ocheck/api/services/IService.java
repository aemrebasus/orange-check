package com.ocheck.api.services;

import com.ocheck.api.models.User;
import org.springframework.beans.BeanUtils;

import java.util.List;
import java.util.Optional;

/**
 * @author Ahmet Emrebas on 11/7/2020 9:00 AM
 * @project api
 */

public interface IService<T> {

    List<T> findAll();
    Optional<T> findById(Long id);
    void saveOne(T entity);
    void updateOneById(Long id, T updated);
    void deleteById(Long id);
}

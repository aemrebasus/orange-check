package com.ocheck.api.services;

import java.util.List;
import java.util.Optional;

/**
 * @author Ahmet Emrebas on 11/4/2020 1:14 AM
 * @project api
 */

public interface IService<T> {
    List<T> findAll();

    Optional<T> findById(Long id);

    void saveOne(T entity);

    void updateOneById(Long id, T entity);

    void deleteById(Long id);
}

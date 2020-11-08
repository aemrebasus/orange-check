package com.ocheck.api.repositories;

import com.ocheck.api.models.Issue;
import com.ocheck.api.models.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * @author Ahmet Emrebas on 11/7/2020 8:13 PM
 * @project api
 */

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
    List<Subscription> findByOrgId(Long id);
}

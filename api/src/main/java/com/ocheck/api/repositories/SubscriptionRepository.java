package com.ocheck.api.repositories;

import com.ocheck.api.models.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Ahmet Emrebas on 11/7/2020 8:13 PM
 * @project api
 */

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
}

package com.ocheck.api.security;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

/**
 * @author Ahmet Emrebas on 11/8/2020 5:32 AM
 * @project api
 */
@Service
public class GetOrgId {
    public Long get() {
        try {
            return ((AuthUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal())
                    .getOrgId();
        } catch (Exception e) {
            return -1L;
        }
    }
}

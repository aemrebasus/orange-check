package com.ocheck.api.security;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

/**
 * @author Ahmet Emrebas on 11/8/2020 1:08 AM
 * @project api
 */

@Service
public class OrgSecurity {

    public boolean hasOrgId(Long id, Authentication authentication ) {
        return ((AuthUserDetails) authentication.getPrincipal()).getOrgId().equals(id);
    }
}

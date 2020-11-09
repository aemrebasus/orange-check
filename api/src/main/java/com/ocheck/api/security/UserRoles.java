package com.ocheck.api.security;

import com.google.common.collect.Sets;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Set;
import java.util.stream.Collectors;

import static com.ocheck.api.security.UserPermission.*;

/**
 * @author Ahmet Emrebas on 11/8/2020 2:54 PM
 * @project api
 */

public enum UserRoles {

    ADMIN(Sets.newHashSet(
            PROJECT_READ, PROJECT_WRITE,
            ISSUE_READ, ISSUE_WRITE,
            USER_READ, USER_WRITE,
            MESSAGE_READ, MESSAGE_WRITE,
            REPORT_READ, REPORT_WRITE
    )),

    DEVELOPER(Sets.newHashSet(
            PROJECT_READ, ISSUE_READ,
            MESSAGE_READ, MESSAGE_WRITE,
            REPORT_READ
    )),

    SCRUMMASTER(Sets.newHashSet(
            PROJECT_READ, PROJECT_WRITE,
            ISSUE_READ, ISSUE_WRITE,
            MESSAGE_READ, MESSAGE_WRITE,
            REPORT_READ, REPORT_WRITE
    )),

    CLIENT(Sets.newHashSet(REPORT_READ)),

    SUPER(Sets.newHashSet(SUPER_READ, SUPER_WRITE));

    private final Set<UserPermission> permissions;

    UserRoles(Set<UserPermission> permissions) {
        this.permissions = permissions;
    }

    public Set<UserPermission> getPermission() {
        return this.permissions;
    }

    public Set<GrantedAuthority> getGrantedAuthorities() {
        Set<GrantedAuthority> permissions = this.getPermission().stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toSet());
        permissions.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return permissions;
    }
}

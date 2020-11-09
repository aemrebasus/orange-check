package com.ocheck.api.security;

import static com.ocheck.api.security.UserPermission.*;
import com.google.common.collect.Sets;
import java.util.Set;

/**
 * @author Ahmet Emrebas on 11/8/2020 2:54 PM
 * @project api
 */

public enum UserRoles {

    ADMIN(Sets.newHashSet(PROJECT_READ, PROJECT_WRITE, ISSUE_READ, ISSUE_WRITE, USER_READ, USER_WRITE, MESSAGE_READ, MESSAGE_WRITE, REPORT_READ, REPORT_WRITE)),
    DEVELOPER(Sets.newHashSet(PROJECT_READ, ISSUE_READ, MESSAGE_READ, MESSAGE_WRITE, REPORT_READ)),
    SCRUMMASTER(Sets.newHashSet(PROJECT_READ, PROJECT_WRITE, ISSUE_READ, ISSUE_WRITE, MESSAGE_READ, MESSAGE_WRITE, REPORT_READ, REPORT_WRITE)),
    CLIENT(Sets.newHashSet(REPORT_READ)),
    SUPERUSER(Sets.newHashSet(SUPER_READ, SUPER_WRITE));

    private final Set<UserPermission> permissions;

    UserRoles(Set<UserPermission> permissions) {
        this.permissions = permissions;
    }

    public Set<UserPermission> getPermission() {
        return this.permissions;
    }
}

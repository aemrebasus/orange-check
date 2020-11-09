package com.ocheck.api.security;

/**
 * @author Ahmet Emrebas on 11/8/2020 2:53 PM
 * @project api
 */

public enum UserPermission {
    USER_READ("user:read"),
    USER_WRITE("user:write"),

    PROJECT_READ("project:read"),
    PROJECT_WRITE("project:write"),

    ISSUE_READ("issue:read"),
    ISSUE_WRITE("issue:write"),

    MESSAGE_READ("message:read"),
    MESSAGE_WRITE("message:write"),


    COMMENT_READ("comment:read"),
    COMMENT_WRITE("comment:write"),

    REPORT_READ("report:read"),
    REPORT_WRITE("report:write"),


    SUPER_READ("super:read"),
    SUPER_WRITE("super:write");

    private final String permission;

    UserPermission(String role) {
        this.permission = role;
    }

    public String getPermission() {
        return this.permission;
    }
}

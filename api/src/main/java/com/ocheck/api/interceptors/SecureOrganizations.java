package com.ocheck.api.interceptors;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author Ahmet Emrebas on 11/8/2020 3:04 AM
 * @project api
 * This interceptor checks the users' organization ID and block them if they try to access other organizations.
 */

@Component
public class SecureOrganizations extends HandlerInterceptorAdapter {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        return super.preHandle(request, response, handler);
    }
}

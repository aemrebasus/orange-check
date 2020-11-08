package com.ocheck.api.services;

import org.springframework.session.config.annotation.web.http.EnableSpringHttpSession;

import javax.servlet.http.HttpSession;

/**
 * @author Ahmet Emrebas on 11/7/2020 10:45 PM
 * @project api
 */

@EnableSpringHttpSession
public interface UserSessionService extends HttpSession {
}

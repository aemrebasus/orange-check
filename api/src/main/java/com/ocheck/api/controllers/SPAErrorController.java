package com.ocheck.api.controllers;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

/**
 * @author Ahmet Emrebas on 11/15/2020 8:01 PM
 * @project api
 */

public class SPAErrorController implements ErrorController {

    @Override
    public String getErrorPath() {
        return "/err";
    }

    @RequestMapping("/err")
    public String handleError(HttpServletRequest request) {
        // get error status
        Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);

        // TODO: log error details here

        if (status != null) {
            int statusCode = Integer.parseInt(status.toString());

            // display specific error page
            if (statusCode == HttpStatus.NOT_FOUND.value()) {
                return "404";
            } else if (statusCode == HttpStatus.INTERNAL_SERVER_ERROR.value()) {
                return "500";
            } else if (statusCode == HttpStatus.FORBIDDEN.value()) {
                return "403";
            }
        }

        // display generic error
        return "/error";
    }
}

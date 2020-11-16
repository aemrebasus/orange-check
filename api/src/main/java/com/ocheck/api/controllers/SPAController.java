package com.ocheck.api.controllers;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author Ahmet Emrebas on 11/15/2020 7:26 PM
 * @project api
 */

@Controller
public class SPAController {

    @RequestMapping(value = "/{path:[^\\.]*}")
    public String redirect() {
        return "forward:/";
    }

//
//    @RequestMapping(value = "/error")
//    public ErrorMessage errorMessage() {
//        return new ErrorMessage("Not Logged In", "401");
//    }


}

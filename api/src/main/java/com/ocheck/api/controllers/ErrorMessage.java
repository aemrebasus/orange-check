package com.ocheck.api.controllers;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * @author Ahmet Emrebas on 11/15/2020 7:57 PM
 * @project api
 */

@Data
@AllArgsConstructor
public class ErrorMessage {
    private String name;
    private String code;
}

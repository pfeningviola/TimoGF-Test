package com.timogf.test.test.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ValidationController {

    @PostMapping("/validation")
    public ResponseEntity<Object> validateUserInput(@RequestBody UserInputDTO userInput) {

        return ResponseEntity.status(200).body(ValidationResponseDTO);
    }
}

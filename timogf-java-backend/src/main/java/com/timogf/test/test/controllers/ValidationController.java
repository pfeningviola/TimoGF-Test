package com.timogf.test.test.controllers;

import com.timogf.test.test.models.UserInputDTO;
import com.timogf.test.test.models.ValidationResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ValidationController {

    @PostMapping("/validation")
    public ResponseEntity<Object> validateUserInput(@RequestBody UserInputDTO userInput) {

        return ResponseEntity.status(200).body( new ValidationResponseDTO);
    }
}

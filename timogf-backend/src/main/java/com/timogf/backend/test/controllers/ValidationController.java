package com.timogf.backend.test.controllers;

import com.timogf.backend.test.models.ErrorMessage;
import com.timogf.backend.test.models.UserInputDTO;
import com.timogf.backend.test.models.ValidationResponseDTO;
import com.timogf.backend.test.services.ValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ValidationController {
    private ValidationService validationService;

    @Autowired
    public ValidationController(ValidationService validationService){
        this.validationService = validationService;
    }

    @PostMapping("/validation")
    public ResponseEntity<Object> validateUserInput(@RequestBody UserInputDTO userInput) {
        if (!validationService.isCompleteName(userInput.getName())){
            return ResponseEntity.status(400).body(new ErrorMessage("The given name is not a complete name."));
        }

        if (!validationService.isAnyCharacterInTheText(userInput.getText())){
            return ResponseEntity.status(400).body(new ErrorMessage("The text must contain at least one non-space character."));
        }

        int numberOfPartsOfName = validationService.numberOfPartsOfName(userInput.getName());
        return ResponseEntity.status(200).body( new ValidationResponseDTO(userInput, numberOfPartsOfName));
    }
}

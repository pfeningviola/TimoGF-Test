package com.timogf.backend.test.services;

import org.springframework.stereotype.Service;

@Service
public class ValidationService {

    public boolean isCompleteName(String name){
        String[] partsOfName = name.trim().split(" ");
        return partsOfName.length > 1;
    }

    public boolean isAnyCharacterInTheText(String text){
        return text.trim().length() >= 1;
    }

    public int numberOfPartsOfName(String name){
        return name.trim().split(" ").length;
    }
}

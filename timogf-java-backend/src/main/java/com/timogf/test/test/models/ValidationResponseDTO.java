package com.timogf.test.test.models;

public class ValidationResponseDTO {
    private UserInputDTO user;
    private int numberOfPartsOfUsername;

    public ValidationResponseDTO(){}

    public ValidationResponseDTO(UserInputDTO user, int numberOfPartsOfUsername){
        this.user = user;
        this.numberOfPartsOfUsername = numberOfPartsOfUsername;
    }

    public UserInputDTO getUser() {
        return user;
    }

    public void setUser(UserInputDTO user) {
        this.user = user;
    }

    public int getNumberOfPartsOfUsername() {
        return numberOfPartsOfUsername;
    }

    public void setNumberOfPartsOfUsername(int numberOfPartsOfUsername) {
        this.numberOfPartsOfUsername = numberOfPartsOfUsername;
    }
}

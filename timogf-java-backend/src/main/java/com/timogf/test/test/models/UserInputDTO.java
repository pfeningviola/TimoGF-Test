package com.timogf.test.test.models;

public class UserInputDTO {
    private String name;
    private String text;

    public UserInputDTO(){}

    public String getName(){
        return this.name;
    }

    public String getText(){
        return this.text;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setText(String text) {
        this.text = text;
    }
}

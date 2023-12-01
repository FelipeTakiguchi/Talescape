package com.felipe.java_api.dto;

import lombok.Data;

import java.util.Date;

@Data
public class UserDTO {
    private String name;
    private String biograpy;
    private Date dateOfBirth;
    private String email;
    
    public UserDTO(String name, String biograpy, Date dateOfBirth, String email){
        this.name = name;
        this.biograpy = biograpy;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
    }
}

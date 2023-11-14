package com.felipe.java_api.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("user")
public class UserModel {
    @Id
    private String id;
    private String name;
    private short age;
    private String password;

    public UserModel(String id, String name, short age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    public UserModel(String name, short age) {
        this.name = name;
        this.age = age;
    }

    public UserModel(String id) {
        this.id = id;
    }

    public UserModel() {
    }
}

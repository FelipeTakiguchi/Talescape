package com.felipe.java_api.model;

import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document("company")
public class CompanyModel {
    @Id
    private String id;
    private String name;
    @DBRef
    private UserModel idUser;
    @DBRef
    private List<UserModel> listUser;

    public CompanyModel(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public CompanyModel(String name) {
        this.name = name;
    }

    public CompanyModel() {
    }
}

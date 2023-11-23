package com.felipe.java_api.dto;

import com.felipe.java_api.model.UserModel;

import lombok.Data;
import java.util.List;

@Data
public class CompanyUserDTO {
    private UserModel user;
    private List<UserModel> userList;
}

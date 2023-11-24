package com.felipe.java_api.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.felipe.java_api.model.UserModel;
import com.felipe.java_api.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("")
    public List<UserModel> getAllUser() {
        List<UserModel> listRes = userService.findAll();
        return listRes;
    }

    // @PostMapping("/file")
    // public void testeFIle(MultipartFile file) throws IOException {
    // userService.saveImage(file);
    // }

    @GetMapping("/{name}")
    public List<UserModel> getUserByName(@PathVariable String name) {
        List<UserModel> listRes = userService.findByName(name);
        return listRes;
    }

    @GetMapping("/{age}/{name}")
    public List<UserModel> getUserByAgeAndName(@PathVariable short age, @PathVariable String name) {
        List<UserModel> listRes = userService.findByAgeAndName(age, name);
        return listRes;
    }

    @PostMapping("")
    public void newUser(@RequestBody UserModel newUser) {
        userService.save(newUser);
    }

    @PutMapping("/{id}")
    public void putUser(@RequestBody UserModel newUser, @PathVariable String id) {
        userService.save((String) id, (String) newUser.getName(), (Date) newUser.getDateOfBirth(), (String) newUser.getBiograpy());
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        userService.delete(id);
    }

}


/*
package com.rafael.java_api.controller;

import java.util.List;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rafael.java_api.dto.CompanyUserDTO;
import com.rafael.java_api.model.CompanyModel;
import com.rafael.java_api.model.UserModel;
import com.rafael.java_api.service.CompanyService;
import com.rafael.java_api.service.UserService;

@RestController
@RequestMapping("/company")
public class CompanyController {

    @Autowired
    private UserService userService;
    @Autowired
    private CompanyService companyService;

    @PostMapping("")
    public void newUser(@RequestBody CompanyUserDTO newCompanyUserDTO) {
        CompanyModel newCompanyModel = new CompanyModel(newCompanyUserDTO.getCompany().getName());

        UserModel userResp = userService
                .save(new UserModel(newCompanyUserDTO.getUser().getName(), newCompanyUserDTO.getUser().getAge()));
        newCompanyModel.setIdUser(new UserModel(userResp.getId()));
        companyService.save(newCompanyModel);
    }

    @PostMapping("/array")
    public void newUserArray(@RequestBody CompanyUserDTO newCompanyUserDTO) {
        List<UserModel> idsUsers = new ArrayList<UserModel>();

        for (UserModel test : newCompanyUserDTO.getUserList()) {
            UserModel userResp = userService.save(new UserModel(test.getName(), test.getAge()));
            idsUsers.add(new UserModel(userResp.getId()));
        }

        CompanyModel newCompanyModel = new CompanyModel(newCompanyUserDTO.getCompany().getName());

        newCompanyModel.setListUser(idsUsers);
        companyService.save(newCompanyModel);
    }

    @GetMapping("")
    public List<CompanyModel> findAllCompanyModels() {
        return companyService.findAll();
    }

    @GetMapping("/user/{userId}")
    public List<CompanyModel> findByUserID(@PathVariable String userId) {
        return companyService.findByUserID(userId);
    }

    @DeleteMapping("/{id}")
    public void deleteCompany(@PathVariable String id) {
        companyService.delete(id);
    }
}
 */
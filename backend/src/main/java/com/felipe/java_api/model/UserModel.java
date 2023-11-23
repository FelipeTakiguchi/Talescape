package com.felipe.java_api.model;

import java.util.Collection;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("user")
public class UserModel implements UserDetails {
    @Id
    private String id;
    private String name;
    private String biograpy;
    private Date dateOfBirth;
    private String password;
    private String email;

    public UserModel(String id, String name, Date dateOfBirth, String biograpy) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.biograpy = biograpy;
    }

    public UserModel(String name, Date dateOfBirth, String biograpy) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.biograpy = biograpy;
    }

    public UserModel(String password, String email) {
        this.password = password;
        this.email = email;
    }

    public UserModel(String id) {
        this.id = id;
    }

    public UserModel() {
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("USER"));
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
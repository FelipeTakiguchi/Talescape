package com.felipe.java_api.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.felipe.java_api.exception.AuthException;
import com.felipe.java_api.model.UserModel;

@Service
public class AuthService implements UserDetailsService {

    @Autowired
    private UserService userService;

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.issuer}")
    private String issuer;

    public String createToken(UserModel user) {
        try {
            final var anAlgorithm = Algorithm.HMAC256(secret);
            final String aToken = JWT.create()
                    .withIssuer(issuer)
                    .withSubject(user.getId())
                    .withExpiresAt(new Date(new Date().getTime() + 24 * 60 * 60 * 1000))
                    .sign(anAlgorithm);
            return aToken;

        } catch (IllegalArgumentException e) {
            throw new AuthException(e.getMessage());
        } catch (JWTCreationException e) {
            throw new AuthException(e.getMessage());
        }

    }

    public String validateToken(String token) {
        try {
            final var anAlgorithm = Algorithm.HMAC256(secret);
            final var decoded = JWT.require(anAlgorithm)
                    .withIssuer(issuer)
                    .build()
                    .verify(token);
            final var anSubject = decoded.getSubject();
            System.out.println(anSubject);
            return anSubject;
        } catch (Exception e) {
            return "";
        }
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserModel resp = this.userService.findById(username);
        if (resp!= null) {
            return resp;
        } else {
            throw new UsernameNotFoundException("User not found");
        }
    }

}
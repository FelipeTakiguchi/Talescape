import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

export const usersContext = createContext({});

usersContext.displayName = "UsersContext";

export const UsersProvider = ({ children }) => {
    const baseUrl = 'http://localhost:8080'

    function validateData(username, email, password, confirmpassword) {
        if (password === confirmpassword && validatePassword(password)) {
            console.log("password");
            if (username.length > 3 && username.length < 16) {
                console.log("username");
                if (validateEmail(email)) {
                    console.log("email")
                    return true;
                }
            }
        }
        return false;
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const validatePassword = (password) => {
        console.log(password)
        return String(password)
            .match(
                /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/
            );
    };

    const RegisterUser = async (username, email, password) => {
        console.log("response.data")
        const response = await axios.post(`${baseUrl}/api/auth/register`, {
            username,
            email,
            password,
        });
        console.log(response.data)
        if(response.data)
            return response;
    }

    const ValidateUser = async (email, password) => {
        const response = await axios.post(`${baseUrl}/api/auth/login`, {
            email,
            password,
        });
        
        console.log(response.data)
        if(response.data)
            return response;
    }

    return (
        <usersContext.Provider value={{
            validateEmail,
            validatePassword,
            validateData,
            RegisterUser,
            ValidateUser
        }}>
            {children}
        </usersContext.Provider>
    );
}
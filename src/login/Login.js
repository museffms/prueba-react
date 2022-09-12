import React from "react";
import { useState } from "react";

import LoginLayout from "./layouts/LoginLayout";
import LoginModel from "./models/LoginModel";
import LoginService from "../services/loginService/LoginService";

const Login = ({setLoggin, setUserkey, changeToUserInfo, exitApp}) => {


    const [loginForm, setLoginForm] = useState(LoginModel);
    const {email, password} = loginForm;

    const [errorMessage, setErrorMessage] = useState(
        {
            message : '',
            visible : false,
        }
    );

    const deleteForm = () => {
        setLoginForm( LoginModel );
        setErrorMessage (
            {
                message : '',
                visible : false,
            }            
        );        
        setLoggin( false );

    }

    const loginApp = () => {

        const ERROR_MESSAGE = 'Login fails';

        if (true === LoginService(email, password)) {
            setErrorMessage(
                {
                    message : '',
                    visible : false,
                }                
            );
            setUserkey(email);
            changeToUserInfo();

        } else {
            setErrorMessage(
                {
                    message : ERROR_MESSAGE,
                    visible : true,
                }                
            );
            setUserkey('');
            setLoggin(false);
        }
    }

    return (
        <LoginLayout 
            loginForm = {loginForm} 
            setLoginForm = {setLoginForm} 
            loginApp = {loginApp}
            errorMessage = {errorMessage}
            deleteForm = {deleteForm}
            exitApp = {exitApp}
        />
    );
}

export default Login;
import React from "react";

import ButtonsLogin from "./ButtonsLogin";

const LoginLayout = ({loginForm, setLoginForm, loginApp, errorMessage, deleteForm, exitApp}) => {

    const {email, password} = loginForm;

    const {message, visible:visibility} = errorMessage;
    const visibilityError = (visibility)
        ? "alert alert-danger mt-3 d-block"
        : "alert alert-danger mt-3 d-none";

    const onChangeEmail = (event) => {
        setLoginForm(
            {
                ...loginForm,
                email : event.target.value,
            }
        );
    }

    const onChangePassword = (event) => {
        setLoginForm(
            {
                ...loginForm,
                password : event.target.value,
            }
        );
    }

    return (
        <div className="col-12 form-group">
            <div className="row mt-3">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" 
                    id="email" name="email" value={loginForm.email} 
                    onChange={onChangeEmail} />
            </div>
            <div className="row mt-3">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" 
                    id="password" name="password" value={loginForm.password} 
                    onChange={onChangePassword} />
            </div>
            <ButtonsLogin 
                loginApp = { loginApp }
                deleteForm = { deleteForm } 
                exitApp = {exitApp}
            />
            <div className={visibilityError} >
                <p id="loginMessage">{message}</p>
            </div>
        </div>
    );
}

export default LoginLayout;
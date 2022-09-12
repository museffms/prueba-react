import React from "react";
import {useState, useEffect} from "react";

import UserService from '../services/userService/UserService';
import UserModel from './models/UserModel';

const verifyLogin = (userkey) => {

    return UserService(userkey);
}

const User = ({userkey, exitApp}) => {

    const [userForm, setUserForm] = useState(UserModel);

    const { name, phone, email, city} = userForm;

    const [visibilityMessage, setVisibilityMessage] = useState("alert alert-danger mt-3 d-none");
    const [message, setMessage] = useState('');

    useEffect(()=>{
        setUserForm(verifyLogin(userkey))
        },
        []
    );
   
    const checkName = () => {
        if (name.length < 2) {
            setVisibilityMessage("alert alert-danger mt-3 d-block");
            setMessage('Longitud inadecuada del nombre');
        } else {
            setVisibilityMessage('alert alert-danger mt-3 d-none');
            setMessage('');
        }
    }

    useEffect(
        checkName,
        [name]
    ); 
   
    const onChangeInput = (event) => {        
        setUserForm(
            {
                ...userForm,
                [event.target.name] : event.target.value,
            }
        );
    }  

    const onClickChangeForm = () => {
        sessionStorage.setItem('datos_user',JSON.stringify(userForm));
        setVisibilityMessage("alert alert-success mt-3 d-block");
        setMessage('Grabación OK');
    }

    const userFormComponent = (
        <div className="col-12 form-group">
            <div className="row mt-3">
                <label htmlFor="name">Nombre</label>
                <input type="text" className="form-control" 
                    id="name" name="name" value = { name }  
                    onChange={onChangeInput} />
            </div>
            <div className="row mt-3">
                <label htmlFor="phone">Teléfono</label>
                <input type="text" className="form-control" 
                    id="phone" name="phone" value = { phone } 
                    onChange={onChangeInput} />
            </div>
            <div className="row mt-3">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" 
                    id="email" name="email" value = { email } 
                    onChange={onChangeInput} />
            </div>                                    
            <div className="row mt-3">
                <label htmlFor="city">Localidad</label>
                <input type="text" className="form-control" 
                    id="city" name="city" value = { city } 
                    onChange={onChangeInput} />
            </div>
            <div className="row mt-3">
                <button className="btn btn-danger" 
                    onClick={exitApp}>
                        Salir
                </button>
                <button className="btn btn-info ml-5" 
                    onClick={onClickChangeForm}>
                        Guardar
                </button>
            </div>
            <div className={visibilityMessage} >
                <p id="loginMessage">{message}</p>
            </div>
        </div>
    );

    return userFormComponent;

}

export default User;
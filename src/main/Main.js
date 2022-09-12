import React from "react";
import { useState } from "react";

import Login from "../login/Login";
import User from "../user-form/User";
import Salary from "../salary/Salary";

const LOGIN_TITLE = 'Identificación usuario';
const USER_TITLE = 'Datos del usuario';
const SALARY_TITLE = 'Datos de nómina';

const Main = () => {

    const [pageTitle, setPageTitle] = useState(LOGIN_TITLE);

    const [loggin, setLoggin] = useState(false);
    const [userkey, setUserkey] = useState('');
    const [page, setPage] = useState(0);

    const changeToUserInfo = () => {
        setPage(1);
        setPageTitle(USER_TITLE);
        setLoggin(true);
    }

    const changeToSalaryInfo = () => {
        setPage(2);
        setPageTitle(SALARY_TITLE);
        setLoggin(true);
    }

    const exitApp = () => {
        sessionStorage.removeItem('datos_user');
        setPage(0);
        setPageTitle(LOGIN_TITLE);
        setUserkey('');
        setLoggin(false);
    }

    const displayedComponent = (
        (loggin && 1 === page ) 
            ? <User 
                userkey = {userkey}
                exitApp = {exitApp}
            />
            : (loggin && 2 === page ) 
                ?   <Salary 
                        userkey = {userkey}
                        exitApp = {exitApp}                  
                    />               
                :    <Login
                        setLoggin = {setLoggin} 
                        setUserkey = {setUserkey}
                        changeToUserInfo = {changeToUserInfo}
                        exitApp = {exitApp}
                    />
    );

    const navComponent = (
        (loggin) ?  <div> 
                        <button className="btn btn-default active" onClick={changeToUserInfo}>
                            Datos usuario
                        </button>
                        <button className="btn btn-default ml-2" onClick={changeToSalaryInfo}>
                            Datos nómina
                        </button>
                    </div>
                :   <div></div>
    );

    const mainElement = (
        <div>
            <header>
                <h1>{pageTitle}</h1>
                <nav>
                    {navComponent}
                </nav>
            </header>
            <main>
                {displayedComponent}
            </main>
        </div>
    );

    return mainElement;
}

export default Main;
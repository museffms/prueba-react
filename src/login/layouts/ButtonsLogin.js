import React from "react";

const ButtonsLogin = ({loginApp, deleteForm}) => {

    const onClickSendForm = () => {
        loginApp();
    }

    const onClickResetForm = () => {
        deleteForm();
    }

    return (
        <div className="row mt-3">
            <button className="btn btn-danger" onClick={onClickResetForm}>Borrar</button>
            <button className="btn btn-info ml-5" onClick={onClickSendForm}>Enviar</button>
        </div>        
    );
}

export default ButtonsLogin;
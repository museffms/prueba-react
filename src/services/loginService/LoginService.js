const LoginService = (email, password) => {

    const VALID_EMAIL = 'prueba@prueba.com';
    const VALID_PASSWORD = '123456';

    return (
        VALID_EMAIL === email
        && VALID_PASSWORD === password
    ) && true;

}

export default LoginService;
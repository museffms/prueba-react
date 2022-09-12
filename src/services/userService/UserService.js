import UserModel from '../../user-form/models/UserModel';

const UserService = (userkey) => {
    const userForm = UserModel;

    const VALID_EMAIL = 'prueba@prueba.com';

    if (VALID_EMAIL === userkey) {
        const userDatos = JSON.parse(sessionStorage.getItem('datos_user'));

        if (null === userDatos) {

            return  {   
                name : 'Carmelo Cotón',
                phone : '666666666',
                email : 'prueba@prueba.com',
                city : 'Madrid',
            }
        } else {

            return userDatos;
        }

    } else {
        
        return userForm;
    }
}

export default UserService;
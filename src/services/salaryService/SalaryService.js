import SalaryModel from "../../salary/models/SalaryModel";

const SalaryService = (userkey) => {
    const salaryForm = SalaryModel;

    const VALID_EMAIL = 'prueba@prueba.com';

    if (VALID_EMAIL === userkey) {
        const salaryUser = {   
            id : 1,
            idEmployee : 1,
            gros : 35000,
            irpf : 11.5,
            seguridadSocial : 7.1,
            category : 'Oficial de primera',
            startDate : '2020-07-15',
        }

        return salaryUser;
    } else {
        
        return salaryForm;
    }
}

export default SalaryService;
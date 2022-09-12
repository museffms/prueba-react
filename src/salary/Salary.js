import React, { useState } from "react";
import { useEffect } from "react";

import SalaryLayout from "./layouts/SalaryLayout";
import SalaryModel from "./models/SalaryModel";
import SalaryService from "../services/salaryService/SalaryService";

const salaryService = (userkey) => {
    return SalaryService(userkey);
}

const Salary = ({userkey, exitApp}) => {

    const [salaryForm, setSalaryForm] = useState(SalaryModel);

    useEffect(()=>{
        setSalaryForm(salaryService(userkey))
        },
        []
    );

    return <SalaryLayout 
                salaryForm = {salaryForm}                 
                exitApp = {exitApp} 
            />
}

export default Salary;
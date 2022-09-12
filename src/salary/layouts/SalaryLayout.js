import React from "react";

const SalaryLayout = ({salaryForm, exitApp}) => {

    const { id, idEmployee, gros, irpf, seguridadSocial, category, startDate} = salaryForm;

    return (
        <div className="col-12 form-group">                                   
            <div className="row mt-3">
                <label htmlFor="gros">Salario bruto</label>
                <input type="text" className="form-control" readOnly
                    id="gros" name="gros" value = { gros } />
            </div>
            <div className="row mt-3">
                <label htmlFor="irpf">Retención IRPF</label>
                <input type="text" className="form-control" readOnly
                    id="irpf" name="irpf" value = { irpf } />
            </div>
            <div className="row mt-3">
                <label htmlFor="segsoc">Retención Seg. Social</label>
                <input type="text" className="form-control" readOnly
                    id="segsoc" name="segsoc" value = { seguridadSocial } />
            </div>
            <div className="row mt-3">
                <label htmlFor="category">Categoría</label>
                <input type="text" className="form-control" readOnly
                    id="category" name="category" value = { category } />
            </div>
            <div className="row mt-3">
                <label htmlFor="startDate">Fecha entrada</label>
                <input type="text" className="form-control" readOnly
                    id="startDate" name="startDate" value = { startDate } />
            </div>
            <div className="row mt-3">
                <button className="btn btn-danger" onClick = {exitApp}>
                    Salir
                </button>
            </div>
        </div>
    );
}

export default SalaryLayout;
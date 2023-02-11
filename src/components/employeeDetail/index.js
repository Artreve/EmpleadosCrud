import React, { useState } from "react";
import InputForm from "../common/InputForm";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateEmployed } from "../../features/empleados/empleadosSlice";

//Targeta con datos del empleado
function EmployedCard({employee}) {
  return(
  <>
    <h1 className="card-title">{`${employee.first_name} ${employee.last_name}`}</h1>
    <h5>Email: {employee.email}</h5>
    <h5>Numero de telefono: {employee.phone_number}</h5>
    <h5>Fecha de ingreso: {employee.hire_date}</h5>
    <h5>salario: ${employee.salary}</h5>
    <h5>Comision: ${employee.comission_pct}</h5>
  </>
  )
}
//Renderizado condicional
function EmployeeId({employee}) {
  const handleSubmit = e =>{
    e.preventDefault()
      dispatch(updateEmployed(employee))
      setForm(false)
  }
  const handleChange = (e) => {
    employee = { [e.target.name]: e.target.value };
  };
  const dispatch = useDispatch()
  const [form, setForm] = useState(false);
  if (!form) {
    return (
     <>
     <EmployedCard employee={employee}/>
     <Link to={`/`} type="button" className="btn btn-info">
      volver
    </Link>
    <button
      type="button" onClick={()=>setForm(true)} className="btn btn-success mx-3">
      Editar
    </button>
     </> 
    )

  } else {
    return (
      <>
        <form className="form" onSubmit={handleSubmit}>
          {<InputForm employee={employee} handleChange={handleChange} />}
          <button type="button" onClick={() => setForm(false)} className="btn btn-info">
            Cancelar
          </button>
          <button type="submit" onClick={handleSubmit} className="btn btn-success m-3">
            Editar @
          </button>
        </form>
      </>
    );
  }
}

export default EmployeeId;

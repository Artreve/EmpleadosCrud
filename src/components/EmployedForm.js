import React from "react";
import { useState } from "react";
import { addEmployed } from "../features/empleados/empleadosSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
function EmployedForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [empleado, setEmpleado] = useState({
    first_name:'',
    last_name:'',
    email:'',
    phone_number:'',
    hire_date:'',
    salary: 0,
    comission_pct: 0
   }
  );
  const handleChange = (e) => {
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };
  const handleSubmit = e =>{
    e.preventDefault()
    dispatch(addEmployed({...empleado, employee_id: uuid()}))
    navigate('/')   
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form className="form" onSubmit={handleSubmit}>
            <label className="my-3">Nombre</label>
            <input
              onChange={handleChange}
              name="first_name"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="nombre"
            />
            <label className="my-3">Apellido</label>
            <input
              onChange={handleChange}
              name="last_name"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="apellido"
            />
            <label className="my-3">Correo</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="ejemplo@ejemplo.com"
            />
            <label className="my-3">Numero de telefono</label>
            <input
              onChange={handleChange}
              name="phone_number"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="telefono"
            />
            <label className="my-3">Fecha de ingreso</label>
            <input
              onChange={handleChange}
              name="hire_date"
              type="date"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Nombre"
            />
            <label className="my-3">Salario</label>
            <input
              onChange={handleChange}
              name="salary"
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="$"
            />
            <label className="my-3">Comision</label>
            <input
              onChange={handleChange}
              name="comission_pct"
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="$"
            />
            <button type="submit" className="btn btn-primary my-3">
              Crear empleado
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmployedForm;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
function EmployedDetail() {
  // const dispatch = useDispatch();
  const params = useParams();
  const [form, setForm] = useState(false);
  const empleados = useSelector((state) => state.employed.empleados);
  const id = params.id;
  console.log(empleados);
  //Hasta aqui si funciona
  const empleadoSearch = (id) => {
    return empleados.find((empleado) => empleado.employee_id === id);
  };
  const empleado = empleadoSearch(id);

  const renderData = ()=>{
    if(!form){
      return(
        <>
        <h1 className="card-title">{`${empleado.first_name} ${empleado.last_name}`}</h1>
        <h5>Email: {empleado.email}</h5>
        <h5>Numero de telefono: {empleado.phone_number}</h5>
        <h5>Fecha de ingreso: {empleado.hire_date}</h5>
        <h5>salario: ${empleado.salary}</h5>
        <h5>Comision: ${empleado.comission_pct}</h5>
        <Link to={`/`} type="button" className="btn btn-info">
          volver
        </Link>
        <button
          type="button"
          onClick={() => {
            setForm(true);
          }}
          className="btn btn-success mx-3">
          Editar
        </button>   
        </>
    )
    }else{
      return(
      <>
      <label className="my-3">Nombre</label>
      <input
        name="first_name"
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="nombre"
      />
      <label className="my-3">Apellido</label>
      <input
        name="last_name"
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="apellido"
      />
      <label className="my-3">Correo</label>
      <input
        name="email"
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="ejemplo@ejemplo.com"
      />
      <label className="my-3">Numero de telefono</label>
      <input
        name="phone_number"
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="telefono"
      />
      <label className="my-3">Fecha de ingreso</label>
      <input
        name="hire_date"
        type="date"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="Nombre"
      />
      <label className="my-3">Salario</label>
      <input
        name="salary"
        type="number"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="$"
      />
      <label className="my-3">Comision</label>
      <input
        name="comission_pct"
        type="number"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="$"
      />
      <button
        type="button"
        onClick={() => setForm(false)}
        className="btn btn-info"
      >
        Cancelar
      </button>
      <button type="button" className="btn btn-success m-3">
        Guardar
      </button>
      </> 
    )}
  }
  console.log(renderData)
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card my-3">
            <div className="card-body">
             {renderData()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployedDetail;

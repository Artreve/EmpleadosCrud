import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
function EmployedDetail() {
  // const dispatch = useDispatch();
  const params = useParams();
  const empleados = useSelector((state) => state.employed.empleados);
  const id = params.id;
  console.log(empleados);
  //Hasta aqui si funciona
  const empleadoSearch = (id) => {
    return empleados.find((empleado) => empleado.employee_id === id);
  };
  const empleado = empleadoSearch(id);
  return (
    <div className="container">
      <div className="row">
      <div className="col">
        <div className="card my-3">
          <div className="card-body">
            <h1 className="card-title">{`${empleado.first_name} ${empleado.last_name}`}</h1>
            <h5>Email: {empleado.email}</h5>
            <h5>Numero de telefono: {empleado.phone_number}</h5>
            <h5>Fecha de ingreso: {empleado.hire_date}</h5>
            <h5>salario: ${empleado.salary}</h5>
            <h5>Comision: ${empleado.comission_pct}</h5>
            <Link to={`/`} type="button" className="btn btn-info">
              volver
            </Link>
            <button type="button" className="btn btn-success mx-3">
              Editar
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default EmployedDetail;

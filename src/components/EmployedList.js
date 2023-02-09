import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteEmployed } from "../features/empleados/empleadosSlice";
function EmployedList() {
  const dispatch = useDispatch();
  const empleados = useSelector((state) => state.employed.empleados);
  const handleDelete = (id) => {
    dispatch(deleteEmployed(id));
  };
  const empleadoArray = empleados.map((empleado) => {
    return (
      <div className="col-sm-6 mb-sm-0" key={empleado.employee_id}>
        <div className="card my-3">
          <div className="card-body">
            <h1 className="card-title">{`${empleado.first_name} ${empleado.last_name}`}</h1>
            <h5>Email: {empleado.email}</h5>
            <Link
              to={`detail_employed/${empleado.employee_id}`}
              type="button"
              className="btn btn-info"
            >
              Ver
            </Link>
            <button
              onClick={() => handleDelete(empleado.employee_id)}
              type="button"
              className="btn btn-danger mx-3"
            >
              Borrar
            </button>
          </div>
        </div>
      </div>
    );
  });
  console.log("listado de empleados: " + empleados);
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 col-md-4 mt-3">
          <Link
            to="create_employed"
            type="button"
            className="btn btn-success fw-bold mx-2"
          >
            Crear nuevo empleado
          </Link>
        </div>
      </div>
      <div className="row">{empleadoArray}</div>
    </div>
  );
}

export default EmployedList;

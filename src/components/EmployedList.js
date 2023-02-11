import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteEmployed } from "../features/empleados/empleadosSlice";
import { Employees } from "./home";
function EmployedList() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState(false)
  const empleados = useSelector((state) => state.employed.empleados);
  const handleDelete = (id) => {
    dispatch(deleteEmployed(id));
  };
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
      <div className="row">
        <Employees employees={empleados} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default EmployedList;

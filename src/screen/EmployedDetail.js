import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import EmployeeId from "../components/employeeDetail";
import ErrorMenssaje from "../components/common/ErrorMenssage";
import { Link } from "react-router-dom";
function EmployedDetail() {
  const params = useParams();
  const empleados = useSelector((state) => state.employed.empleados);
  const id = params.id;
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
              {empleado ? (
                <EmployeeId employee={empleado} />
              ) : (
                <>
                  <ErrorMenssaje
                    tittle={"Empleado no encontrado"}
                    message={"Ingrese un empleado valido"}
                  />
                  <Link to={`/`} type="button" className="btn btn-info">
                    volver
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployedDetail;

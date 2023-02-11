import React from "react";
import ErrorMenssaje from '../components/common/ErrorMenssage'
import { Link } from "react-router-dom";
function EmployeesList({ employees = [], onDelete }) {
  return (
    <>
      {employees.map((employee) => {
        return (
          <div className="col-sm-6 mb-sm-0" key={employee.employee_id}>
            <div className="card my-3">
              <div className="card-body">
                <h1 className="card-title">{`${employee.first_name} ${employee.last_name}`}</h1>
                <h5>Email: {employee.email}</h5>
                <Link
                  to={`detail_employed/${employee.employee_id}`}
                  type="button"
                  className="btn btn-info"
                >
                  Ver
                </Link>
                <button
                  onClick={() => onDelete(employee.employee_id)}
                  type="button"
                  className="btn btn-danger mx-3"
                >
                  Borrar
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
//recibe la lista de empleados y es el que tiene la logica de como se muestra
export function Employees({ employees, onDelete}) {
  return (
    <>
      {employees.length === 0 ? (
        <ErrorMenssaje
          tittle={"Error"}
          message={"No se encuentran RRHH diponibles"}
        />
      ) : (
        <EmployeesList employees={employees} onDelete={onDelete} />
      )}
    </>
  );
}

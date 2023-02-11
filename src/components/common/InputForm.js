import React from "react";

function InputForm({ employee, handleChange }) {
  return (
    <>
      <label className="my-3">Nombre</label>
      <input
        onChange={handleChange}
        name="first_name"
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="nombre"
        value={employee.first_name}
      />
      <label className="my-3">Apellido</label>
      <input
        onChange={handleChange}
        name="last_name"
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="apellido"
        value={employee.last_name}
      />
      <label className="my-3">Correo</label>
      <input
        onChange={handleChange}
        name="email"
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="ejemplo@ejemplo.com"
        value={employee.email}
      />
      <label className="my-3">Numero de telefono</label>
      <input
        onChange={handleChange}
        name="phone_number"
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="telefono"
        value={employee.phone_number}
      />
      <label className="my-3">Fecha de ingreso</label>
      <input
        onChange={handleChange}
        name="hire_date"
        type="date"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="Nombre"
        value={employee.hire_date}
      />
      <label className="my-3">Salario</label>
      <input
        onChange={handleChange}
        name="salary"
        type="number"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="$"
        value={employee.salary}
      />
      <label className="my-3">Comision</label>
      <input
        onChange={handleChange}
        name="comission_pct"
        type="number"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="$"
        value={employee.comission_pct}
      />
    </>
  );
}

export default InputForm;

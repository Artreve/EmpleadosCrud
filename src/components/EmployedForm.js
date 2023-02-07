import React from "react";

function EmployedForm() {
  return (
    <div className="container">
      <div className="row">
        <form className="form">
          <label className="my-3">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="nombre"
          />
          <label className="my-3">Apellido</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="apellido"
          />
          <label className="my-3">Correo</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="ejemplo@ejemplo.com"
          />
          <label className="my-3">Numero de telefono</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="telefono"
          />
          <label className="my-3">Fecha de ingresp</label>
          <input
            type="date"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Nombre"
          />
          <label className="my-3">Salario</label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="$"
          />
          <label className="my-3">Comision</label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="$"
          />
          <button type="submit" className="btn btn-primary my-3">Crear empleado</button>
          
        </form>
      </div>
    </div>
  );
}

export default EmployedForm;

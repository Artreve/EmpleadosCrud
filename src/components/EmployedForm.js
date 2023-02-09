import React, { useEffect,useState } from "react";
import { addEmployed, updateEmployed } from "../features/empleados/empleadosSlice";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
function EmployedForm() {
  // hooks
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const params = useParams();
  const empleados = useSelector((state) => state.employed.empleados);
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
  //Controlar si existe un parametro
  useEffect(()=>{
    if(params.id){
      setEmpleado( empleados.find(empleado => empleado.employee_id === params.id)) //lo que encuentro con el id lo guardo en el estado  
    }
  },[])
  const handleChange = (e) => {
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };
  const handleSubmit = e =>{
    e.preventDefault()
    if(params.id){
      dispatch(updateEmployed(empleado))
      navigate(`/`)
    }else{
      dispatch(addEmployed({...empleado, employee_id: uuid()}))
      navigate('/')
    }
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
              value={empleado.first_name}
            />
            <label className="my-3">Apellido</label>
            <input
              onChange={handleChange}
              name="last_name"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="apellido"
              value={empleado.last_name}
            />
            <label className="my-3">Correo</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="ejemplo@ejemplo.com"
              value={empleado.email}
            />
            <label className="my-3">Numero de telefono</label>
            <input
              onChange={handleChange}
              name="phone_number"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="telefono"
              value={empleado.phone_number}
            />
            <label className="my-3">Fecha de ingreso</label>
            <input
              onChange={handleChange}
              name="hire_date"
              type="date"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Nombre"
              value={empleado.hire_date}
            />
            <label className="my-3">Salario</label>
            <input
              onChange={handleChange}
              name="salary"
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="$"
              value={empleado.salary}
            />
            <label className="my-3">Comision</label>
            <input
              onChange={handleChange}
              name="comission_pct"
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="$"
              value={empleado.comission_pct}
            />
            <button type="submit" className="btn btn-success my-3">
              {params.id ? 'Editar empleado' : 'Crear empleado +'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmployedForm;

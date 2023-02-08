import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
function EmployedDetail() {
  // const dispatch = useDispatch();
  const params = useParams();
  const empleados =  useSelector(state => state.employed.empleados);
  const id = params.id
  console.log(empleados)
  //Hasta aqui si funciona
  const empleadoSearch = (id) => {
    return empleados.find(empleado => empleado.employee_id === id)
  }
  const empleado = empleadoSearch(id)
  console.log(empleado)
  return (
    <div>EmployedDetail</div>
  )
}

export default EmployedDetail
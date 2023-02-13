import { createSlice } from "@reduxjs/toolkit";
const initialState={
    empleados:[
        {
            employee_id:'340da134-2dde-4dfe-b94f-e76f1071d94b',
            first_name:'Mariano',
            last_name:'Fernandez',
            email:'mariano@fernandez.com',
            phone_number:'123456789',
            hire_date:'2021-8-13',
            salary: 50,
            comission_pct: 100
        },
        {
            employee_id:'99fa9416-d632-4619-9abc-082b248c089b',
            first_name:'Marcos',
            last_name:'Rodriguez',
            email:'marcos@rodriguez.com',
            phone_number:'123456789',
            hire_date:'2021-10-12',
            salary: 50,
            comission_pct: 60
        },{
            employee_id:'9a14376e-1756-4534-b194-1a1c3d23f2b1',
            first_name:'Juan',
            last_name:'Lujan',
            email:'juan@lujan.com',
            phone_number:'123456789',
            hire_date:'2023-1-15',
            salary: 40,
            comission_pct: 80
        }
    ]
}
export const empladosSlice = createSlice({
    name: 'employed',
    initialState: initialState,
    reducers:{
        addEmployed: (state, action)=>{
            state.empleados = [...state.empleados, action.payload]
            console.log(state, action.payload)
        },
        deleteEmployed: (state, action)=>{
            state.empleados = state.empleados.filter(empleado => empleado.employee_id !== action.payload)
        },
        updateEmployed: (state,action) =>{
            //desestructuramos el action
            const {employee_id, first_name, last_name, email, phone_number, hire_date, salary,comission_pct} = action.payload
            //buscamos en nuestro state, el empleado correspondiente al id que traemos
            const empleadoIndex = state.empleados.findIndex(state => state.employee_id === employee_id)
            const empleadoActualizar =  {...state.empleados[empleadoIndex]}
            if(empleadoActualizar){
                //si el empleado existe, entonces reemplazamos por los valores actuales
                empleadoActualizar.first_name = first_name
                empleadoActualizar.last_name = last_name
                empleadoActualizar.email = email
                empleadoActualizar.phone_number = phone_number
                empleadoActualizar.hire_date = hire_date
                empleadoActualizar.salary = salary
                empleadoActualizar.comission_pct = comission_pct
            }
            //Creo un nuevo array de empleados
            const nuevosEmpleados = [...state.empleados]
            //Busco la posicion del id y le asigno los nuevos valores para actualizar
            nuevosEmpleados[empleadoIndex] = empleadoActualizar
            //Asigno el nuevo array en el array original
            state.empleados = [...nuevosEmpleados]
        }
    }
})
export const {addEmployed, deleteEmployed,updateEmployed} = empladosSlice.actions
export default empladosSlice.reducer
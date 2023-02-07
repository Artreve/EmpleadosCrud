import { createSlice } from "@reduxjs/toolkit";
const initialState={
    empleados:[
        {
            employee_id:'340da134-2dde-4dfe-b94f-e76f1071d94b',
            first_name:'Marcos',
            last_name:'Rodriguez',
            email:'juan@juan.com',
            phone_number:'123456789',
            hire_date:'2021-10-12',
            salary: 5,
            comission_pct: 10
        },
        {
            employee_id:'99fa9416-d632-4619-9abc-082b248c089b',
            first_name:'Marcos',
            last_name:'Rodriguez',
            email:'juan@juan.com',
            phone_number:'123456789',
            hire_date:'2021-10-12',
            salary: 5,
            comission_pct: 10
        },{
            employee_id:'9a14376e-1756-4534-b194-1a1c3d23f2b1',
            first_name:'Marcos',
            last_name:'Rodriguez',
            email:'juan@juan.com',
            phone_number:'123456789',
            hire_date:'2021-10-12',
            salary: 5,
            comission_pct: 10
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
        }
    }
})
export const {addEmployed, deleteEmployed} = empladosSlice.actions
export default empladosSlice.reducer
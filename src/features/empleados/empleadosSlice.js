import { createSlice } from "@reduxjs/toolkit";
const initialState={
    empleados:[
        {
        employee_id:1,
         first_name:'Juan',
         last_name:'Lara',
         email:'sebas981@live.com',
         phone_number: '3865624377',
         hire_date: 2023,
         salary: 100000,
         comission_pct: 5000
        },
        {
        employee_id:2,
         first_name:'Juan',
         last_name:'Lara',
         email:'sebas981@live.com',
         phone_number: '3865624377',
         hire_date: 25-10-2023,
         salary: 100000,
         comission_pct: 5000
        },
    ]
}
export const empladosSlice = createSlice({
    name: 'employed',
    initialState: initialState,
    reducers:{
        
    }
})
// export const {} = empladosSlice.actions
export default empladosSlice.reducer
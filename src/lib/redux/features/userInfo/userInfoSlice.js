import { createSlice } from "@reduxjs/toolkit";


const userInfoSlice = createSlice({
    name: "userInfo",
    initialState: {
        name:"",
        phone:"",
        address:"",
        errors:[]
    },
    reducers: {
        setError(state, action) {
            const {field, error} = action.payload
            const hasError = state.errors.find(error => error.field == field && error.type == error.err)
            if(!hasError){
                state.errors = [...state['errors'], {...error, field:field}]
            }
        },
        setValue(state, action){
            const { value, field} = action.payload
            state[field] = value
        },
        removeFieldError(state, action){
            const { field } = action.payload
            state.errors = state.errors.filter( item => item.field !=field)
        },
        setAllError(state, action){
            state.errors = action.payload
        },
        errorCheck(state, action){
            let errors = []
            if(state.name == ""){
                errors = [...errors, {  type:"empty", errMsg: "Name is required", field:"name" }]
            }

            const phoneRegex = /^[0-9]{10,11}$/;
            if(state.phone == ""){
                errors = [...errors, {  type:"empty", errMsg: "Phone is required", field:"phone" }]
            }else if(!phoneRegex.test(state.phone)){
                errors = [...errors, {  type:"invalid_phone_number", errMsg: "Phone is Invalid", field:"phone" }]
            }
            if(state.address == ""){
                errors = [...errors, {  type:"empty", errMsg: "Address is required", field:"address" }]
            }
            state.errors = errors

        }

    },

})

export const {  setError, 
                setValue, 
                removeFieldError, 
                setAllError     } = userInfoSlice.actions;
export default userInfoSlice.reducer;
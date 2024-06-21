import { createSlice } from "@reduxjs/toolkit"

 
let state=0

let counterSlice=createSlice({
    initialState:state,
    name:'counter',
    reducers:{
        increase : (state,action)=>{
            
           return state+=action.payload
        },
        decrease:(state)=>{
           return state--
        }
    }
})

export default counterSlice.reducer

export let {increase,decrease} = counterSlice.actions


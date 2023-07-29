import { createSlice } from "@reduxjs/toolkit";
const initialState={
    Details:[],
}
export const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
    ADD_DETAILS:(state,{payload})=>{
 state.Details=payload
     }
    }
})

export const  {ADD_DETAILS}=counterSlice.actions
export default counterSlice.reducer
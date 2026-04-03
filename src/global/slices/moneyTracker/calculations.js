import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    transactions:[]
}
export const calculationSlice = createSlice({
    
    name:"calculator",
    initialState,
    reducers:{
        setTransacrtion : (state, action) =>{
            state.transactions = action.payload;
        },
        
        addTransaction: (state, action)=>{
            state.transactions.push(action.payload);
        }
    },
});

export const {setTransacrtion, addTransaction} = calculationSlice.actions;
export default calculationSlice.reducer;
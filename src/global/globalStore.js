import {configureStore} from "@reduxjs/toolkit";
import calculationReducer from "./slices/moneyTracker/calculations";
import roleReducer from "./slices/role/roleSlice";
export  const globalStore = configureStore({
    reducer:{
        calculator: calculationReducer,
        role: roleReducer,
    },
});
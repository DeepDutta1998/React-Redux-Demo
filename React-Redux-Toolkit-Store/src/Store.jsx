import { configureStore } from "@reduxjs/toolkit";

const initialState={
    name:"Aditi gupta",
    phone:"9966369856",
    email:"adi@gmail.com",
}



export const Store=configureStore({
    reducer:(state)=>{
        return state
    },
    preloadedState:initialState

})



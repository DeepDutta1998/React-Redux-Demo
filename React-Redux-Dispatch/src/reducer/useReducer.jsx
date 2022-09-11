import { createReducer } from "@reduxjs/toolkit"
import { Action } from "history"

const initialState={
    name:"Aditi gupta",
    phone:"9966369856",
    email:"adi@gmail.com",
}

//use reducer

// export default(state=initialState, action)=>{
//     if(action.type==="UPDATE_NAME"){
//         return {
//             ...state,
//             name:action.payload
//         }
//     }
//     return state
// }


// use toolkit


export default createReducer(initialState,(builder)=>{
    builder.addCase('UPDATE_NAME',(state,action)=>{
        state.name=action.payload
    })
    builder.addCase('UPDATE_EMAIL',(state,action)=>{
        state.email=action.payload
    })
})
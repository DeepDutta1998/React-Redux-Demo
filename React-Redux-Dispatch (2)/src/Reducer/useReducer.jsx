// import { useReducer } from "react"
import { createReducer } from "@reduxjs/toolkit"
// import{Action} from 'history'


const initialState={
    name:"Deep Dutta",
    email:"deep@gmail.com",
    phone:"8388964466",
    address:"siliguri",
    status:"JavaScript"
}

// use reducer

// export default(state=initialState,action)=>
//   {
//     if(action.type==="UPDATE_NAME"){
//         return{
//              ...state,
//             name:action.payload
//         }
//     }
// if (action.type==="UPDATE_EMAIL"){
//     return{
//         ...state,
//         email:action.payload
//     }
// }
// if (action.type==="UPDATE_PHONE"){
//     return{
//          ...state,
//         phone:action.payload
//     }
// }
// if (action.type==="UPDATE_ADDRESS"){
//     return{
//          ...state,
//         address:action.payload
//     }
// }
        
//         return state
//     }
  

export default createReducer(initialState,(builder)=>{
    builder.addCase('UPDATE_NAME',(state,action)=>{

    state.name=action.payload
    })
    builder.addCase('UPDATE_EMAIL',(state,action)=>{
        state.email=action.payload
    })

    builder.addCase('UPDATE_PHONE',(state,action)=>{
        state.phone=action.payload
    })
    builder.addCase('UPDATE_ADDRESS',(state,action)=>{
        state.address=action.payload
    })
    builder.addCase('UPDATE_STATUS',(state,action)=>{
        state.status=action.payload
    })

})


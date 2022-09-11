import { createAction } from "@reduxjs/toolkit";


export const updatestatusCode=createAction('UPDATE_STATUS')


export const fetchName=()=>{
    return async(dispatch)=>{
        const res=await fetch('https://jsonplaceholder.typicode.com/users')
        const result=await res.json()
        dispatch({type:'UPDATE_NAME',payload:result[1].name})
    }
}
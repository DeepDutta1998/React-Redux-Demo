import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

export const Home = () => {
    const dispatch=useDispatch()
    const {name,email,phone}=useSelector((state)=>{
        console.log(state);
        return state
    })


    const updateNAme=(name)=>{
            dispatch({type:'UPDATE_NAME',payload:name})
    }
    const updateEmail=(email)=>{
            dispatch({type:'UPDATE_EMAIL',payload:email})
    }
  return (
    <div>
        <h1>This is A Home page</h1>
    <h1>my name is {name}</h1>
    <h1>my email is {email}</h1>
    <h1>my phone is {phone}</h1>


    <button onClick={()=>updateNAme('Raju')}>Update name</button>
    <button onClick={()=>updateEmail('raju@gmail.com')}>Update email</button>

    </div>
  )
}

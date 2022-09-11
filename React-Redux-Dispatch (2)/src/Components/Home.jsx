import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { updatestatusCode,fetchName } from '../Reducer/Action/Action'

export const Home = () => {

const{name,email,phone,
address,status}=useSelector((state)=>{
    console.log(state);
    return state
})
 const dispatch=useDispatch();

const UpdateName=async()=>{

  dispatch(fetchName())
  //const res=await fetch('https://jsonplaceholder.typicode.com/users')
  //const result=await res.json()

  //dispatch({type:'UPDATE_NAME',payload:result[1].name})

    //dispatch({type:'UPDATE_NAME',payload:name})
}

const UpdateEmail=(email)=>{
    dispatch({type:"UPDATE_EMAIL",payload:email})
}

const UpdatePhone=(phone)=>{
    dispatch({type:"UPDATE_PHONE",payload:phone})
}
const UpdateAddress=(address)=>{
    dispatch({type:"UPDATE_ADDRESS",payload:address})
}



const Updatestatus=(status)=>{

  dispatch(updatestatusCode(status))
}

  return (
    <div>
        <h1>This is My Home Page</h1>
        <h1>My Name is:{name}</h1>
        <h1>My Email Id is:{email}</h1>
        <h1>My Phone Number is:{phone}</h1>
        <h1>My Address is:{address}</h1>
        <h1>My Programming Languageis:{status}</h1>


        <button  type="btn btn"onClick={()=>UpdateName("Rahul")}>UPADATE NAME</button>
      <br/>
        <button  type="btn btn"onClick={()=>UpdateEmail("Rahul23@gmail.com")}>UPADATE EMAIL</button><br/>
        <button  type="btn btn"onClick={()=>UpdatePhone("7854217485")}>UPADATE PHONE</button><br/>
        
        <button  type="btn btn"onClick={()=>UpdateAddress("Kolkata")}>UPADATE ADDRESS</button><br/>
        <button  type="btn btn"onClick={()=>Updatestatus("ReactJS")}>UPADATE STATUS</button><br/>


    </div>
  )
}

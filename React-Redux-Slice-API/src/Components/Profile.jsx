import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchUserAge, fetchUserCity, fetchUserEmail, fetchUserName, fetchUserJob } from '../Reducer/useReducer';


export const Profile = () => {

const { name, age, email, city, job } = useSelector((state) => {
    console.log(state);
    return state
})

 const dispatch = useDispatch();

const updateName = (name) => {
  dispatch(fetchUserName(name))
}
const updateAge = (age) => {
  dispatch(fetchUserAge(age))
}
const updateEmail = (email) => {
    dispatch(fetchUserEmail(email))
}
const updateCity = (city) => {
    dispatch(fetchUserCity(city))
}
const updateJob = (job) => {
  dispatch(fetchUserJob(job))
}


  return (
    <div>
        <div>
             <h1>My Name is:{name}</h1>
             <h1>My Age Number is:{age}</h1>
             <h1>My Email Id is:{email}</h1>
             <h1>My Address is:{city}</h1>
             <h1>My favourite Language  is:{job}</h1>
        </div>
        

        <button onClick={() => updateName("")}>UPADATE NAME</button>
        <button onClick={() => updateAge("")}>UPADATE AGE</button>
        <button onClick={() => updateEmail("")}>UPADATE EMAIL</button>
        <button onClick={() => updateCity("")}>UPADATE CITY</button>
        <button onClick={() => updateJob("")}>UPADATE STATUS</button>
    </div>
  )
}
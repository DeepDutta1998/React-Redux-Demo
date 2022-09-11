import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateAge, updateName, updateCity, updateEmail, updateJob } from '../Reducer/useReducer'

const Profile = () => {
    const { name, age, job, city, email } = useSelector((state) => {
        console.log(state);
        return state
    })

    const dispatch = useDispatch()

    const changeName = (name) => {
        dispatch(updateName(name))
    }
    const changeAge = (age) => {
        dispatch(updateAge(age))
    }
    const changeJob = (job) => {
        dispatch(updateJob(job))
    }
    const changeCity = (city) => {
        dispatch(updateCity(city))
    }
    const changeEmail = (email) => {
        dispatch(updateEmail(email))
    }

  return (
    <div>
     <h1>Redux Slice</h1>
     <div>
        <h1>My name is {name}</h1>
        <h1>My age is {age}</h1>
        <h1>I am working in {job}</h1>
        <h1>My Hometown is {city}</h1>
        <h1>My email is {email}</h1>

         <button onClick={() => changeName('Debanshi')}>UPDATE NAME</button>
         <button onClick={() => changeAge('24')}>UPDATE AGE</button>
         <button onClick={() => changeJob('Doctor')}>UPDATE JOB</button>
         <button onClick={() => changeCity('Jalpaiguri')}>UPDATE CITY</button>
         <button onClick={() => changeEmail('debanshi@gmail.com')}>UPDATE EMAIL</button>

     </div>   
    </div>
  )
}

export default Profile
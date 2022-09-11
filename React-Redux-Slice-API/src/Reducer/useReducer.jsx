import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState={
    name:"Deep",
    age:"24",
    email:"deep@gmail.com",
    city:"Siliguri",
    job:"Web-Devloper"
}
export const  fetchUserName = createAsyncThunk(
    'fetchUse',
    async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        return data[0].name
        
    }
) 

export const  fetchUserEmail = createAsyncThunk(
    'fetchUser',
    async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        return data[0].email
        
    }
)
export const  fetchUserCity = createAsyncThunk(
    'fetchUser',
    async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        return data[0].city
        
    }
)
export const  fetchUserAge = createAsyncThunk(
    'fetchUser',
    async()=>{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await response.json()
        return data[0].age
        
    }
)
export const  fetchUserJob = createAsyncThunk(
    'fetchUser',
    async()=>{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await response.json()
        return data[0].job
        
    }
)

const userSlice=createSlice({
    name:"user",
    initialState,
    reducer:{},
    extraReducers:(builder) => {
    builder.addCase(fetchUserName.fulfilled,(state,action)=>{
        state.name = action.payload
    })
    builder.addCase(fetchUserName.pending,(state,action)=>{
        state.name = "loading...."
    })
    builder.addCase(fetchUserName.rejected,(state,action)=>{
        state.name = "Try Again"
    })

},
firstReducers:(builder) => {
    builder.addCase(fetchUserAge.fulfilled,(state,action)=>{
        state.age = action.payload
    })
    builder.addCase(fetchUserAge.pending,(state,action)=>{
        state.age = "loading...."
    })
    builder.addCase(fetchUserAge.rejected,(state,action)=>{
        state.age = "Try Again"
    })

},
secondReducers:(builder) => {
    builder.addCase(fetchUserCity.fulfilled,(state,action)=>{
        state.city = action.payload
    })
    builder.addCase(fetchUserCity.pending,(state,action)=>{
        state.city = "loading...."
    })
    builder.addCase(fetchUserCity.rejected,(state,action)=>{
        state.city = "Try Again"
    })

},
thiredReducers:(builder) => {
    builder.addCase(fetchUserEmail.fulfilled,(state,action)=>{
        state.email = action.payload
    })
    builder.addCase(fetchUserEmail.pending,(state)=>{
        state.email = "loading...."
    })
    builder.addCase(fetchUserEmail.rejected,(state)=>{
        state.email = "Try Again"
    })

},
forthReducers:(builder) => {
    builder.addCase(fetchUserJob.fulfilled,(state,action)=>{
        state.job = action.payload
    })
    builder.addCase(fetchUserJob.pending,(state)=>{
        state.job = "loading...."
    })
    builder.addCase(fetchUserJob.rejected,(state,action)=>{
        state.job = "Try Again"
    })

}
 })

 
 


export const { updateJob, updateName, updateAge, updateEmail, updateCity } = userSlice.actions
export default userSlice.reducer
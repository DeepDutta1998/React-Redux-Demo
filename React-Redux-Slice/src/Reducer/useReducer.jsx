import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Deep",
    age: "24",
    job: "Web-Devloper",
    city: "Siliguri",
    email: "deep@gmail.com"
}

const userSclice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateName(state, action) {
            state.name = action.payload;
        },
        updateAge(state, action) {
            state.age = action.payload;
        },
        updateJob(state, action) {
            state.job = action.payload;
        },
        updateCity(state, action) {
            state.city = action.payload;
        },
        updateEmail(state, action) {
            state.email = action.payload;
        },

    }
})

export const { updateName, updateAge, updateCity, updateJob, updateEmail } = userSclice.actions
export default userSclice.reducer
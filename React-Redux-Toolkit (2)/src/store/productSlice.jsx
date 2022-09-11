import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

//enum kore nebo js modhe ei typescript a ache// freeez mane readonly amra change korte parbona
export const STATUSES=Object.freeze({
    IDEL:'idel',
    ERROR:'error',
    LOADING:'loading'
})


const producrSlice=createSlice({
    name:'product',
    initialState:{
        data:[],
        status: STATUSES.IDLE,
    },
    reducers:{
    //    setProducts(state, action) {
    //        //you can not call as a asynce request in the reducer that whay we use thunk
        
    //         state.data = action.payload;
    //     },
    //     setStatus(state, action) {
    //         state.status = action.payload;
    //     },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
            
    },
})

export const {setProducts,setStatus}=producrSlice.actions
export default producrSlice.reducer

//thunks middleware.createAsyncThunk pass two parameter first identifire and 
//second parameter is a async function
export const fetchProducts=createAsyncThunk('products/fetch',async()=>{
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
})

//1st stape basic use basic thunk.. getstate get the current state
// export function fetchProducts(){
//     return async function fetchProductThunk(dispatch,getState){
//         dispatch(setStatus(STATUSES.LOADING))
//         try{
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//            dispatch(setProducts(data))
//            dispatch(setStatus(STATUSES.IDEL))
//         }catch(err){
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR))
//         }
//     }
// }

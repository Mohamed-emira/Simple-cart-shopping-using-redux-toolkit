import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts= createAsyncThunk('sliceProducts/fetchProducts',async()=>{
  const res=await fetch('https://fakestoreapi.com/products')
  const data=await res.json()
  return data;
})


export const sliceProducts=createSlice({
initialState:[],
name:'sliceProducts',
reducers:{},
extraReducers:(builder)=>{
  builder.addCase(fetchProducts.fulfilled,(state,action)=>{
    return action.payload
  }
    )}


})
export const {}=sliceProducts.actions;
export default sliceProducts.reducer;
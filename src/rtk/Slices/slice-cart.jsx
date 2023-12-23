import { createSlice } from "@reduxjs/toolkit";
const sliceCart=createSlice({
initialState:[],
name:'sliceCart',
reducers:{
  addToCart:(state,action)=>{
    const findProduct=state.find((product)=>product.id===action.payload.id)
if(findProduct){
  findProduct.quantity+=1
}else{
  const productClone={...action.payload,quantity:1}
  state.push(productClone)

}


  },
  deleteFromCart:(state,action)=>{
    return state.filter((item)=>item.id!==action.payload.id)
  },
  clear:(state,action)=>{
return []

  }


}





})
export const{addToCart,deleteFromCart,clear}= sliceCart.actions;
export default sliceCart.reducer;
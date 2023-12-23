import { configureStore } from "@reduxjs/toolkit";
import sliceProducts from "./Slices/slice-products";
import sliceCart from "./Slices/slice-cart";



 export  const store=configureStore({
reducer:{
products:sliceProducts,
cart:sliceCart,


}



})
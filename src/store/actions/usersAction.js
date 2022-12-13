import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// sale man register


export const getUsers =  createAsyncThunk('users', async ()=>{
    // users/pending
    // users/fulfilled
    // uses/Rejected

  const response = await axios.get("product/aLLProducts");
  return response.data.products;
  
});


export const customerPayment =  createAsyncThunk('customerpayment', async ()=>{
  // users/pending
  // users/fulfilled
  // uses/Rejected

const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
return response.data;

});



export const postSaleMan = createAsyncThunk('postsaleman',async()=>{

  const config = {
    headers: {
        'content-type': 'application/json'
    }
}
    const response = await axios.post("https://jsonplaceholder.typicode.com/users",config);
      
    return  response.data;
    
})


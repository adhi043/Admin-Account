import { createSlice } from "@reduxjs/toolkit";
import { postSaleMan, getUsers, customerPayment } from "../actions/usersAction";
const usersReducer = createSlice({
    name:'usersReducer',
    initialState:{
        users:[],
        postsaleman:[],
        customerpayment:[],
        userContainer:[],
        loader:false,
        errors:{},
        
    },
    
    reducers:{
        filterUser:(state,action)=>{
           state.users = state.userContainer.filter(user=>user.name.toLowerCase().includes(action.payload.toLowerCase())>1);   
        }
    },
    extraReducers:{

      [getUsers.pending]: (state,action)=>{
         
       state.loader = true;

    },

    [getUsers.fulfilled]:(state,action)=>{
        state.loader = false;
        state.users = action.payload;
        state.userContainer = action.payload;
    },
    [getUsers.rejected]:(state,action)=>{
        state.loader=false;
        state.errors = action.payload;  
    },

    [customerPayment.pending]: (state,action)=>{
         
        state.loader = true;
 
     },
 
     [customerPayment.fulfilled]:(state,action)=>{
         state.loader = false;
         state.customerpayment = action.payload;
         
     },
     [customerPayment.rejected]:(state,action)=>{
         state.loader=false;
         state.errors = action.payload;  
     },
 

    [postSaleMan.pending]: (state,action)=>{
         
        state.loader = true;
        
     },
 
     [postSaleMan.fulfilled]:(state,action)=>{
         state.loader = false;
         state.postsaleman= action.payload;
     },
     [postSaleMan.rejected]:(state,action)=>{
         state.loader=false;
         state.errors = action.payload;  
     }
},
});
export const  {filterUser} = usersReducer.actions
export default usersReducer.reducer;
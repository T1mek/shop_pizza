import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


  export const getPizza = createAsyncThunk('pizza/getPizza', async (_,rejectWithValue,dispatch)=>{

   const res = await axios.get(`https://62c5602fa361f72512824193.mockapi.io/pizza/`)
   dispatch(setItems(res.data))


 })



const pizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    items: [],
  
  },
  reducers: {
    
    setItems(state, action) {
     state.items = action.payload
  },},
  extraReducers: {
   [getPizza.fulfilled]:()=>{console.log("fulfilled")},
   [getPizza.pending]:()=>{console.log("pending")},
   [getPizza.rejected]:()=>{console.log("rejected")}
  }
  
  
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;

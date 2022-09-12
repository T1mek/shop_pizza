import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";


export  interface IPizza{
  id:string,
  imageUrl:string,
  title:string,
  price:number,
  sizes:number[],
  types:number[],
  categories:number,
  rating:number,
}


interface IPizzaSlice {
  items: IPizza[];
  status: "loading" | " successful" | "error";
}

export const getPizza = createAsyncThunk<IPizza[],Record<string, string>>(
  "pizza/getPizza",
  async (params) => {
    const { pageCount, category, sortBy, search } = params;

    const res = await axios.get<IPizza[]>(
      `https://62c5602fa361f72512824193.mockapi.io/pizza?page=${pageCount}&limit=4&${category}&sortBy=${sortBy}${search}`
    );
    return res.data ;
  }
);

const initialState: IPizzaSlice = {
  items: [],
  status: "loading",
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<IPizza[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder)=>{
    builder.addCase(getPizza.pending,(state,action) =>{
      state.status = "loading";
      state.items = [];
    })
    builder.addCase(getPizza.fulfilled,(state,action) =>{
        state.items = action.payload;
      state.status = " successful";
    })
      builder.addCase(getPizza.rejected,(state,action) =>{
         state.status = "error";
      state.items = [];
    })

  }
    // [getPizza.fulfilled]: (state, action) => {
    //   state.items = action.payload;
    //   state.status = " successful";
    // },
    // [getPizza.pending]: (state) => {
    //   state.status = "loading";
    //   state.items = [];
    // },
    // [getPizza.rejected]: (state) => {
    //   state.status = "error";
    //   state.items = [];
    // },
  },
);

export const pizzaAll = (state: RootState) => state.pizza;

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;

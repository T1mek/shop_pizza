import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPizza = createAsyncThunk(
  "pizza/getPizza",
  async (params) => {
    const { pageCount, category, sortBy, search } = params;

    const res = await axios.get(
      `https://62c5602fa361f72512824193.mockapi.io/pizza?page=${pageCount}&limit=4&${category}&sortBy=${sortBy}${search}`
    );
    return res.data;
  }
);

const pizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    items: [],
    status: "loading",
  },
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [getPizza.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = " successful";
    },
    [getPizza.pending]: (state) => {
      state.status = "loading";
      state.items = []
    },
    [getPizza.rejected]: (state) => {
      state.status = "error";
      state.items=[]
    },
  },
});

export const pizzaAll = (state)=> state.pizza

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;

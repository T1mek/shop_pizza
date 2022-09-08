

import {createSlice} from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    searchValue: '',
    categoryId: 0,
    pageCount: 1,
    sort: {
      name: "популярность",
      sortProperty: "rating",
    },
  },
  reducers: {
    setCategoryId(state, action) {
        state.categoryId = action.payload;
      },
      setSort(state, action) {
        state.sort = action.payload
      },
      setPageCount(state, action) {
        state.pageCount = action.payload
      },
      setSearchValue(state,action){
        state.searchValue= action.payload
      }
  },
});
export const selectSort = (state)=> state.filter



export const { setCategoryId,setSort,setPageCount,setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;

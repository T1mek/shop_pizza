import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type ISort = {
  name: string;
  sortProperty: "rating" | "price" | "title";
};

interface IFilterSlice {
  searchValue: string;
  categoryId: number;
  pageCount: number;
  sort:ISort ;
}
const initialState: IFilterSlice = {
  searchValue: "",
  categoryId: 0,
  pageCount: 1,
  sort: {
    name: "популярность",
    sortProperty: "rating",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<ISort>) {
      state.sort = action.payload;
    },
    setPageCount(state, action: PayloadAction<number>) {
      state.pageCount = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});
export const selectSort = (state: RootState) => state.filter;

export const { setCategoryId, setSort, setPageCount, setSearchValue } =
  filterSlice.actions;
export default filterSlice.reducer;

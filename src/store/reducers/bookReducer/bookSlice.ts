import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookStateProps, CatsEnum, SortByEnum } from "./book.types";

const initialState: BookStateProps = {
  category: CatsEnum.ALL,
  sortBy: SortByEnum.NEWEST,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<CatsEnum>) {
      state.category = action.payload;
    },
    setSortBy(state, action: PayloadAction<SortByEnum>) {
      state.sortBy = action.payload;
    },
  },
});

export default bookSlice.reducer;

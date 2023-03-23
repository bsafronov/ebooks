import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  BookAddProps,
  BookStateProps,
  CatsEnum,
  SortByEnum,
} from "./types/book-state.type";

const initialState: BookStateProps = {
  category: CatsEnum.ALL,
  sortBy: SortByEnum.RELEVANCE,
  query: "js",
  limit: 30,
  offset: 0,
  fetchId: undefined,
  books: [],
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<CatsEnum>) {
      state.category = action.payload;
      state.offset = 0;
      state.books = [];
    },
    setSortBy(state, action: PayloadAction<SortByEnum>) {
      state.sortBy = action.payload;
      state.offset = 0;
      state.books = [];
    },
    setQuery(state, action: PayloadAction<string>) {
      if (state.query === action.payload) return;
      state.query = action.payload;
      state.offset = 0;
      state.books = [];
    },
    loadMore(state) {
      state.offset += state.limit;
    },
    reset(state) {
      state.offset = 0;
      state.books = [];
    },
    addBooks(state, action: PayloadAction<BookAddProps>) {
      state.books.push(...action.payload.books);
      state.fetchId = action.payload.fetchId;
    },
  },
});

export default bookSlice.reducer;

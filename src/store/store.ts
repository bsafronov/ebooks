import { configureStore } from "@reduxjs/toolkit";
import { bookApi } from "./reducers/bookReducer/book.api";
import bookReducer from "./reducers/bookReducer/bookSlice";

export const store = configureStore({
  reducer: {
    book: bookReducer,
    [bookApi.reducerPath]: bookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

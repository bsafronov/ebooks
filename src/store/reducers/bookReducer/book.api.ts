import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  BookGetAllReqProps,
  BookGetAllResProps,
  BookProps,
} from "./types/book-api.type";
import { CatsEnum } from "./types/book-state.type";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/books/v1/volumes",
  }),
  endpoints: (build) => ({
    getAllBooks: build.query<BookGetAllResProps, BookGetAllReqProps>({
      query: ({ query, category, sortBy, limit, offset }) =>
        [
          `?q=${query}`,
          category !== CatsEnum.ALL ? `+subject:${category}` : ``,
          `&orderBy=${sortBy}`,
          `&maxResults=${limit}`,
          `&startIndex=${offset}`,
        ].join(""),
    }),
    getOneBook: build.query<BookProps, string>({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useGetAllBooksQuery, useGetOneBookQuery } = bookApi;

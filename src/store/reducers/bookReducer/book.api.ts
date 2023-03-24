import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  BookGetAllReqProps,
  BookGetAllResProps,
  BookProps,
} from "./types/book-api.type";
import { CatsEnum } from "./types/book-state.type";

const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
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

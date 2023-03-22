import { BookProps } from "./book-api.type";

export enum CatsEnum {
  ALL = "all",
  ART = "art",
  BIOGRAPHY = "biography",
  COMPUTERS = "computers",
  HISTORY = "history",
  MEDICAL = "medical",
  POETRY = "poetry",
}

export enum SortByEnum {
  RELEVANCE = "relevance",
  NEWEST = "newest",
}

export interface BookStateProps {
  category: CatsEnum;
  sortBy: SortByEnum;
  query: string;
  limit: number;
  offset: number;
  fetchId?: number;
  books: BookProps[];
}

export interface BookAddProps {
  books: BookProps[];
  fetchId: number;
}

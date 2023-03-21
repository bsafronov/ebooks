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
}

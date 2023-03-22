export interface BookGetAllResProps {
  totalItems: number;
  items: BookProps[];
}

export interface BookProps {
  id: string;
  volumeInfo: {
    title?: string;
    authors?: string[];
    categories?: string[];
    description?: string;
    imageLinks?: {
      thumbnail?: string;
      smallThumbnail?: string;
      large?: string;
    };
  };
}

export interface BookGetAllReqProps {
  limit: number;
  offset: number;
  query: string;
  category: string;
  sortBy: string;
}

import { FC } from "react";
import { BookProps } from "../../store/reducers/bookReducer/types/book-api.type";
import BookItem from "./BookItem";

interface BookListProps {
  books?: BookProps[];
}

const BookList: FC<BookListProps> = ({ books = [] }) => {
  return (
    <div className="grid gap-x-4 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-4">
      {books.map((book, index) => (
        <BookItem key={index} book={book} />
      ))}
    </div>
  );
};

export default BookList;

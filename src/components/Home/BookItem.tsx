import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { BookProps } from "../../store/reducers/bookReducer/types/book-api.type";
import EmptyImageLogo from "../EmptyImageLogo";

interface BookItemProps {
  book: BookProps;
}

const BookItem: FC<BookItemProps> = ({ book }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-slate-100 px-4 pt-6 pb-4 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => navigate(book.id)}
    >
      {book.volumeInfo.imageLinks?.thumbnail ? (
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          className="mx-auto w-3/5 aspect-[3/4] object-cover bg-slate-200 mb-2 shadow-lg"
        />
      ) : (
        <div className="relative mx-auto w-3/5 aspect-[3/4] bg-slate-200 mb-2 shadow-lg">
          <EmptyImageLogo />
        </div>
      )}

      {book.volumeInfo.categories && (
        <p className="text-slate-500 underline text-sm mb-2">
          {book.volumeInfo.categories[0]}
        </p>
      )}

      {book.volumeInfo.title && (
        <p className="mb-2 text-sm font-bold">{book.volumeInfo.title}</p>
      )}
      {book.volumeInfo.authors && (
        <p className="text-slate-500 text-sm">
          {book.volumeInfo.authors.join(", ")}
        </p>
      )}
    </div>
  );
};

export default BookItem;

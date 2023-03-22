import { useEffect } from "react";
import Error from "../components/Error";
import BookList from "../components/Home/BookList";
import Counter from "../components/Home/Counter";
import LoadButton from "../components/Home/LoadButton";
import Spinner from "../components/Spinner";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { useGetAllBooksQuery } from "../store";
import { bookSlice } from "../store/reducers/bookReducer/bookSlice";
import { BookAddProps } from "../store/reducers/bookReducer/types/book-state.type";

const HomePage = () => {
  const { category, sortBy, query, limit, offset, books, fetchId } =
    useAppSelector((state) => state.book);
  const { addBooks } = bookSlice.actions;
  const dispatch = useAppDispatch();
  const { data, isError, isFetching, isLoading, startedTimeStamp } =
    useGetAllBooksQuery({
      query,
      category,
      sortBy,
      limit,
      offset,
    });

  useEffect(() => {
    if (data && fetchId !== startedTimeStamp) {
      const payload: BookAddProps = {
        books: data.items,
        fetchId: startedTimeStamp as number,
      };
      dispatch(addBooks(payload));
    }
  }, [data]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Counter count={data?.totalItems} />
      <BookList books={books} />
      {isFetching && <Spinner />}
      {!isFetching && books.length < (data?.totalItems as number) && (
        <LoadButton />
      )}
    </>
  );
};

export default HomePage;

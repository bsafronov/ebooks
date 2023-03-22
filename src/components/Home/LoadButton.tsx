import { useAppDispatch } from "../../hooks/useRedux";
import { bookSlice } from "../../store/reducers/bookReducer/bookSlice";

const LoadButton = () => {
  const { loadMore } = bookSlice.actions;
  const dispatch = useAppDispatch();

  function handleLoad() {
    dispatch(loadMore());
  }

  return (
    <button
      className="py-2 px-4 bg-slate-200 rounded-lg block mx-auto hover:bg-slate-300 transition-colors"
      onClick={handleLoad}
    >
      Load more
    </button>
  );
};

export default LoadButton;

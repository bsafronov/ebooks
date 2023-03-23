import { useAppDispatch } from "../../hooks/useRedux";
import { SortByEnum } from "../../store/reducers/bookReducer/types/book-state.type";
import { bookSlice } from "../../store/reducers/bookReducer/bookSlice";
import { useNavigate } from "react-router-dom";

const SortingSelect = () => {
  const sortBy = Object.values(SortByEnum);
  const { setSortBy } = bookSlice.actions;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSetSortBy(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(setSortBy(e.target.value as SortByEnum));
    navigate("/");
  }

  return (
    <div className="flex gap-2">
      <label htmlFor="sortby" className="text-white">
        Sorting by
      </label>
      <select
        name="sortby"
        id="sortby"
        className="w-32 focus:outline-none"
        defaultValue={SortByEnum.RELEVANCE}
        onChange={handleSetSortBy}
      >
        {sortBy.map((sort, index) => (
          <option value={sort} key={index}>
            {sort}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortingSelect;

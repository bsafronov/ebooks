import { useAppDispatch } from "../../hooks/useRedux";
import { CatsEnum } from "../../store/reducers/bookReducer/types/book-state.type";
import { bookSlice } from "../../store/reducers/bookReducer/bookSlice";
import { useNavigate } from "react-router-dom";

const CatsSelect = () => {
  const cats = Object.values(CatsEnum);
  const { setCategory } = bookSlice.actions;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSetCategory(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(setCategory(e.target.value as CatsEnum));
    navigate("/");
  }

  return (
    <div className="flex gap-2">
      <label htmlFor="cats" className="text-white">
        Categories
      </label>
      <select
        name="cats"
        id="cats"
        className="w-32 focus:outline-none"
        defaultValue={CatsEnum.ALL}
        onChange={handleSetCategory}
      >
        {cats.map((cat, index) => (
          <option value={cat} key={index}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CatsSelect;

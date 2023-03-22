import { useEffect, useRef } from "react";
import { useAppDispatch } from "../../hooks/useRedux";
import { bookSlice } from "../../store/reducers/bookReducer/bookSlice";
import SearchLogo from "./SearchLogo";

const InputField = () => {
  const { setQuery } = bookSlice.actions;
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  function handleEnter(e: KeyboardEvent) {
    if (e.key !== "Enter") return;

    if (document.activeElement === inputRef.current) {
      return handleSearch();
    }

    scrollTo({ top: 0, behavior: "smooth" });
    inputRef.current?.focus();
  }

  function handleSearch() {
    const value = inputRef.current?.value;
    if (value) {
      dispatch(setQuery(value));
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleEnter);

    return () => window.removeEventListener("keydown", handleEnter);
  }, []);

  return (
    <div className="flex items-center mb-4 bg-white gap-1 px-1">
      <input
        ref={inputRef}
        type="text"
        className="outline-none bg-transparent w-64"
      />
      <SearchLogo onClick={handleSearch} />
    </div>
  );
};

export default InputField;

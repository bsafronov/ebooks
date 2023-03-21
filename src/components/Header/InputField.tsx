import Search from "../assets/Search";
import { useEffect, useRef } from "react";

const InputField = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      scrollTo({ top: 0, behavior: "smooth" });
      inputRef.current?.focus();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex items-center mb-4 bg-white gap-1 px-1">
      <input
        ref={inputRef}
        type="text"
        className="outline-none bg-transparent w-64"
      />
      <Search />
    </div>
  );
};

export default InputField;

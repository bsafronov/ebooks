import CatsSelect from "./CatsSelect";
import InputField from "./InputField";
import SortingSelect from "./SortingSelect";

const Header = () => {
  return (
    <header
      className="text-center"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), center / cover no-repeat url(./img/book-bg.webp)",
      }}
    >
      <div className="container px-4 py-4 mx-auto flex flex-col justify-center items-center">
        <h1 className="text-white mb-4 font-bold text-3xl">Search for books</h1>
        <InputField />
        <div className="flex flex-col md:flex-row gap-4">
          <CatsSelect />
          <SortingSelect />
        </div>
      </div>
    </header>
  );
};

export default Header;

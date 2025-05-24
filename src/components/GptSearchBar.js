// GptSearchBar.js
import { useRef } from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
import useGptMovieSearch from "../hooks/useGptMovieSearch";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const fetchAndStoreMovies = useGptMovieSearch();

  const handleSearchClick = async () => {
    await fetchAndStoreMovies(searchText.current.value);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
          ref={searchText}
        />
        <button
          className="p-2 m-4 px-6 bg-red-700 rounded text-white col-span-3"
          onClick={handleSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

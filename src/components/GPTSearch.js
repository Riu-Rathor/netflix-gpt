import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { LOGIN_BACKGROUND_IMG_URL } from "../utils/constant";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={LOGIN_BACKGROUND_IMG_URL} alt="background" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GPTSearch;

import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { LOGIN_BACKGROUND_IMG_URL } from "../utils/constant";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:h-full" src={LOGIN_BACKGROUND_IMG_URL} alt="background" />
      </div> 
      <div className=" md:pt-0">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GPTSearch;

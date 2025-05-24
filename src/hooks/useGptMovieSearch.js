import { useDispatch } from "react-redux";
import { API_OPTIONS, GEMINI_MODEL, SEARCH_MOVIE_URL } from "../utils/constant";
import { addGptMovieResult } from "../utils/slices/gptSlice";
import ai from "../utils/geminiai";

const useGptMovieSearch = () => {
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movieName) => {
    const response = await fetch(
      `${SEARCH_MOVIE_URL}?query=${encodeURIComponent(movieName)}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const data = await response.json();
    return data.results;
  };

  const fetchAndStoreMovies = async (queryText) => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query " +
      queryText +
      " only give me names of five movies, comma separated like the example result given ahead. Example Result: Gadar, Sholey, Don, Golmal, Koi mil gya";

    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: gptQuery,
    });

    const aiMovies = response.text.split(",").map((movie) => movie.trim());

    const promiseArray = aiMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGptMovieResult({ movieNames: aiMovies, movieResults: tmdbResults }));
  };

  return fetchAndStoreMovies;
};

export default useGptMovieSearch;

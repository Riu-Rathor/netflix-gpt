import { useEffect } from "react";
import { API_OPTIONS, MOVIES_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/slices/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getNowPlayingMovies = async () => {
    const response = await fetch(MOVIES_URL, API_OPTIONS);

    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    if (!popularMovies) getNowPlayingMovies();
  }, []);
};

export default usePopularMovies;

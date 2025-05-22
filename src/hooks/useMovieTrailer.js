import { useEffect } from "react";
import { API_OPTIONS, VIDEO_BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/slices/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const response = await fetch(
      `${VIDEO_BASE_URL}/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const data = await response.json();
    const filteredData = data.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : data.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;

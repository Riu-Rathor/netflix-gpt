import { useEffect } from "react";
import { API_OPTIONS, VIDEO_BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/slices/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
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
    if (!trailerVideo) getMovieVideos();
  }, []);
};

export default useMovieTrailer;

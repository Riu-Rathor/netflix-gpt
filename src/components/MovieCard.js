import React from 'react';
import { MOVIE_POSTER_BASE_URL } from '../utils/constant';

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-32 h-40 md:h-80 sm:w-36 md:w-40 lg:w-44 xl:w-48 flex-shrink-0 pr-2 sm:pr-3 transition-transform duration-300 transform hover:scale-105">
      <div className="rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <img
          alt="Movie Poster"
          src={`${MOVIE_POSTER_BASE_URL}/${posterPath}`}
          className="w-full h-[280px] object-cover"
        />
      </div>
    </div>
  );
};

export default MovieCard;

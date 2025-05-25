import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="px-4 sm:px-10 md:px-16 relative">
      <h1 className="text-lg md:text-3xl py-4 text-white font-semibold">{title}</h1>

      {/* Scroll Buttons */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-4 bg-black/60 text-white rounded-full hover:bg-black transition hidden sm:flex items-center justify-center"
        onClick={scrollLeft}
      >
        <FaChevronLeft size={24} />
      </button>

      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-4 bg-black/60 text-white rounded-full hover:bg-black transition hidden sm:flex items-center justify-center"
        onClick={scrollRight}
      >
        <FaChevronRight size={24} />
      </button>

      {/* Scrollable Movie List */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto overflow-y-hidden no-scrollbar scroll-smooth space-x-4"
      >
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

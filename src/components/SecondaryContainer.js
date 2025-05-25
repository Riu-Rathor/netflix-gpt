import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)

  return (
    movies && (
      <div className="bg-black px-4 sm:px-8 md:px-14 lg:px-24 max-w-full">
        <div className="mt-0 md:-mt-52 space-y-12 sm:space-y-16">
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="Trending" movies={movies.trendingMovies || movies.nowPlayingMovies} />
          <MovieList title="Popular" movies={movies.popularMovies || movies.nowPlayingMovies} />
          <MovieList title="Upcoming Movies" movies={movies.upcomingMovies || movies.nowPlayingMovies} />
          <MovieList title="Horror" movies={movies.horrorMovies || movies.nowPlayingMovies} />
        </div>
      </div>
    )
  )
}

export default SecondaryContainer

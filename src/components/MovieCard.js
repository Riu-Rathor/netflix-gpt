import React from 'react'
import { MOVIE_POSTER_BASE_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
        <img alt='Movie Card' src={`${MOVIE_POSTER_BASE_URL}/${posterPath}`}/>
    </div>
  )
}

export default MovieCard
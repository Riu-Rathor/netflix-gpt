import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  console.log("GptMovieSuggestion");
  const {movieResults, movieNames} = useSelector(store => store.gpt);
  if(!movieNames) return null;
  return (
    <div className="p-4 m-8 bg-black bg-opacity-80 rounded-3xl">
        <div>
          {
            movieNames.map((movie, index) => <MovieList key={movie} title={movieNames[index]} movies={movieResults[index]}/>)
          }
        </div>
    </div>
  )
}

export default GptMovieSuggestion
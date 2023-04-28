import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/moviesSlice";


const MovieListing = () => {

  const movies = useSelector(getAllMovies);

  let renderMovies = "";

  let MovieCard;

  renderMovies =
    movies.Response === "true" ? (
      movies.Search.map((movie, i) => {
        <MovieCard key={i} data={movie} />;
      })
    ) : (
      <div className='movie-error'>
        <h3>{movies.error}</h3>
      </div>
    );

  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h3>Movies</h3>
        <div className='movie-container'>{renderMovies}</div>
      </div>
    </div>
  );
};


export default MovieListing;

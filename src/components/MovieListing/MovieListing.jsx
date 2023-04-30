import React from "react";

import "../Styles/MovieListing.css";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = ({data,title,id}) => {
  let renderMovies = "";

  renderMovies =
    data.Response === "True" ? (
      data.Search.map((movie, i) => {
        return <MovieCard key={i} data={movie} />;
      })
    ) : (
      <div className='movie-error'>
        <h3>{data.error}</h3>
      </div>
    );

  return (
    <>
    
      <div className='movie-wrapper' id={id}>
        <div className='movie-list'>
          <h1 style={{ margin: "30px", marginLeft: "auto" }}>{title}</h1>
          <div className='movie-container'>{renderMovies}</div>
        </div>
      </div>
    </>
  );
};

export default MovieListing;

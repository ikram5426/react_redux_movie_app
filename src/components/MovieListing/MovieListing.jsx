import React from "react";
import Slider from "react-slick";
import "../Styles/MovieListing.css";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = ({ data, title, id }) => {
  let renderMovies = "";
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
          <div>
            <Slider {...settings}>{renderMovies}</Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieListing;

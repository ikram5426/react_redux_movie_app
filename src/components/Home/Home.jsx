import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import MovieAPI from "../../common/API/MovieAPI";
import { apiKey } from "../../common/API/MoviesAPIkey";

const Home = () => {
  useEffect(() => {
    const movieSearch = "Harry";
    const moviesData = async () => {
      const response = await MovieAPI.get(
        `?apiKey=${apiKey}&s=${movieSearch}&type=movie`
      ).catch((error) => {
        console.log(error);
      });;
   console.log(response)
    }
    moviesData()
  },[]);
  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  );
};

export default Home;

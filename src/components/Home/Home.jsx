import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import MovieAPI from "../../common/API/MovieAPI";
import { apiKey } from "../../common/API/MoviesAPIkey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/moviesSlice";
const Home = () => {
  const dispatch=useDispatch()
  useEffect(() => {
    const movieSearch = "Harry";
    const moviesData = async () => {
      const response = await MovieAPI.get(
        `?apiKey=${apiKey}&s=${movieSearch}&type=movie`
      ).catch((error) => {
        console.log(error);
      });;
   dispatch(addMovies(response.data))
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

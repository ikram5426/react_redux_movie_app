import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
// import {  } from "../../features/movies/moviesSlice";
import { useSelector } from "react-redux";
import {
  getAllMovies,
  getAllSeries,
  getAllEpisodes,
  fetchMovies,
  fetchSeries,
  fetchEpisode,
} from "../../features/movies/moviesSlice";


const Home = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
  const episodes=useSelector(getAllEpisodes)
  const dispatch = useDispatch();
  const movieTerm='Harry'
  const seriesTerm='Money'
  const episodeTerm="Love"
  useEffect(() => {
    dispatch(fetchMovies(movieTerm));
    dispatch(fetchSeries(seriesTerm));
    dispatch(fetchEpisode(episodeTerm));
  }, [dispatch]);
  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing data={movies} title='Movies' id='Movies' />
      <MovieListing data={series} title='Shows' id='Series' />
      <MovieListing data={episodes} title='Episode' id='Episodes' />
    </div>
  );
};

export default Home;

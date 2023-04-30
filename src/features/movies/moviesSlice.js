import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieAPI from "../../common/API/MovieAPI";
import { apiKey } from "../../common/API/MoviesAPIkey";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const movieSearch = "Harry";
  const response = await MovieAPI.get(
    `?apiKey=${apiKey}&s=${movieSearch}&type=movie`
  ).catch((error) => {
    console.log(error);
  });
  return response.data;
});

export const fetchSeries = createAsyncThunk("series/fetchSeries", async () => {
  const seriesSearch = "Money";
  const response = await MovieAPI.get(
    `?apiKey=${apiKey}&s=${seriesSearch}&type=series`
  ).catch((error) => {
    console.log(error);
  });
  return response.data;
});

export const fetchEpisode = createAsyncThunk("series/fetchEpisode", async () => {
  const episodeSearch = "love";
  const response = await MovieAPI.get(
    `?apiKey=${apiKey}&s=${episodeSearch}&type=series`
  ).catch((error) => {
    console.log(error);
  });
  return response.data;
});

const initialState = {
  movies: [],
  series:[],
  episodes:[]
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
  extraReducers: {
    [fetchMovies.pending]: () => {
      // console.log("movies pending");
    },
    [fetchMovies.fulfilled]: (state, action) => {
      // console.log("API resolved successfully");
      return { ...state, movies: action.payload };
    },
    [fetchMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchSeries.fulfilled]: (state, action) => {
      console.log("Series API resolved successfully");
      return { ...state, series: action.payload };
    },
    [fetchEpisode.fulfilled]: (state, action) => {
      console.log(`Episode API resolved successfully`);
      return { ...state, episodes: action.payload };
    },
  },
});

export const { addMovies } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getAllEpisodes = (state) => state.movies.episodes;
export default moviesSlice.reducer;

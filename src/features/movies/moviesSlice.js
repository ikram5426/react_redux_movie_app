import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import MovieAPI from "../../common/API/MovieAPI";
import { apiKey } from "../../common/API/MoviesAPIkey";

export const fetchMovies=createAsyncThunk('movies/fetchMovies',async()=>{
    const movieSearch = "Harry";
    
      const response = await MovieAPI.get(
        `?apiKey=${apiKey}&s=${movieSearch}&type=movie`
      ).catch((error) => {
        console.log(error);
      });
      return response.data;
    
})

const initialState={
  movies:[]
}

const moviesSlice=createSlice({
name:'movies',
initialState,
reducers:{
addMovies:(state,action)=>{
  state.movies=action.payload
}
},
extraReducers:{
  [fetchMovies.pending]:()=>{
    console.log("movies pending")
  },
  [fetchMovies.fulfilled]:(state,action) => {
    console.log('API resolved successfully')
    return {...state,movies:action.payload}
  },
  [fetchMovies.rejected]:() => {
    console.log('rejected')
  }
}
})

export const {addMovies} =moviesSlice.actions
export const getAllMovies=state=>state.movies.movies
export default moviesSlice.reducer
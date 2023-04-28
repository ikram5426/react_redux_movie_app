import { createSlice } from "@reduxjs/toolkit";

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
}
})

export const {addMovies} =moviesSlice.actions
export const getAllMovies=state=>state.movies.movies
export default moviesSlice.reducer
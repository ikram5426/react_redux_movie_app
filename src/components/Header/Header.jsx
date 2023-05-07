import React, { useState } from "react";
import userImg from "../../images/user.png";
import { Link } from "react-router-dom";
import "../Styles/Header.css";
import {
  fetchMovies,
  fetchSeries,
  fetchEpisode,
} from "../../features/movies/moviesSlice";
import { useDispatch } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const [searchTerms, setSearchTerms] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchTerms === "") {
      return alert("Please Enter a search term");
    }
    dispatch(fetchMovies(searchTerms));
    dispatch(fetchSeries(searchTerms));
    dispatch(fetchEpisode(searchTerms));
    setSearchTerms("");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerms(e.target.value);
  };

  return (
    <div className='header'>
      <div className='logo'>
        <Link to='/'>Movie App</Link>
      </div>
      <div className='search-bar'>
        <form action='submit' onSubmit={submitHandler}>
          <input
            type='text'
            placeholder='Search'
            value={searchTerms}
            onChange={handleChange}
          />
          <button>
            <i className='fa fa-search'></i>
          </button>
        </form>
      </div>

      <div className='user-img'>
        <img src={userImg} alt='user' />
      </div>
    </div>
  );
};

export default Header;

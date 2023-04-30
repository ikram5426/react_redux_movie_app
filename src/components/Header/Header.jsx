import React from "react";
import userImg from "../../images/user.png";
import { Link } from "react-router-dom";
import "../Styles/Header.css"
const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <div className='logo'>Movie App</div>
      </Link>
    
      <div className='user-img'>
        <img src={userImg} alt='user' />
      </div>
    </div>
  );
};

export default Header;

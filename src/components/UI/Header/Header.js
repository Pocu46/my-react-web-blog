import React from "react";
import './Header.scss';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return(
    <>
      <header className="header">
        <NavLink to="/" className="header-link">Home</NavLink>
        <p className="header-text">Create your posts to save them!</p>
      </header>
    </>
  )
}

export default Header;
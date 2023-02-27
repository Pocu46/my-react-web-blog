import React from "react";
import './Header.scss';
import {Outlet} from 'react-router-dom';
import {NavLink} from "react-bootstrap";

const Header = () => {
  return(
    <>
      <header className="header">
        <NavLink to="/" className="header-link">Home</NavLink>
        <p className="header-text">Create your posts to save them!</p>
      </header>

      <Outlet />
    </>
  )
}

export default Header;
import React from "react";
import './Article.scss'
import WrapperComponent from "../../UI/WrapperComponent/WrapperComponent";
import {NavLink, Outlet} from "react-router-dom";

export const Article = () => {
  const linkClass = ({isActive}) => isActive ? 'nav-link active' : 'nav-link'

  return(
    <WrapperComponent className="article-wrapper">

      <ul className="nav nav-tabs">
        <li className="nav-item">
          {/*<NavLink className="nav-link" to="/post/lists">Posts</NavLink>*/}
          <NavLink className={linkClass} to="lists">Posts</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={linkClass} to="create" aria-current="page">Create</NavLink>
          {/*<NavLink className="nav-link active" end to="/post/create">Create</NavLink>*/}
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="favorites">Favorites</NavLink>
        </li>
      </ul>

      <Outlet />

    </WrapperComponent>
  )
}
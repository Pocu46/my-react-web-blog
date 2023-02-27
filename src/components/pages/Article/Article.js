import React from "react";
import './Article.scss'
import {CreatePostComponent} from "../CreatePostComponent/CreatePostComponent";
import WrapperComponent from "../../UI/WrapperComponent/WrapperComponent";
import {NavLink, Outlet} from "react-router-dom";
import PostLists from "../PostsList/PostLists";
import Header from "../../UI/Header/Header";

export const Article = () => {
  const linkClass = ({isActive}) => isActive ? 'active' : undefined

  return(
    <WrapperComponent className="article-wrapper">

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link" to="/lists">Posts</NavLink>
        </li>
        <li className="nav-item">
          {/*<NavLink className="nav-link active" to="/create" aria-current="page">Create</NavLink>*/}
          <NavLink className="nav-link active" end to="/create">Create</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link">Favorites</NavLink>
        </li>
      </ul>

      <Outlet />

    </WrapperComponent>
  )
}
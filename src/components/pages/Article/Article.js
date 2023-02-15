import React from "react";
import './Article.scss'
import {CreatePostComponent} from "../CreatePostComponent/CreatePostComponent";
import WrapperComponent from "../../UI/WrapperComponent/WrapperComponent";
import {NavLink} from "react-router-dom";

export const Article = () => {
  return(
    <WrapperComponent className="article-wrapper">

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link">Posts</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page">Create</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link">Favorites</NavLink>
        </li>
      </ul>

      <CreatePostComponent />

    </WrapperComponent>
  )
}
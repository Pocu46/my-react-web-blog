import React from "react";
import './Article.scss'
import {CreatePostComponent} from "../CreatePostComponent/CreatePostComponent";
import WrapperComponent from "../../UI/WrapperComponent/WrapperComponent";
import {NavLink} from "react-router-dom";
import PostsList from "../PostsList/PostsList";

export const Article = () => {
  return(
    <WrapperComponent className="article-wrapper">

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link" to="/posts">Posts</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/create" aria-current="page">Create</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link">Favorites</NavLink>
        </li>
      </ul>

      <CreatePostComponent />
      <PostsList />

    </WrapperComponent>
  )
}
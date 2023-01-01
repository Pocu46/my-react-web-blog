import React from "react";
import './Article.scss'
import {CreatePostComponent} from "../CreatePostComponent/CreatePostComponent";
import WrapperComponent from "../../UI/WrapperComponent/WrapperComponent";

export const Article = () => {
  return(
    <WrapperComponent className="article-wrapper">

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link" href="#">Posts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Create</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Favorites</a>
        </li>
      </ul>

      <CreatePostComponent />

    </WrapperComponent>
  )
}
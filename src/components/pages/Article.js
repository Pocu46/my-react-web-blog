import React from "react";
import '../../styles/Article.scss'
import {CreatePostComponent} from "./createPostComponent";

export const Article = () => {
  return(
    <div className="article-wrapper">

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

    </div>
  )
}
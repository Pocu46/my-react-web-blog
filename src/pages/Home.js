import React from "react";
import '../styles/Home.scss'

export const Home = () => {
    return(
        <div className="home-wrapper">

            <h1 className="home-title">My React Web Blog</h1>

            <p className="home-text">
              Add articles and save them to favorites
            </p>

            <button type="button" className="btn btn-success">Start</button>

        </div>
    )
}
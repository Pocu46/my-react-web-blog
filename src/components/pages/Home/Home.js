import React from "react";
import './Home.scss'
import Button from "../../UI/Button/Button";
import WrapperComponent from "../../UI/WrapperComponent/WrapperComponent";
import Modal from "../../UI/Modal/Modal";

export const Home = () => {
  return (
    <div className="home-wrapper">

      <h1 className="home-title">My React Web Blog</h1>

      <p className="home-text">
        Add articles and save them to favorites
      </p>

      <Button type="button" className="home-button" onClick={() => console.log('clicked!')}>Start</Button>
      <Modal summary="Test" message="Test message" />

    </div>
  )
}
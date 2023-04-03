import React, {useState} from "react";
import './Home.scss'
import Button from "../../UI/Button/Button";
import {NavLink, useNavigate} from "react-router-dom";
import Header from "../../UI/Header/Header";

export const Home = () => {
  const navigate = useNavigate()
  // const [menuIsVisible, setMenuIsVisible] = useState(false)

  const startAppHandler = () => {
    navigate('/post/create')
  }

  // const menuCloseHandler = () => {
  //   setMenuIsVisible(false)
  // }

  return (
    <div className="home-page__wrapper">
      {/*<Header setMenuIsVisible={setMenuIsVisible}/>*/}

      <div className="home-wrapper">
        <h1 className="home-title">My React Web Blog</h1>

        <p className="home-text">
          Add articles and save them to favorites.
        </p>

        <Button type="button" className="home-button" onClick={startAppHandler}>Start</Button>

        {/*{*/}
        {/*  menuIsVisible &&*/}
        {/*  <div className="menu-wrapper">*/}
        {/*    <div className="menu-wrapper__container">*/}
        {/*      <ul>*/}
        {/*        <li className="menu-item"><NavLink className="menu-item__link">Home</NavLink></li>*/}
        {/*      </ul>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*}*/}

      </div>
    </div>
  )
}
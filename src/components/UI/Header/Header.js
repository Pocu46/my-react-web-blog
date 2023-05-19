import React from "react";
import './Header.scss';

const Header = ({menuIsVisible, setMenuIsVisible}) => {

  const menuPositionHandler = () => {
    setMenuIsVisible(prev => !prev)
  }

  const menuButtonClassName = menuIsVisible ? "menu-button active" : "menu-button"

  return(
    <>
      <header className="header">

        <div className={menuButtonClassName} onClick={menuPositionHandler}>
          <span onClick={menuPositionHandler} className="menu-line up" />
          <span onClick={menuPositionHandler} className="menu-line" />
          <span onClick={menuPositionHandler} className="menu-line down" />
        </div>

        <p className="header-text">Create your posts to save them!</p>

      </header>
    </>
  )
}

export default Header;
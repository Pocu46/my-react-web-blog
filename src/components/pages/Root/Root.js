import React, {useEffect, useRef, useState} from "react";
import {NavLink, Outlet} from "react-router-dom";
import Header from "../../UI/Header/Header";
import './Root.scss';

const Root = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  const menuRef = useRef()

  const linkClassName = ({isActive}) => isActive ? "menu-item__link menu-item__active" : "menu-item__link"

  menuIsVisible ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"

  const closeMenuHandler = () => {
    setMenuIsVisible(false)
  }

  const menuBehaviourHandler = (event) => {
    event.stopPropagation()
  }

  return(
    <div className="root-wrapper">
      <Header menuIsVisible={menuIsVisible}  setMenuIsVisible={setMenuIsVisible} />

      <Outlet />

      {
        menuIsVisible &&
        (<div className="menu-wrapper" onClick={closeMenuHandler}>
          <div className="menu-wrapper__container" ref={menuRef} onClick={menuBehaviourHandler}>
            <ul>
              <li className="menu-item"><NavLink className={linkClassName} to="/">Home</NavLink></li>
              <li className="menu-item"><NavLink className={linkClassName} to="/post/lists">Post lists</NavLink></li>
              <li className="menu-item"><NavLink className={linkClassName} to="/post/create">Create Post</NavLink></li>
              <li className="menu-item"><NavLink className={linkClassName} to="/post/favorites">Favorites</NavLink></li>
            </ul>
          </div>
        </div>)
      }
    </div>
  )
}

export default Root;
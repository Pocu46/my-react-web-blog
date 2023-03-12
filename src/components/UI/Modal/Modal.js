import React from "react";
import {useNavigate} from 'react-router-dom';
import './Modal.scss';


const Modal = ({children}) => {
  const navigate = useNavigate()

  const closeHandler = () => {
    navigate('/post/lists')
  }

  return (
    <div className="modal-position__wrapper">
      <div className="modal-wrapper" onClick={closeHandler}>
      {/*<div className="modal-wrapper">*/}
        {children}
      </div>
    </div>
  )
}

export default Modal;
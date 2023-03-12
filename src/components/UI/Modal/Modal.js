import React from "react";
import './Modal.scss';


const Modal = ({children}) => {
  return (
    <div className="modal-position__wrapper">
      <div className="modal-wrapper" onClick={() => console.log('modal wrapper clicked')}>
        {children}
      </div>
    </div>
  )
}

export default Modal;
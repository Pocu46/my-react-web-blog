import React from "react";

const Button = props => {
  return (
    <button
      type={props.type}
      className={`btn btn-success btn-width ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button;
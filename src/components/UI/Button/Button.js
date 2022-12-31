import React from "react";

const Button = props => {
  return <button type={props.type} className={`btn btn-success ${props.className}`}>{props.children}</button>
}

export default Button;
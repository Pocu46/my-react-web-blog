import React from "react";

const Button = ({className, children, type, onClick}) => {
  return (
    <button
      type={type}
      className={`btn btn-success btn-width ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;
import React from "react";

const Button = ({className, children, type, onClick, disabled}) => {
  return (
    <button
      type={type}
      className={`btn btn-success btn-width ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button;
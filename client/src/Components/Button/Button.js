import React from 'react';
import './Button.css';

const  Button = ({clicked,children,id, type}) => {
   const myClass=`btn ${type}`
    return (
      <button
      id={id}
      type="submit"
      onClick={clicked}
      className={type? myClass : "btn"}
      >
         {children}
      </button>
   )
};

export default Button;
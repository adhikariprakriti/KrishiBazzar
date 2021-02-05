import React from 'react';
import './Button.css';

const  Button = ({clicked,children, type}) => {
   const myClass=`btn ${type}`
    return (
      <button
      type="submit"
      onClick={clicked}
      className={type? myClass : "btn"}
      >
         {children}
      </button>
   )
};

export default Button;
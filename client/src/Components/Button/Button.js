import React from 'react';
import './Button.css';

const  Button = ({clicked,children, type}) => {
   const myClass=`btn ${type}`
    return (
      <button
      type="submit"
      className={type? myClass : "btn"}
      >
         {children}
      </button>
   )
};

export default Button;
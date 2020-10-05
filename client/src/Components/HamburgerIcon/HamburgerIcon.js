import React from 'react';
import './HamburgerIcon.css';

const HamburgerIcon=({onClick})=>{
    return(
        <div className="HamburgerIcon" onClick={onClick}>
             <div></div>
             <div></div>
             <div></div>
        </div>   
        
    )
}

export default HamburgerIcon;

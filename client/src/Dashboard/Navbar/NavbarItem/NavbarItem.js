import React from 'react'
import './NavbarItem.css'
import{Link} from 'react-router-dom';

const NavbarItem=({children})=>{ 
    return (
        <div className="list">{children}</div>
    )
}

export default NavbarItem

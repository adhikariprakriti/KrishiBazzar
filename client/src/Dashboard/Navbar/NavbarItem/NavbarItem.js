import React from 'react'
import './Navbar.css'
import{Link} from 'react-router-dom';

const NavbarItem=({children})=>{ 
    return (
        <li className="list">{children}</li>
    )
}

export default NavbarItem

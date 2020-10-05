import React from 'react'
import './SidebarItem.css'
import {Link} from 'react-router-dom';

const SidebarItem=({label,icon,link})=>{
    return (
       
            <li className="dashboardItem" 
                component={Link}
                to={link}
                >
                {icon} {label}
            </li>
       
    )
}

export default SidebarItem;

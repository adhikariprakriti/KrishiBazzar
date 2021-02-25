import React from 'react'
import './SidebarItem.css'
import {Link} from 'react-router-dom';

const SidebarItem=({label,icon,link})=>{
    return (
       
            <li className="dashboardItem" 
                component={Link}
                to={link}
                >
                     <Link className="dashboardItem" to={link}> {icon} {label}</Link>
               
            </li>
       
    )
}

export default SidebarItem;

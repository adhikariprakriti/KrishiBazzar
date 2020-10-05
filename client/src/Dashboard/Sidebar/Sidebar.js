import React from 'react'
import './Sidebar.css';
import tomato from '../../Assets/Images/tomato.jpeg';
import SidebarItems from './SidebarItems/SidebarItems'
import classNames from 'classnames';

function Sidebar({open}) {
    let attachedClasses=classNames("dashboard__sidebar","Close");
    if(open){
     attachedClasses=classNames("dashboard__sidebar","Open");
    }

    return (
        <div className={attachedClasses}>
            <p className="image"><a href="/"><img src={tomato} alt="Profile"/></a></p>
            <h5 className="username">John Doe</h5>
            <SidebarItems/>
        </div>
    )
}

export default Sidebar;

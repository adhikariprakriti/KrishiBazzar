import React from 'react'
import './Sidebar.css';
import tomato from '../../Assets/Images/tomato.jpeg';
import SidebarItems from './SidebarItems/SidebarItems'
import classNames from 'classnames';
import { useHistory } from "react-router-dom";

function Sidebar({open}) {
    let attachedClasses=classNames("dashboard__sidebar","Close");
    if(open){
     attachedClasses=classNames("dashboard__sidebar","Open");
    }
    const history = useHistory();
    const handleClick=()=>{
        
        history.push("/sellerProfile")
    }

    return (
        <div className={attachedClasses}>
            <p className="image"><a href="/sellerProfile"><img  src={tomato} alt="Profile"/></a></p>
            <h5 className="username" onClick={handleClick}>{JSON.parse(localStorage.getItem('userDetails')).fname + " " + JSON.parse(localStorage.getItem('userDetails')).lname}</h5> 
            <SidebarItems/>
        </div>
    )
}

export default Sidebar;

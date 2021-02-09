import React from 'react';
import Toolbar from "../../Dashboard/Navbar/Toolbar/Toolbar";
import './Layout.css';
import Top from "../Top/Top"

const Layout=(props)=>{
    return(
        <>
        <Toolbar/>
        <div className="topsellers-main">
            <h1 className="title">{props.title}</h1>
            <div className="grid-container">
                {props.children}
            </div>
        </div>
        </>
    )
}
export default Layout;














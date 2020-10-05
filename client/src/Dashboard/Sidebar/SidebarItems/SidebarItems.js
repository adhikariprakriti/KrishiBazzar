import React from 'react'
import './SidebarItems.css'
import SidebarItem from '../SidebarItem/SidebarItem'
import {AiFillDashboard,AiFillShopping,AiFillEdit} from 'react-icons/ai';
import {FaShoppingCart,FaUser} from 'react-icons/fa';
import {BsChatFill} from 'react-icons/bs';
import {MdPayment} from 'react-icons/md';


function SidebarItems() {
    return (
        <ul className="dashboardItems">
             <SidebarItem 
               label="Dashboard"
               icon={<AiFillDashboard style={{fontSize:"25px", display: "inline-block",paddingRight:"6px"}}/>}
               link="/dashboard"
               />
             
             <SidebarItem 
               label="Buy Product"
               icon={<AiFillShopping style={{fontSize:"25px", display: "inline-block",paddingRight:"6px"}}/>}
               link="/dashboard"
               />
            <SidebarItem 
               label="Cart"
               icon={<FaShoppingCart style={{fontSize:"25px", display: "inline-block",paddingRight:"6px"}}/>}
               link="/dashboard"
               />
             <SidebarItem 
               label="View Seller"
               icon={<FaUser style={{fontSize:"25px", display: "inline-block",paddingRight:"6px"}}/>}
               link="/dashboard"
               />
             <SidebarItem 
               label="Chat Room"
               icon={<BsChatFill style={{fontSize:"25px", display: "inline-block",paddingRight:"6px"}}/>}
               />
             <SidebarItem 
               label="Update Profile"
               icon={<AiFillEdit style={{fontSize:"25px", display: "inline-block",paddingRight:"6px"}}/>}
               link="/"
               />
             <SidebarItem 
               label="Payment"
               icon={<MdPayment style={{fontSize:"25px", display: "inline-block",paddingRight:"6px"}}/>}
               link="/dashboard"
               />
              
        </ul>
    )
}

export default SidebarItems;

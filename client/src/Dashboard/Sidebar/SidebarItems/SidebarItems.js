import React from 'react'
import './SidebarItems.css'
import SidebarItem from '../SidebarItem/SidebarItem'
import {AiFillDashboard,AiFillShopping,AiFillEdit} from 'react-icons/ai';
import {FaShoppingCart,FaUser} from 'react-icons/fa';
import {BsChatFill} from 'react-icons/bs';
import {MdPayment} from 'react-icons/md';
import { Link } from 'react-router-dom';


function SidebarItems() {
    return (
        <ul className="dashboardItems">
             <SidebarItem 
               label="Dashboard"
               icon={<AiFillDashboard style={{fontSize:"25px", display: "inline-block",paddingRight:"6px"}}/>}
               link="/dashboard"
               />
              { console.log((JSON.parse(localStorage.getItem('userDetails')).role),"local;")}
               {(JSON.parse(localStorage.getItem('userDetails')).role ==="buyer")?
                 <SidebarItem 
                 label="Buy Product"
                 icon={<AiFillShopping style={{fontSize:"25px", display: "inline-block",paddingRight:"6px"}}/>}
                 link="/selleroffer"
                 />

              :
                 <SidebarItem 
                 label="Sell products"
                 icon={<BsChatFill style={{fontSize:"25px", display: "inline-block",paddingRight:"6px"}}/>}
                 link="/postoffer"
                 />
               }
             
            <SidebarItem 
               label="Cart"
               icon={<FaShoppingCart style={{fontSize:"25px", display: "inline-block",paddingRight:"6px"}}/>}
               link="/dashboard"
               />
             <SidebarItem 
               label="Top Seller"
               icon={<FaUser style={{fontSize:"25px", display: "inline-block",paddingRight:"6px"}}/>}
               link="/topseller"
               />
                <SidebarItem 
               label="Top Buyers"
               icon={<FaUser style={{fontSize:"25px", display: "inline-block",paddingRight:"6px"}}/>}
               link="/topBuyer"
               />
                <SidebarItem 
               label="Top Sellers"
               icon={<FaUser style={{fontSize:"25px", display: "inline-block",paddingRight:"6px"}}/>}
               link="/topseller"
               />
             <SidebarItem 
               label="Chat Room"
               icon={<BsChatFill style={{fontSize:"25px", display: "inline-block",paddingRight:"6px"}}/>}
               link="/message"
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

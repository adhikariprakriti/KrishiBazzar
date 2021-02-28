import React,{useState} from 'react';
import './Toolbar.css';
import HamburgerIcon from '../../../Components/HamburgerIcon/HamburgerIcon'
import Sidebar from '../../Sidebar/Sidebar'
import Aux from '../../../hoc/Auxilliary';
import NavbarItems from '../NavbarItems/NavbarItems';
import Button from "../../../Components/Button/Button";
import { useHistory } from "react-router-dom";


const Toolbar=()=>{
     const [show,setShow]=useState(false)
     const history = useHistory();
     const userid= JSON.parse(localStorage.getItem('userDetails'))._id
     console.log(userid)

     const ToggleSidebar=()=>{
         setShow(!show)   
     }

     const clearUser=()=>{
         console.log("cleared")
        //localStorage.clear();
        history.push("/")

     }
     
  
    return(
        <Aux>
             <header className="Toolbar">
             <HamburgerIcon onClick={ToggleSidebar} show={show}/>
            <nav className="DesktopOnly">
                <div className="navbarDiv">
                    {
                    (userid ==null)?
                    <>
                  <Button clicked={()=>history.push({
                           pathname: "/registration",
                        })}>Register</Button>
                  <Button clicked={()=>history.push({
                           pathname: "/login",
                        })}>Login</Button></>:
                        <Button clicked={clearUser}>Logout</Button>
                    }
            </div>
            </nav>
           </header>
           <Sidebar open={show}/>
         </Aux>
    )}

export default Toolbar;
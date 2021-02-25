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

     const ToggleSidebar=()=>{
         setShow(!show)   
     }
     
  
    return(
        <Aux>
             <header className="Toolbar">
             <HamburgerIcon onClick={ToggleSidebar} show={show}/>
            <nav className="DesktopOnly">
                <div className="navbarDiv">
                  <Button clicked={()=>history.push({
                           pathname: "/registration",
                        })}>Register</Button>
                  <Button clicked={()=>history.push({
                           pathname: "/login",
                        })}>Login</Button>
            </div>
            </nav>
           </header>
           <Sidebar open={show}/>
         </Aux>
    )}

export default Toolbar;
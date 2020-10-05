import React,{useState} from 'react';
import './Toolbar.css';
import HamburgerIcon from '../../../Components/HamburgerIcon/HamburgerIcon'
import Sidebar from '../../Sidebar/Sidebar'
import Aux from '../../../hoc/Auxilliary';

const Toolbar=()=>{
     const [show,setShow]=useState(false)

     const ToggleSidebar=()=>{
         setShow(!show)   
     }
  
    return(
        <Aux>
             <header className="Toolbar">
             <HamburgerIcon onClick={ToggleSidebar} show={show}/>
            <nav className="DesktopOnly">
            </nav>
           </header>
           <Sidebar open={show}/>
         </Aux>
    )}

export default Toolbar;
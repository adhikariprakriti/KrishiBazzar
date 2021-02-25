import React from 'react';
import Toolbar from '../../Dashboard/Navbar/Toolbar/Toolbar'
import Aux from '../../hoc/Auxilliary'
import loginimg from '../../Assets/Images/loginimg.jpg'
import './Home.css'

const Home=()=>{
    return(
        <Aux>
           <Toolbar/>
           <div className="container_banner">
               <h1 className="heading">Make your Business Visible</h1>
           </div>
        </Aux>
    )
}
export default Home;
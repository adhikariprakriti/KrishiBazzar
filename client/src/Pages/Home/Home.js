import React from 'react';
import Toolbar from '../../Dashboard/Navbar/Toolbar/Toolbar'
import Aux from '../../hoc/Auxilliary'
import logo from '../../Assets/Images/logo.png'
import './Home.css'
import Footer from '../../Components/Footer/footer'

const Home=()=>{
    return(
        <Aux>
           <Toolbar/>
           <div className="container_banner">
               <h1 className="heading">Make your Business Visible</h1>
           </div>
           <div className="home_intro">
               <div className="home_intro_left">
               <img className="logo_home" src={logo} alt="Logo For KrishiBazzar" />
               </div>
               <div className="home_intro_right">
                   <h2>Who we are???</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               </div>
           </div>
           <Footer/>
        </Aux>
    )
}
export default Home;
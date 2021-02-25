import React from 'react'
import './SellerProfile.css';
import DashboardLayout from '../../Dashboard/DashboardLayout/DashboardLayout'
import tomato from '../../Assets/Images/tomato.jpeg'
import {MdStar,MdStarHalf,MdStarBorder} from "react-icons/md";
import PostReviews from '../../Components/PostReviews/PostReviews'
import {FaEnvelope} from 'react-icons/fa'
import Button from '../../Components/Button/Button'
import Reviews from '../../Components/Reviews/Reviews';

function SellerProfile() {
    return (
        <DashboardLayout>
            <div className="wrapper">
             <div className="seller">
                <div className="profile">
                    
                    <div>
                        <p className="image"><img src={tomato} alt="Profile"/></p>
                    </div>
                    <div className="partition"></div>
                   <div>
                      <h3>{JSON.parse(localStorage.getItem('userDetails')).fname +JSON.parse(localStorage.getItem('userDetails')).lname}</h3>
                    <p> 
                      <MdStar className="star"/>
                      <MdStar className="star"/>
                      <MdStar className="star" />
                      <MdStarHalf className="star"/>
                      <MdStarBorder className="star"/>
                    </p>
                    <p>Location : {JSON.parse(localStorage.getItem('userDetails')).district}</p>
                    <p>mobile number : {JSON.parse(localStorage.getItem('userDetails')).phone}</p>
                    <p>Email : {JSON.parse(localStorage.getItem('userDetails')).fname+"@gmail.com"}</p>
                    <p className="button"><Button><FaEnvelope className="icon"/> Send Message</Button></p>  
                   </div>
                </div>
                <PostReviews/>
                <Reviews/>
             </div>  
            </div>   
        </DashboardLayout>
    )
}

export default SellerProfile;

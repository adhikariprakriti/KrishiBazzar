import React from 'react'
import './Top.css';
import tomato from '../../Assets/Images/tomato.jpeg'
import {MdStar,MdStarHalf,MdStarBorder} from "react-icons/md";
import Button from '../../Components/Button/Button'

const Top=(props)=>{
    return(
        <div className="top-main">
          <div class="single-card">
               <p><img src={tomato} alt="Profile"/></p>
               <h4>{props.name}</h4>
               <h6>{props.address}</h6>
               <p>
                      <MdStar className="star"/>
                      <MdStar className="star"/>
                      <MdStar className="star" />
                      <MdStarHalf className="star"/>
                      <MdStarBorder className="star"/>
               </p>
               <div className="border"></div>
               <h6 className="user-review">{props.positiveReview} positive reviews</h6>
               <Button>View Profile</Button>
          </div>                  
        </div>
    )
}
export default Top

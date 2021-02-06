import React, { useState,useEffect} from 'react'
import tomato from '../../Assets/Images/tomato.jpeg'
import axios from 'axios'
import './DashboardHome.css'
import DashboardLayout from '../../Dashboard/DashboardLayout/DashboardLayout'
const DashboardHome=()=>{
    const [reviews,setReviews]=useState([1,2,3])
    useEffect(()=>{
        axios.get(`http://localhost:4000/personalreview/${JSON.parse(localStorage.getItem('userDetails'))._id} `)
        .then(res=>{
           console.log(res)
        })
   },[])
  
    return (
        <DashboardLayout>
            <div className="reviews-main">
                <h1>Recent Reviews</h1>
                {
                   reviews.map((review,index)=>{
                         return(
                             <>
                                <div className="single-review" key={index}>
                                   <div>
                                   <img src={tomato} alt="user" style={{height:"60px",width:"60px",borderRadius:"50%",marginRight:"20px"}}/>
                                   </div>
                                   <div className="review-content">
                                       <h4>Name</h4>
                                       <p className="date">date</p>
                                       <p className="review-description">review description</p>
                                   </div>
                                </div>
                                <hr/>

                                </>
                                )
                                })
                }               
            </div>
        </DashboardLayout>
        
    )
}

export default DashboardHome

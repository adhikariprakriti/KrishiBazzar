import React,{useState,useEffect} from 'react'
import './Reviews.css';
import tomato from '../../Assets/Images/tomato.jpeg';
import axios from "axios"
const Reviews=()=>{
   const [reviews,setReviews]=useState([])

   useEffect(() => {
      axios.get(`http://localhost:4000/personalreview/${JSON.parse(localStorage.getItem('userDetails'))._id}`)  
      .then(res=>{
         var data = res.data.data.review
         console.log(data)
         setReviews(data)
      //   console.log(res.data.data,activeOrder)
     }).catch(error=>console.log(error))
   }, [])
   
      return (
         
                <div className="reviews">
                   <h2>Reviews</h2>
                     <hr/>
                
                   {reviews!=null ?reviews.map((eachReview,index)=>{
                        return(
                           <>
                           
                     <div className="review__content">
                        <div>
                           <img src={tomato} alt="user" style={{height:"60px",width:"60px",borderRadius:"50%",marginRight:"20px",marginBottom:"20px"}}/>
                        </div> 
                        <div className="review__info">
                          <p className="review__writer">{eachReview.name}</p>
                          <p className="review__description">{eachReview.description}
                          </p>
                       </div>
                     </div>
                     <hr/>

                        </>
                        )
                     }):<h2>No reviews till now</h2>
                  }
                     {/*  */}

                     
                </div>

    )
}

export default Reviews

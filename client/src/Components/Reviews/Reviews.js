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
                
                   {reviews!=null ?reviews.map((eachReview,index)=>{
                        return(
                           <tr>
                              <td >{index+1}</td>
                              <td><p className="review__writer">{eachReview.name}</p></td>
                              <td> <p className="review__description">{eachReview.description}</p></td>
                        </tr>
                        )
                     }):<h2>No reviews till now</h2>
                  }
                     {/* <h2>Reviews</h2>
                     <hr/>
                     <div className="review__content">
                        <div>
                           <img src={tomato} alt="user" style={{height:"60px",width:"60px",borderRadius:"50%",marginRight:"20px"}}/>
                        </div> 
                        <div className="review__info">
                          <p className="review__writer">Rabindranath Taegor</p>
                          <p className="time">4 days ago</p>
                          <p className="review__description">This is a very interesting Product and I really Loved it.
                          Oh my god!!Yesterday I saw a tiger.It was behind me.I was really sacared.
                          djcnflkvnadflknbalgkbnglnglk.wckbdkvjbfjkvbfjkdklnlkgbnlkngf
                          </p>
                       </div>
                     </div> */}

                     
                </div>

    )
}

export default Reviews

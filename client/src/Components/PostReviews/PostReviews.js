import React,{useState} from 'react';
import './PostReviews.css';
import Button from '../Button/Button'
import { FormGroup, Label, Input } from 'reactstrap';
import axios from "axios"
const PostReviews=(props)=>{
  // console.log(props.eachOrder.receiverId);
  const[review,setReview]=useState('')
  // userId = props.eachOrder.receiverId
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:4000/offers/removeoffer/',{id:props.eachOrder._id})

    const header = {
      'auth-token': localStorage.getItem('token'),
    }
    if(JSON.parse(localStorage.getItem('userDetails')).role =="seller"){
      var role ="buyer"
      var sellerId = props.eachOrder.receiverId

    }
    else{
      var role ="seller"
      var sellerId = props.eachOrder.sellerId

    }
    console.log(JSON.parse(localStorage.getItem('userDetails'))._id,props.eachOrder.receiverId);
    const reviewdata={
      review: review,
      role:role ,
      reviewerId: JSON.parse(localStorage.getItem('userDetails'))._id,
      sellerId: sellerId,
      name :JSON.parse(localStorage.getItem('userDetails')).fname + JSON.parse(localStorage.getItem('userDetails')).lname
  
      }
   
    // console.log(reviewdata,"test")
    axios.post('http://localhost:4000/addreview/',{header:header,reviewData:reviewdata})

  }
    return (
        <div className="post__review">
           <h2>ADD review</h2>
           <hr/>
           <p>we won't publish your email or phone Number</p>
           <form className="review__form">    
                <FormGroup row className="formgroup">
                  <Label className="reviewLabel"  for="reviewText">Review : </Label>
                  <Input type="textarea"
                    placeholder="Review the seller..."
                    name="text" id="reviewText"
                    value={review}
                    onChange={e=>setReview(e.target.value)} />                          
                </FormGroup>
           </form> 
           <Button className="button__header" clicked={handleSubmit}>post</Button>
        </div>
    )
}

export default PostReviews;

import React from 'react';
import './PostReviews.css';
import Button from '../Button/Button'
import { FormGroup, Label, Input } from 'reactstrap';

const PostReviews=()=>{
    return (
        <div className="post__review">
           <h2>ADD review</h2>
           <hr/>
           <p>we won't publish your email or phone Number</p>
           <form className="review__form">    
                <FormGroup row className="formgroup">
                  <Label className="reviewLabel"  for="reviewText">Review : </Label>
                  <Input type="textarea" placeholder="Review the seller..." name="text" id="reviewText" />                          
                </FormGroup>
           </form> 
           <Button className="button__header" >post</Button>
        </div>
    )
}

export default PostReviews;

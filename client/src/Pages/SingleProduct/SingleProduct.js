import React,{useEffect,useState} from 'react';
import './SingleProduct.css';
import axios from 'axios';
import tomato from '../../Assets/Images/tomato.jpeg'
import { Form,Col, FormGroup, Label, Input } from 'reactstrap';
import DashboardLayout from '../../Dashboard/DashboardLayout/DashboardLayout'

const SingleProduct=(props)=>{
  const[review,setReview]=useState('')
  const {data}=props.location
  console.log(data)
  const header = {
    'auth-token': localStorage.getItem('token'),
  }

  const reviewdata={
    review: review,
    role: JSON.parse(localStorage.getItem('userDetails')).role,
    reviewerId: JSON.parse(localStorage.getItem('userDetails'))._id,
    sellerId: data.userId

    }


  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(reviewdata,"test")
    axios.post('http://localhost:4000/addreview/',{header:header,reviewData:reviewdata})

  }

    return (
        <DashboardLayout>
            <div className="Product">
                <div className="ProductImage">
                    <img className="Image" src={tomato} alt="product"/>
                </div>
                <div className="ProductInfo">
                     <h1>Tomato</h1>
                     <p>Price : <span >Rs 50/kg</span></p>
                     <p>Seller : <span>Rameshwor Yadav</span></p>
                     <p className="ProductDescription">It is a freshly prepared in Organic Farms. </p>
             
                     <div className="Quantity__button">
                             Quantity:
                            <button>-</button>
                            <input value="2"/>
                            <button>+</button>           
               </div>
                
               <div className="Delivary__button">
                   Delivary:
                   <button>-</button>
                   <input value="2"/>
                   <button>+</button>           
               </div>
                   
              <div className="Paymethod__method">
                <p>Payment Method :</p>
                <FormGroup check>
                       <Label check>
                       <Input type="radio" name="radio1" />{' '}
                       Cash On Delivary
                       </Label>
                </FormGroup>
                <FormGroup check>
                       <Label check>
                       <Input type="radio" name="radio1" />{' '}
                        Instant Payment
                       </Label>
                </FormGroup>
                <button className="button__header">post</button>
              </div>
 
             
         </div>
         </div>
      
         <div className="ReviewSection">
          <div className="AddReview">
             <h1>ADD review</h1>
             <hr/>
             <p>we won't publish your email or phone Number</p>
             <Form className="ReviewForm" onSubmit={handleSubmit}>    
             <FormGroup row>
              <Label className="reviewLabel" for="reviewText" sm={1}>Review</Label>
               <Col sm={6}>
                 <Input type="textarea" 
                        name="text"
                        value={review}
                        onChange={e=>setReview(e.target.value)}
                        id="reviewText" />
                 <button className="button__header" style={{marginTop:"5px"}}>post</button>
               </Col>
            </FormGroup>
            </Form>
           </div>
           <h1>Reviews</h1>
           <hr/>
           <div className="Review">
             <div className="ReviewContent">
               <div>
                  <img src={tomato} alt="user" style={{height:"60px",width:"60px",borderRadius:"50%",marginRight:"20px"}}/>
               </div> 
               <div>
                  <p className="ReviewWriter">Rabindranath Taegor</p>
                  <p className="time">4 days ago</p>
                 
                  <span className="ReviewDescription">This is a very interesting Product and I really Loved it.
                    Oh my god!!Yesterday I saw a tiger.It was behind me.I was really sacared.
                    djcnflkvnadflknbalgkbnglnglk.wckbdkvjbfjkvbfjkdklnlkgbnlkngf
                  </span>
               </div>
             </div>
 
          <hr/>
 
          <div className="ReviewContent">
               <div>
                  <img src={tomato} alt="user" style={{height:"60px",width:"60px",borderRadius:"50%",marginRight:"20px"}}/>
               </div> 
               <div>
                  <p className="ReviewWriter">Rabindranath Taegor</p>
                  <p className="time">4 days ago</p>
 
                  <span className="ReviewDescription">This is a very interesting Product and I really Loved it.
                    Oh my god!!Yesterday I saw a tiger.It was behind me.I was really sacared.
                    djcnflkvnadflknbalgkbnglnglk.wckbdkvjbfjkvbfjkdklnlkgbnlkngf
                  </span>
               </div>
             </div>
          </div>
 
         </div>
        
     
    </DashboardLayout>
    )
}

export default SingleProduct

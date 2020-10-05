import React from 'react';
import './SingleProduct.css';
import tomato from '../../Assets/Images/tomato.jpeg'
import { Form,Col, FormGroup, Label, Input } from 'reactstrap';
import DashboardLayout from '../../Dashboard/DashboardLayout/DashboardLayout'

const SingleProduct=()=>{
    return (
        <DashboardLayout>
           <div className="MainContent">
              <div className="Wrapper">
                  <div className="ProductContent">
                      <div className="ProductImage">
                          <img className="Image" src={tomato} alt="product image"/>
                      </div>
            <div className="ProductInfo">
             <h1>Tomato</h1>
             <p>Price : <span >Rs 50/kg</span></p>
             <p>Seller : Rameshwor Yadav</p>
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
             <Form className="ReviewForm">    
             <FormGroup row>
              <Label className="reviewLabel" for="reviewText" sm={1}>Review</Label>
               <Col sm={6}>
                 <Input type="textarea" name="text" id="reviewText" />
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
         </div>
       </div>
    </DashboardLayout>
    )
}

export default SingleProduct

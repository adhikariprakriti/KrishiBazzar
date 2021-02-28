import React,{useEffect,useState} from 'react';
import './SingleProduct.css';
import axios from 'axios';
import tomato from '../../Assets/Images/tomato.jpeg'
import { Form,Col, FormGroup, Label, Input } from 'reactstrap';
import DashboardLayout from '../../Dashboard/DashboardLayout/DashboardLayout'
import Button from "../../Components/Button/Button"
import KhaltiCheckout from "khalti-checkout-web";
import Modal from "../../Components/Modal/modal";
import { ImCross } from 'react-icons/im';

const SingleProduct=(props)=>{
  const[review,setReview]=useState('')
  const[quantity,setQuantity]=useState('')
  const[date,setDate]=useState('')
  const[show,setShow]=useState(false)

  const data = JSON.parse(localStorage.getItem('offerItem'))
  var product = data
  console.log(JSON.parse(localStorage.getItem('offerItem')),"LOCALSTORGAE");
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
  const handlePayment=()=>{
    console.log(product);
    var config = {
      // replace the publicKey with yours
      "publicKey": "test_public_key_6d8add8f0f114055a31fe48bc822e0a7",
      "productIdentity": "1234567890",
      "productName": "Dragon",
      "productUrl": "http://gameofthrones.wikia.com/wiki/Dragons",
      "paymentPreference": [
          "KHALTI",
          "EBANKING",
          "MOBILE_BANKING",
          "CONNECT_IPS",
          "SCT",
          ],
      "eventHandler": {
          onSuccess (payload) {
              // hit merchant api for initiating verfication
              console.log(payload);
              var orderDetails ={
                id:product._id,
                quantity:quantity,
                deliveryDate:date,
                productName:product.name,
                category:product.category,
                receiverId:JSON.parse(localStorage.getItem('userDetails'))._id,
                sellerId:product.userId,
                price:product.price
              }
              axios.post('http://localhost:4000/offers/updateoffer',orderDetails)
                .then(res=>{
                 console.log(res)
                })
              setShow(true)
              
          },
          onError (error) {
              console.log(error,"here is error");
          },
          onClose () {
              console.log('widget is closing');
          }
      }
  };

  var checkout = new KhaltiCheckout(config);
  var btn = document.getElementById("payment-button");
  btn.onclick = function () {
      // minimum transaction amount must be 10, i.e 1000 in paisa.
      checkout.show({amount: 1000});
  }
  }

    return (
        <DashboardLayout>
           
         
            <div className="Product">
            <Modal show={show} clicked={()=>setShow(!show)}>
            <ImCross onClick={()=>setShow(!show) } className="cross_btn"/>
                    <h2 className="payment_success">Payment Successful..</h2>
                </Modal>
                <div className="ProductImage">
                    <img className="Image" src={tomato} alt="product"/>
                </div>
                <div className="ProductInfo">
                     <h1>{data.name}</h1>
                     <p>Price : <span >{data.price}</span></p>
                     <p>Location of seller : <span>{data.district}</span></p>
                     <p className="ProductDescription">Description:{data.description}</p>
             
                     <div className="Quantity__button">
                             Quantity:
                           <input onChange={(e)=>setQuantity(e.target.value)}></input>
               </div>
                
               <div className="Delivary__button">
                   Delivery date:
                   <input onChange={(e)=>setDate(e.target.value)}></input>  

               </div>
                   
              <div className="Paymethod__method">
                <Button id="payment-button" clicked={handlePayment}>Confirm Order</Button>
              </div>
 
             
         </div>
         </div>
      
         {/* <div className="ReviewSection">
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
                 <button className="button__header" style={{marginTop:"5px"}} onSubmit={handleSubmit}>post</button>
               </Col>
            </FormGroup>
            </Form>
           </div>
         </div> */}

         <p className="additional_text">
           Please contact the seller to be sure about delivery location.
            You can chat with the seller first, be sure about quantity and price of offer before payment.
            Once you pay ,its not refundable

         </p>
        
     
    </DashboardLayout>
    )
}

export default SingleProduct

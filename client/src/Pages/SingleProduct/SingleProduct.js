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
  const handlePayment=()=>{
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
              // alert("successful")
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
                     <h1>Tomato</h1>
                     <p>Price : <span >Rs 50/kg</span></p>
                     <p>Seller : <span>Rameshwor Yadav</span></p>
                     <p className="ProductDescription">It is a freshly prepared in Organic Farms. </p>
             
                     <div className="Quantity__button">
                             Quantity:
                           <input onChange={(e)=>setQuantity(e.target.value)}></input>
                           {console.log(quantity)}           
               </div>
                
               <div className="Delivary__button">
                   Delivery date:
                   <input onChange={(e)=>setDate(e.target.value)}></input>  
                   {console.log(date)}           

               </div>
                   
              <div className="Paymethod__method">
                <Button id="payment-button" clicked={handlePayment}>Confirm Order</Button>
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
           {/* <h1>Reviews</h1>
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
          </div> */}
 
         </div>
        
     
    </DashboardLayout>
    )
}

export default SingleProduct

import React,{useState,useEffect} from 'react'
import './SellerProfile.css';
import { Table } from 'reactstrap';
import DashboardLayout from '../../Dashboard/DashboardLayout/DashboardLayout'
import tomato from '../../Assets/Images/tomato.jpeg'
import {MdStar,MdStarHalf,MdStarBorder} from "react-icons/md";
import PostReviews from '../../Components/PostReviews/PostReviews'
import {FaEnvelope} from 'react-icons/fa'
import Button from '../../Components/Button/Button'
import Reviews from '../../Components/Reviews/Reviews';
import Modal from '../../Components/Modal/modal';
import { ImCross } from 'react-icons/im';
import axios from "axios"

function SellerProfile() {
    const [show,setShow]=useState(false)
    const [activeOrder,setActiveOrder]=useState([])

    useEffect(() => {
      axios.get(`http://localhost:4000/offers/activebuyeroffer/${JSON.parse(localStorage.getItem('userDetails'))._id}`)  
      .then(res=>{
         var data = res.data.data
         setActiveOrder(data)
      //   console.log(res.data.data,activeOrder)
     }).catch(error=>console.log(error))
        
      
    }, [])
    const handleBackdrop=()=>{
        console.log("clicked")
        setShow(true)
    }

    return (
              <DashboardLayout>
            <div className="wrapper">
             <div className="seller">
                <div className="profile">
                

                    <div>
                        <p className="image"><img src={tomato} alt="Profile"/></p>
                    </div>
                    <div className="partition"></div>
                   <div>
                      <h3>{JSON.parse(localStorage.getItem('userDetails')).fname +JSON.parse(localStorage.getItem('userDetails')).lname}</h3>
                    <p> 
                      <MdStar className="star"/>
                      <MdStar className="star"/>
                      <MdStar className="star" />
                      <MdStarHalf className="star"/>
                      <MdStarBorder className="star"/>
                    </p>
                    <p>Location : {JSON.parse(localStorage.getItem('userDetails')).district}</p>
                    <p>mobile number : {JSON.parse(localStorage.getItem('userDetails')).phone}</p>
                    <p>Email : {JSON.parse(localStorage.getItem('userDetails')).fname+"."+JSON.parse(localStorage.getItem('userDetails')).lname+"@gmail.com"}</p>
                    <p className="button"><Button><FaEnvelope className="icon"/> Send Message</Button></p>  
                   </div>
                </div>

                <div className="activeOrder_table"><h1 className="leftMargin">Active Orders</h1>
                <div className="offers_table">
                  <Table striped responsive>
                  <thead>
                     <tr>
                        <th>S.N</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price per unit</th>
                        <th>Person</th>
                        <th>View details</th>
                     </tr>
                  </thead>
                  <tbody>
                     {activeOrder.map((eachOrder,index)=>{
                        return(
                           <tr>
                              {console.log(eachOrder)}
                              <td >{index+1}</td>
                              <td>{eachOrder.productName}</td>
                              <td>{eachOrder.quantity}</td>
                              <td>{eachOrder.price}</td>
                              <td>{eachOrder.receiverName}</td>
                              <td><Button clicked={handleBackdrop}>Mark as completed</Button></td>
                              <Modal show={show} clicked={()=>setShow(!show)}>
                <ImCross onClick={()=>setShow(!show) } className="cross_btn"/>
                    <PostReviews eachOrder={eachOrder}/>
                </Modal>
                        </tr>
                        )
                     })}
                  </tbody>
              </Table>
            </div>
                </div>
                <Reviews/>
             </div>  
            </div> 
        </DashboardLayout>
        
    )
}

export default SellerProfile;

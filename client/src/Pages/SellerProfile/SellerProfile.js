import React,{useState} from 'react'
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

function SellerProfile() {
    const [show,setShow]=useState(false)
    const handleBackdrop=()=>{
        console.log("clicked")
        setShow(true)
    }

    return (
              <DashboardLayout>
            <div className="wrapper">
             <div className="seller">
                <div className="profile">
                <Modal show={show} clicked={()=>setShow(!show)}>
                    <PostReviews/>
                </Modal>

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
                    <p>Email : {JSON.parse(localStorage.getItem('userDetails')).fname+"@gmail.com"}</p>
                    <p className="button"><Button><FaEnvelope className="icon"/> Send Message</Button></p>  
                   </div>
                </div>

                <div><h1 className="leftMargin">Active Orders</h1>
                <div className="offers_table">
                  <Table striped responsive>
                  <thead>
                     <tr>
                        <th>S.N</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price per kg</th>
                        <th>View details</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td >1</td>
                        <td>Orange</td>
                        <td>12kg</td>
                        <td>Rs 1200</td>
                        <td><Button clicked={handleBackdrop}>Mark Received</Button></td>
                     </tr>
                     <tr>
                        <td >1</td>
                        <td>Orange</td>
                        <td>12kg</td>
                        <td>Rs 1200</td>
                        <td><Button clicked={handleBackdrop}>Confirm Product</Button></td>
                     </tr>
                     <tr>
                        <td >1</td>
                        <td>Orange</td>
                        <td>12kg</td>
                        <td>Rs 1200</td>
                        <td><Button clicked={handleBackdrop}>Confirm Product</Button></td>
                     </tr>
                  </tbody>
              </Table>
            </div>

                
                </div>
                <PostReviews/>
                <Reviews/>
             </div>  
            </div> 
        </DashboardLayout>
        
    )
}

export default SellerProfile;

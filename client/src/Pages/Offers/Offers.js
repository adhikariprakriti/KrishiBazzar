import React,{useEffect,useState} from 'react'
import { useHistory } from "react-router-dom";
import './Offers.css'
import { Table } from 'reactstrap';
import Aux from '../../hoc/Auxilliary'
import Toolbar from '../../Dashboard/Navbar/Toolbar/Toolbar'
import Button from '../../Components/Button/Button';
import axios from 'axios'

const Offers=()=>{
   const [offers,setOffers]=useState([])
   const history = useHistory();


   useEffect(()=>{
      axios.get('http://localhost:4000/offers/selleroffer')
      .then(res=>{
         console.log(res.data.data);
         setOffers(res.data.data)
      })
 },[])
 console.log(offers)


    return(
        <Aux>
            <Toolbar/>
              <div className="offers">
               <div className="offers_container">
                  <h1>Offers by sellers</h1>
                  <div className="offers_table">
                  <Table striped responsive>
                  <thead>
                     <tr className="box_title">
                        <th>S.N</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price per kg</th>
                        <th>View details</th>
                     </tr>
                  </thead>
                  <tbody>
                     
 {
offers.map((offerItem, index)=>{
   return(
      <tr className="box_style">
                        <td >{index+1}</td>
                        <td>{offerItem.name}</td>
                        <td>{offerItem.quantity}</td>
                        <td>{offerItem.price}</td>
                        <td><Button clicked={()=>
                        {
                           console.log(offerItem);
                           localStorage.setItem("offerItem",JSON.stringify(offerItem))
                           history.push({
                           pathname: "/singleProduct",
                  
                        })}}>View details</Button></td>
                        <td><Button clicked={()=>{
                           localStorage.setItem('receiverId',offerItem.userId)
                           history.push({
                           pathname: "/message/userid",
                           data: offerItem
                        })}}>Message</Button></td>
                     </tr>
  )
})
}

                  </tbody>
              </Table>

                       
                  </div>
               </div>

            </div>
           {/*
               <Table striped>
                  <thead>
                     <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                     </tr>
                     <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                     </tr>
                     <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                     </tr>
                 </tbody>
              </Table>
              */}
        </Aux>

    )
}
export default Offers;
import React from 'react'
import './Offers.css'
import { Table } from 'reactstrap';
import Aux from '../../hoc/Auxilliary'
import Toolbar from '../../Dashboard/Navbar/Toolbar/Toolbar'
import Button from '../../Components/Button/Button';

const Offers=()=>{

  

    return(
        <Aux>
            <Toolbar/>
            <div className="offers">
               <div className="offers_container">
                  <h1>Offers by sellers</h1>
                  <div className="offers_table">
                  <Table striped responsive>
                  <thead>
                     <tr>
                        <th>Date</th>
                        <th>Seller</th>
                        <th>Product Info</th>
                        <th>Price per kg</th>
                        <th>View details</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td >1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td><Button>View details</Button></td>
                     </tr>
                     <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td><Button>View details</Button></td>
                     </tr>
                     <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td><Button>View details</Button></td>
                     </tr>
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
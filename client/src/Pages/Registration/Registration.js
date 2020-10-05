import React from 'react'
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import './Registration.css';
import Button from '../../Components/Button/Button'
import logo from '../../Assets/Images/logo.png'

const Registration=()=>{
    return (
        <div className="registration__container">
            <div className="registration__logo">
                  <img className="logo" src={logo} alt="Logo For KrishiBazzar" />
            </div>
             <Form className="registration__form">
             <h1>Sign Up</h1>
              <p>If you are already registered <a className="links" href="/login">Login here</a></p>
                 <p>I am*</p>
                <hr/>
                <div className="radio_buttons">
                  <FormGroup check>
                      <Label check>
                      <Input type="radio" name="radio1" />{' '}
                      Buyer
                      </Label>
                  </FormGroup>
                  <FormGroup check>
                      <Label check>
                      <Input type="radio" name="radio1" />{' '}
                      Seller
                      </Label>
                  </FormGroup>
                  <FormGroup check>
                      <Label check>
                      <Input type="radio" name="radio1" />{' '}
                      Both
                      </Label>
                  </FormGroup>
                </div>
                <hr/>
                <Row>
                    <Col md={6}>
                       <FormGroup>
                           <Label for="firstName">FirstName</Label>
                           <Input type="text" name="firstName" id="credentials" placeholder="First Name" />
                       </FormGroup>
                    </Col> 
                    <Col md={6}>
                        <FormGroup>
                        <Label for="lastName">LastName</Label>
                        <Input type="text" name="lastName" id="credentials" placeholder="LastName" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                       <FormGroup>
                           <Label for="phoneName">Phone Number</Label>
                           <Input type="text" name="phoneName" id="credentials" placeholder="Phone Number" />
                       </FormGroup>
                    </Col> 
                    <Col md={6}>
                        <FormGroup>
                        <Label for="provienceNumber">Provience Number</Label>
                        <Input type="text" name="provienceNumbe" id="credentials" placeholder="Provience Numbe" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                       <FormGroup>
                           <Label for="city">City</Label>
                           <Input type="text" name="city" id="credentials" placeholder="City" />
                       </FormGroup>
                    </Col> 
                    <Col md={6}>
                        <FormGroup>
                        <Label for="district">District</Label>
                        <Input type="text" name="district" id="credentials" placeholder="District" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col >
                       <FormGroup>
                           <Label for="email">Email</Label>
                           <Input type="text" name="email" id="credentials" placeholder="Email" />
                       </FormGroup>
                    </Col>    
                </Row>
                <Row>
                    <Col >
                       <FormGroup>
                           <Label for="password">Password</Label>
                           <Input type="password" name="password" id="credentials" placeholder="Password" />
                       </FormGroup>
                    </Col>    
                </Row>
                <Row>
                    <Col >
                       <FormGroup>
                           <Label for="confirm Password">Confirm Password</Label>
                           <Input type="password" name="confirm Password" id="credentials" placeholder="Confirm Password" />
                       </FormGroup>
                    </Col>    
                </Row> 
                <FormGroup check className="policy">
                   <Label check>
                      <Input type="checkbox" />{' '}
                      I agree with the <span>Agri Marketplace Terms</span> and <span>Privacy Policy</span>.
                  </Label>
                </FormGroup>
                <Button type="large">Register</Button>
             </Form>
        </div>
    )
}

export default Registration

import React,{useState} from 'react'
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import './Registration.css';
import Button from '../../Components/Button/Button'
import logo from '../../Assets/Images/logo.png'
import axios from 'axios'

const Registration=()=>{
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [phoneNo,setPhoneNo]=useState('')
    const [city,setCity]=useState('')
    const [email,setEmail]=useState('')
    const [district,setDistrict]=useState('')
    const [provienceNumber,setProvienceNumber]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [i_am,setI_am]=useState('')
    const newUser={
        firstName,
        lastName,
        phoneNo,
        city,
        email,
        district,
        provienceNumber,
        password,
        confirmPassword,
        i_am
    }


const handleOptionChange=(e)=>{
     const selectedOption=e.target.value
     setI_am(selectedOption)
     
  }
  
  
const handleSubmit=(e)=>{
      e.preventDefault();
      
        axios.post('http://localhost:4000/register',newUser)
        .then(res=>{
            console.log("sent data")
        })
        .then(err=>{
            console.log(err);
        })
     
    
}
    

    return (
        <div className="registration__container">
            <div className="registration__logo">
                  <img className="logo" src={logo} alt="Logo For KrishiBazzar" />
            </div>
             <Form className="registration__form"  onSubmit={handleSubmit}>
             <h1>Sign Up</h1>
              <p>If you are already registered <a className="links" href="/login">Login here</a></p>
                 <p>I am*</p>
                <hr/>
                <div className="radio_buttons">
                  <FormGroup check>
                      <Label check>
                      <Input type="radio" 
                             value="buyer" 
                             checked={i_am === "buyer"}
                             onChange={handleOptionChange}/>{' '}
                      Buyer
                      </Label>
                  </FormGroup>
                  <FormGroup check>
                      <Label check>
                      <Input type="radio" 
                             value="seller"
                             checked={i_am === "seller"}
                             onChange={handleOptionChange}/>{' '}
                      Seller
                      </Label>
                  </FormGroup>
                  <FormGroup check>
                      <Label check>
                      <Input type="radio" 
                             value="both" 
                             checked={i_am === "both"}
                             onChange={handleOptionChange}/>{' '}
                      Both
                      </Label>
                  </FormGroup>
                </div>
                <hr/>
                <Row>
                    <Col md={6}>
                       <FormGroup>
                           <Label for="firstName">FirstName</Label>
                           <Input type="text" 
                                  value={firstName} 
                                  name="firstName"
                                  id="credentials"
                                  onChange={e=>setFirstName(e.target.value)} 
                                  placeholder="First Name" />
                       </FormGroup>
                    </Col> 
                    <Col md={6}>
                        <FormGroup>
                        <Label for="lastName">LastName</Label>
                        <Input type="text" 
                               value={lastName} 
                               name="lastName" 
                               id="credentials"  
                               onChange={e=>setLastName(e.target.value)} 
                               placeholder="LastName" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                       <FormGroup>
                           <Label for="phoneNo">Phone Number</Label>
                           <Input type="text" 
                                  value={phoneNo} 
                                  name="phoneNo" 
                                  id="credentials"
                                  onChange={e=>setPhoneNo(e.target.value)}  
                                  placeholder="Phone Number" />
                       </FormGroup>
                    </Col> 
                    <Col md={6}>
                        <FormGroup>
                        <Label for="provienceNumber">Provience Number</Label>
                        <Input type="text" 
                               value={provienceNumber} 
                               name="provienceNumbe" 
                               id="credentials" 
                               onChange={e=>setProvienceNumber(e.target.value)} 
                               placeholder="Provience Numbe" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                       <FormGroup>
                           <Label for="city">City</Label>
                           <Input type="text" 
                                  value={city} 
                                  name="city" 
                                  id="credentials" 
                                  onChange={e=>setCity(e.target.value)} 
                                  placeholder="City" />
                       </FormGroup>
                    </Col> 
                    <Col md={6}>
                        <FormGroup>
                        <Label for="district">District</Label>
                        <Input type="text" 
                               value={district} 
                               name="district" 
                               id="credentials"
                               onChange={e=>setDistrict(e.target.value)}  
                               placeholder="District" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col >
                       <FormGroup>
                           <Label for="email">Email</Label>
                           <Input type="text" 
                                  value={email} 
                                  name="email" 
                                  id="credentials" 
                                  onChange={e=>setEmail(e.target.value)} 
                                  placeholder="Email" />
                       </FormGroup>
                    </Col>    
                </Row>
                <Row>
                    <Col >
                       <FormGroup>
                           <Label for="password">Password</Label>
                           <Input type="password" 
                                  value={password} 
                                  name="password" 
                                  id="credentials" 
                                  onChange={e=>setPassword(e.target.value)} 
                                  placeholder="Password" />
                       </FormGroup>
                    </Col>    
                </Row>
                <Row>
                    <Col >
                       <FormGroup>
                           <Label for="confirmPassword">Confirm Password</Label>
                           <Input type="password" 
                                  value={confirmPassword} 
                                  name="confirmPassword" 
                                  id="credentials" 
                                  onChange={e=>setConfirmPassword(e.target.value)} 
                                  placeholder="Confirm Password" />
                       </FormGroup>
                    </Col>    
                </Row> 
                <FormGroup check className="policy">
                   <Label check>
                      <Input type="checkbox" 
                              checked={false}/>{' '}
                      I agree with the <span>Agri Marketplace Terms</span> and <span>Privacy Policy</span>.
                  </Label>
                </FormGroup>
                <Button type="large">Register</Button>
             </Form>
        </div>
    )
}

export default Registration

import React,{useState} from 'react'
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import './Registration.css';
import Button from '../../Components/Button/Button'
import logo from '../../Assets/Images/logo.png'
import axios from 'axios'
import validateInfo from '../../Validation/RegistrationValidation'
 
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
   const [errors,setErrors]=useState({})
   const [errMessage,setErrMessage]=useState(null)
 
   const setAuthorizationHeader=(token)=>{
    const FBIdToken=`Bearer ${token}`
       localStorage.setItem('FBIdToken',FBIdToken);
       axios.defaults.headers.common['Authorization']=FBIdToken;       
}
 
const handleOptionChange=(e)=>{
    const selectedOption=e.target.value
    setI_am(selectedOption)  
 }
 
const handleSubmit=(e)=>{
     e.preventDefault();
     const user={
       firstName: firstName,
       lastName: lastName,
       phoneNo: phoneNo,
       city: city,
       email: email,
       district: district,
       provienceNumber: provienceNumber,
       password: password,
       confirmPassword: confirmPassword,
       i_am: i_am
     }

     const newUser={
        fname: firstName,
        lname: lastName,
        phone: phoneNo,
        city: city,
        email: email,
        district: district,
        province: provienceNumber,
        password: password,
        role: i_am,

      }
      console.log(newUser)
      setErrors(validateInfo(user));
  
   if(Object.keys(errors).length === 0){
       console.log("submitted successfully")
        axios.post('http://localhost:4000/user/register',newUser)
        .then(res=>{
          console.log(res)
          if(res.data.errMessage){
            setErrMessage(res.data.errMessage)
          }else{
              setErrMessage(null)
              localStorage.setItem('userDetails',JSON.stringify(res.data));
              setAuthorizationHeader(res.data.token)

          }
         })
         .catch(err=>{
           console.log(err);
         })
    }else{
       console.log("error occured")
    }
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
               {errors.i_am  ? <p className="error">{errors.i_am}</p> : null}
 
               <hr/>
               <Row>
                   <Col md={6}>
                      <FormGroup>
                          <Label for="firstName">FirstName</Label>
                          <Input type="text"
                                 value={firstName}
                                 name="firstName"
                                 className="credentials"
                                 onChange={e=>setFirstName(e.target.value)}
                                 placeholder="First Name" />
                                {errors.firstName  ? <p style={{color:"red",fontSize:"12px"}}>{errors.firstName}</p> : null}
                      </FormGroup>
                   </Col>
                   <Col md={6}>
                       <FormGroup>
                       <Label for="lastName">LastName</Label>
                       <Input type="text"
                              value={lastName}
                              name="lastName"
                              className="credentials" 
                              onChange={e=>setLastName(e.target.value)}
                              placeholder="LastName" />
                           {errors.lastName  ? <p className="error">{errors.lastName}</p> : null}
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
                                 className="credentials"
                                 onChange={e=>setPhoneNo(e.target.value)} 
                                 placeholder="Phone Number" />
                           {errors.phoneNo ? <p className="error">{errors.phoneNo}</p> : null}
                      </FormGroup>
                   </Col>
                   <Col md={6}>
                       <FormGroup>
                       <Label for="provienceNumber">Provience Number</Label>
                       <Input type="text"
                              value={provienceNumber}
                              name="provienceNumber"
                              className="credentials"
                              onChange={e=>setProvienceNumber(e.target.value)}
                              placeholder="Provience Numbe" />
                        {errors.provienceNumber  ? <p className="error">{errors.provienceNumber}</p> : null}
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
                                 className="credentials"
                                 onChange={e=>setCity(e.target.value)}
                                 placeholder="City" />
                           {errors.city ? <p className="error">{errors.city}</p> : null}
                      </FormGroup>
                   </Col>
                   <Col md={6}>
                       <FormGroup>
                       <Label for="district">District</Label>
                       <Input type="text"
                              value={district}
                              name="district"
                              className="credentials"
                              onChange={e=>setDistrict(e.target.value)} 
                              placeholder="District" />
                       {errors.district  ? <p className="error">{errors.district}</p> : null}
                       </FormGroup>
                   </Col>
               </Row>
               <Row>
                   <Col >
                      <FormGroup>
                          <Label for="email">Email (optional)</Label>
                          <Input type="text"
                                 value={email}
                                 name="email"
                                 className="credentials"
                                 onChange={e=>setEmail(e.target.value)}
                                 placeholder="Email" />
                       {errors.email ? <p className="error">{errors.email}</p> : null}
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
                                 className= "credentials" 
                                 onChange={e=>setPassword(e.target.value)}
                                 placeholder="Password" />
                       {errors.password ? <p className="error">{errors.password}</p> : null}
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
                                 className="credentials"
                                 onChange={e=>setConfirmPassword(e.target.value)}
                                 placeholder="Confirm Password" />
                           {errors.confirmPassword ? <p className="error">{errors.confirmPassword}</p> : null}
                      </FormGroup>
                   </Col>   
               </Row>
               <FormGroup className="policy">   
                    I agree with the <span>Agri Marketplace Terms</span> and <span>Privacy Policy</span>.
               </FormGroup>
               {
                   errMessage ?<div style={{backgroundColor: "red",opacity:"70%",padding:"5px 20px",marginBottom:"5px"}}>hello</div> : null
               }
               <Button type="large">Register</Button>
            </Form>
       </div>
   )
}
 
export default Registration
 
 




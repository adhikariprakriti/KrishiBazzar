import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import './Login.css'
import logo from '../../Assets/Images/logo.png'
import Button from '../../Components/Button/Button'
import validateInfo from '../../Validation/LoginValidation'
import axios from 'axios'

const Login=()=>{
   const[phoneNo,setPhoneNo]=useState('')
   const[password,setPassword]=useState('')
   const [errors,setErrors]=useState({})
   const history = useHistory();
 
   const setAuthorizationHeader=(token)=>{
      const FBIdToken=`Bearer ${token}`
      localStorage.setItem('FBIdToken',FBIdToken);
      axios.defaults.headers.common['Authorization']=FBIdToken;       
  }



   const handleSubmit=(e)=>{
     e.preventDefault();
     const user={
      phone: phoneNo,
      password: password,
   }
   setErrors(validateInfo(user));
  
   if(Object.keys(errors).length === 0){
      console.log("submitted successfully")
      axios.post('http://localhost:4000/user/login',user)
        .then(res=>{
          console.log(res.data)
          setAuthorizationHeader(res.data)
          localStorage.setItem('userDetails',JSON.stringify(res.data));
          localStorage.setItem('token',JSON.stringify(res.data.token));
          history.push({
            pathname: "/dashboard",
         })

         })
         .then(err=>{
           console.log(err);
         })
   }else{
      console.log("error occured")
   }
     
}
   return (
       <div className="LoginBackground">
          <div className="login__container">
              <div className="login__logo">
                 <img className="logo" src={logo} alt="Logo For KrishiBazzar" />
              </div>
           <div className="login__form">
                  <h1>login</h1>
               <form onSubmit={handleSubmit} noValidate>
                       <div className="form__group">
                          <label >Phone Number:</label>
                          <input className="input"
                                 type="text"
                                 value={phoneNo}
                                 placeholder="Phone Number"
                                 name="phoneNo"
                                 onChange={(e)=>setPhoneNo(e.target.value)}/>
                          {errors.phoneNo ? <p className="error">{errors.phoneNo}</p> : null}
                       </div>
        
                       <div className="form__group">
                          <label>Password:</label>
                          <input className="input"
                                 type="password"
                                 value={password}
                                 name="password"
                                 placeholder="Password"
                                 onChange={(e)=>setPassword(e.target.value)}/>
                          {errors.password ? <p className="error">{errors.password}</p> : null}
                       </div>
 
                       <Button type="large" >Log In</Button>
                  </form>
                 
              </div>
              <div className="login__links">
                 <a href="/">Forgot your password?</a><br/>
                 <a href="/registration">Not registered yet? Sign up</a><br/>
                 <a href="/">Didn't receive confirmation instructions?</a><br/>
               </div>
          </div>
       </div>
   )
}
 
export default Login;
 
 

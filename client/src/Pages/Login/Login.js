import React,{useState} from 'react'
import './Login.css'
import logo from '../../Assets/Images/logo.png'
import Button from '../../Components/Button/Button'

const Login=()=>{
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    return (
        <div className="LoginBackground">
           <div className="login__container">
               <div className="login__logo">
                  <img className="logo" src={logo} alt="Logo For KrishiBazzar" />
               </div>
            <div className="login__form">
                   <h1>login</h1>
                <form>
                        <div className="form__group">
                           <label >Email:</label>
                           <input className="input" type="email" value={email} name="email" onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
          
                        <div className="form__group">
                           <label>Password:</label>
                           <input className="input" type="password" value={password} name="password" onChange={(e)=>setPassword(e.target.value)}/>
                        </div>

                        <Button type="large" >Log In</Button>
                   </form> 
                   
               </div>
               <div class="login__links">
                  <a href="/">Forgot your password?</a><br/>
                  <a href="/register">Not registered yet? Sign up</a><br/>
                  <a href="/">Didn't receive confirmation instructions?</a><br/>
                </div> 
           </div>
        </div>
    )
}

export default Login;

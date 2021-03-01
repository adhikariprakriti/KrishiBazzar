import React,{useEffect,useState} from 'react';
import './SingleMessage.css'
import Toolbar from '../../../Dashboard/Navbar/Toolbar/Toolbar'
import Aux from '../../../hoc/Auxilliary'
import Button from '../../../Components/Button/Button'
import io from 'socket.io-client'
var socket;


const SingleMessage=()=>{
    const [singleMessage,setSingleMessage]=useState('')
    const ENDPOINT = "http://localhost:4000/"
    
    useEffect (()=>{
        socket = io(ENDPOINT)
        socket.emit("connection",()=>{})
        var receiverId = localStorage.getItem('receiverId')
        var senderId= JSON.parse(localStorage.getItem('userDetails'))._id
        var role= JSON.parse(localStorage.getItem('userDetails')).role

        if(role == "buyer"){
        var roomId = senderId+'{'+receiverId

        }
        else{
        var roomId = receiverId+'{'+senderId

        }
        socket.emit("fetchmessages",{roomId},async function(data){
            var data = await data.data
            {data.forEach((eachMessage)=>{
                
                document.querySelector("#message").insertAdjacentHTML("beforeEnd",
                ` <li id="receiver">
                    <div className="receiver"
                    style="background-color: #75b038;
                        color: white;
                        width: 70%;
                        border-radius: 4px;
                        padding: 10px 15px;
                        margin-left:auto;
                        margin-right: 0px;">
                       ${eachMessage.message}
                    </div>
                </li>
                `)
         })}

        })
        
        socket.on(roomId,({message,role})=>{
            console.log(roomId);
            console.log(message, "message from backend");
            document.querySelector("#message").insertAdjacentHTML("beforeEnd",
            ` <li id="receiver">
                <div className="receiver"
                style="background-color: #CDCDCD;
                color: black;
                width: 70%;
                border-radius: 4px;
                padding: 10px 15px;">
                    ${message}
                </div>
                </li>
            `)
        })
           
        
        return()=>{
            // socket.emit("disconnect");
            // socket.off()
        }
         
    }, [])
    const sendSingleMessage=()=>{
        var receiverId = localStorage.getItem('receiverId')
        var senderId= JSON.parse(localStorage.getItem('userDetails'))._id
        var role= JSON.parse(localStorage.getItem('userDetails')).role
        console.log(singleMessage);
        socket.emit("sendSingleMessage",{message:singleMessage,role,senderId,receiverId},function(data){
            console.log(data);
            
            document.querySelector("#message").insertAdjacentHTML("beforeEnd",
            ` <li id="sender">
                <div className="sender" 
                style="background-color: #75b038;
                color: white;
                width: 70%;
                border-radius: 4px;
                padding: 10px 15px;
                margin-left:auto;
                margin-right: 0px;">
                   ${singleMessage}
                </div>
                </li>
            `)
            
        })
        }
    return(
        <Aux>
            <div className="bg">
                <Toolbar/>
                <div className="single_container">
                   <div className="message_header">
                       <h4>Your message</h4>
                   </div>
                   <div className="border"></div>
                   <div className="message_content">
                       <ul id="message">
                           
                       </ul>
                   </div>
                   <div className="message_footer">
                       <input name="message" type="text" placeholder="Type Message....."  required autoComplete="off"
                       onChange={(e)=>setSingleMessage(e.target.value)}/>
                       <Button clicked={sendSingleMessage}>Send</Button>
                    </div>
                </div>
                
            </div>
        </Aux>
               
    )
}

export default SingleMessage;
import React ,{useEffect} from 'react'
import { useHistory } from "react-router-dom";
import Toolbar from '../../Dashboard/Navbar/Toolbar/Toolbar'
import Aux from '../../hoc/Auxilliary'
import io from 'socket.io-client'
import './Message.css'
import tomato from '../../Assets/Images/tomato.jpeg'
var socket;


const Message=(props)=>{
    const {data}=props.location
    const receiverId = data.userId
   
    const senderId = JSON.parse(localStorage.getItem('userDetails'))._id
    const ENDPOINT = "http://localhost:4000/"

    useEffect (()=>{
        socket = io(ENDPOINT)
        socket.emit("connection",()=>{})
        socket.on("test",()=>{console.log("listening test event");})
        localStorage.setItem('receiverId',receiverId);
        return()=>{
            socket.emit("disconnect");
            socket.off()
        }
        
     
         
    }, [])
    const sendMessage=()=>{
        console.log("button msg");
        socket.emit("sendOffer",{senderId,receiverId},()=>{console.log("first offer");})
        socket.emit("sendMessage",{senderId,receiverId,message:"starting conversation"},()=>{console.log("first message");})
        }

    let history=useHistory()
    const handleClick=()=>{
      history.push("/message/userid")
    }
    return(
        <Aux>
            
           <Toolbar/>
           <div className="message_bg">
               <div className="message_list_container">
                   <div className="message_list_header">
                       <h4>Recent Messages</h4>
                   </div>
                   <div className="border"></div>
                   <div className="message_lists"> 
                         <ul>
                             <li className="list" onClick={handleClick}>
                                 <div className="message_list">
                                     <div>
                                     <img src={tomato} alt="Profile"/>
                                     </div>
                                     <div>
                                          <p>Prakriti Adhikari</p>
                                          <span className="date"> 2:23pm nov1,2020 </span>                                     
                                     </div>
                                 </div>
                             </li>

                             <li className="list">
                                 <div className="message_list">
                                     <div>
                                     <img src={tomato} alt="Profile"/>
                                     </div>
                                     <div>
                                         <p>Prakriti Adhikari</p>
                                          <span className="date"> 2:23pm nov1,2020 </span>                                     
                                     </div>
                                     <button onClick={sendMessage}> send</button>
                                 </div>
                             </li>
                             <li className="list">
                                 <div className="message_list">
                                     <div>
                                     <img src={tomato} alt="Profile"/>
                                     </div>
                                     <div>
                                         <p>Prakriti Adhikari</p>
                                          <span className="date"> 2:23pm nov1,2020 </span>                                     
                                     </div>
                                 </div>
                             </li>
                         </ul> 
                   </div>
                    </div>
           </div>
        </Aux>
    )
}

export default Message;
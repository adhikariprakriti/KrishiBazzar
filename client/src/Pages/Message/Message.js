import React ,{useEffect} from 'react'
import { useHistory } from "react-router-dom";
import Toolbar from '../../Dashboard/Navbar/Toolbar/Toolbar'
import Aux from '../../hoc/Auxilliary'
import io from 'socket.io-client'
import './Message.css'
import tomato from '../../Assets/Images/tomato.jpeg'
var socket;
const ENDPOINT = "http://localhost:4000/"
const Message=()=>{

    useEffect (()=>{
        // const {name,room,id} = queryString.parse(location.search)
        socket = io(ENDPOINT)
        socket.emit("connection",()=>{})
        
        return()=>{
            socket.emit("disconnect");
            socket.off()
        }
         
    }, [])


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
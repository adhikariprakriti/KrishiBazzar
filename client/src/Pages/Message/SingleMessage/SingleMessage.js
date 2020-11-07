import React from 'react';
import './SingleMessage.css'
import Toolbar from '../../../Dashboard/Navbar/Toolbar/Toolbar'
import Aux from '../../../hoc/Auxilliary'
import Button from '../../../Components/Button/Button'


const SingleMessage=()=>{
    return(
        <Aux>
            <div className="bg">
                <Toolbar/>
                <div className="single_container">
                   <div className="message_header">
                       <h4>Bhawana Prasain</h4>
                   </div>
                   <div className="border"></div>
                   <div className="message_content">
                       <ul>
                           <li id="sender">
                               <div className="sender">
                                   Hey!This is Bhawana.Many people say conversational UI is the future of web interface. Some might say it`s just another design fad or that text-based interfaces aren`t anything new with the advent of iPhone Messages, Slack or Facebook Messenger the way we exchange information changed irreversibly. Text messages have became extremely natural way of communicating these days. So in this post we`ve gathered 40 Inspiring Chat UI Designs for inspiration that you can use to further the design of chat UI elements to create great experiences with users.


                               </div>
                           </li>
                           <li id="receiver"> 
                               <div className="receiver">
                                    Hi Bhawana.its me prakriti
                               </div>
                          </li>
                          <li id="sender">
                               <div className="sender">
                                   Hey!This is Bhawana
                               </div>
                           </li>
                           <li id="receiver">
                               <div className="receiver">
                                    Hi Bhawana.its me prakriti
                               </div>
                          </li>
                       </ul>
                   </div>
                   <div className="message_footer">
                       <form method="POST" className="message_form">
                       <input name="message" type="text" placeholder="Type Message....." value="" required autoComplete="off"/>
                       <Button>Send</Button>
                       </form>
                    </div>
                </div>
                
            </div>
        </Aux>
               
    )
}

export default SingleMessage;
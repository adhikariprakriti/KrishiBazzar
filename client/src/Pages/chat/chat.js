import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import './chat.css';
import tomato from '../../Assets/Images/tomato.jpeg'
import Button from '../../Components/Button/Button'

const Chat=()=>{
    return(
        <Container fluid={true}>
        <Row>
          <Col sm={12} md lg={3} className="message_list">
              <h4 className="message_list_heading">Recent Messages</h4>
              <div className="message_item">
                 <div className="message_img">
                     <img src={tomato} alt="Profile" />                 
                 </div>
                     <div className="message_user">
                     <span className="username">Prakriti Adhikri</span>
                     <br/>
                     <span className="message_date">2:30 pm | nov 1</span>
                     </div>
             </div>


             <div className="message_item">
                 <div className="message_img">
                     <img src={tomato} alt="Profile" />                 
                 </div>
                     <div className="message_user">
                     <span className="username">Prakriti Adhikri</span>
                     <br/>
                     <span className="message_date">2:30 pm | nov 1</span>
                     </div>
             </div>

             <div className="message_item">
                 <div className="message_img">
                     <img src={tomato} alt="Profile" />                 
                 </div>
                     <div className="message_user">
                     <span className="username">Prakriti Adhikri</span>
                     <br/>
                     <span className="message_date">2:30 pm | nov 1</span>
                     </div>
             </div>
          </Col>
          <Col sm={12} md lg={9} className="message">
             
          <div class="chat__main">
             
            <ul id="messages" class="chat__messages">   
            </ul>

            <div class="chat__footer">
               <form method="POST" class="message-form">
                 <input name="message" type="text" placeholder="Type Message....." value="" required autocomplete="off"/>
                 <Button>Send</Button>
              </form>
            </div>   
          </div>
          </Col>
        </Row>
        </Container>
    )
}

export default Chat;
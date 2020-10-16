import React from 'react'
import './Reviews.css';
import tomato from '../../Assets/Images/tomato.jpeg';

const Reviews=()=>{
      return (
                <div className="reviews">
                     <h2>Reviews</h2>
                     <hr/>
                     <div className="review__content">
                        <div>
                           <img src={tomato} alt="user" style={{height:"60px",width:"60px",borderRadius:"50%",marginRight:"20px"}}/>
                        </div> 
                        <div className="review__info">
                          <p className="review__writer">Rabindranath Taegor</p>
                          <p className="time">4 days ago</p>
                          <p className="review__description">This is a very interesting Product and I really Loved it.
                          Oh my god!!Yesterday I saw a tiger.It was behind me.I was really sacared.
                          djcnflkvnadflknbalgkbnglnglk.wckbdkvjbfjkvbfjkdklnlkgbnlkngf
                          </p>
                       </div>
                     </div>
                </div>

    )
}

export default Reviews

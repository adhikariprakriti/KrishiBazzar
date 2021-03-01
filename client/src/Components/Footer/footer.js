import React from "react"
import {Link} from "react-router-dom"
import { GoLocation } from "react-icons/go"
import { FiPhone } from "react-icons/fi"
import { AiFillLinkedin } from "react-icons/ai"
import { AiOutlineMail } from "react-icons/ai"
import { AiFillTwitterSquare } from "react-icons/ai"
import { AiFillFacebook } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import { AiFillRedditSquare } from "react-icons/ai"
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <section className="grid-container container">
        <div className="item3">
        <div>
        <p className="footer_title">CONTACT US:</p>
          <ul>
            <li className="li_list">
              <GoLocation className="abouticons" /> Lamachaur, Pokhara, Nepal
            </li>
            <li className="li_list">
              <FiPhone className="abouticons" /> +91844727837
            </li>
            <li className="li_list">
              <AiOutlineMail className="abouticons" /> hello@KrishiBazzar.in
            </li>
          </ul>
          </div>
        </div>
        <div className="item4">
          <p className="footer_title">FOLLOW US:</p>
          <div className="icons">
            <a
              href="https://www.facebook.com/shushkengineeringllp"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook className="social_icons" />
            </a>
            <a href="https://twitter.com/ShushkEngineer" target="_blank" rel="noreferrer">
              <AiFillTwitterSquare className="social_icons" />
            </a>
            <a
              href="https://www.linkedin.com/company/shushk-engineering-llp"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="social_icons" />
            </a>
            <a
              href="https://www.instagram.com/shushkengineeringllp/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram className="social_icons" />
            </a>
            <a href="https://www.reddit.com/user/shushk" target="_blank" rel="noreferrer">
              <AiFillRedditSquare className="social_icons" />
            </a>
          </div>
        </div>
      </section>
      <hr className="line"></hr>
      <div className="copyright container">
        Copyright © 2021 KrishiBazzar. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
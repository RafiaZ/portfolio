import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaSkype } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub  } from 'react-icons/fa';

import "../header/Square.css";
import './Footer.css'

function Footer() {
    return (
      <div className="footer-container">
        <div className="half-circle"> Up </div>
        <div className="square-icons">
          <div className="icon-circle">
             <FaFacebookF/>
          </div>
          <div className="icon-circle">
            <FaTwitter/>
          </div>
          <div className="icon-circle">
            <FaSkype/>
          </div>
          <div className="icon-circle">
          <FaLinkedinIn/>
          </div>
          <div className="icon-circle">
            <FaGithub/>
          </div>
          <div>add a circle</div>
     </div>
     <div className="copyrights">&copy; Copyright 2021 Rafia. All rights reserved.</div>
        </div>
    )
}

export default Footer

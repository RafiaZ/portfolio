import React from "react";
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaSkype } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub  } from 'react-icons/fa';


import "./Square.css";

function Square() {
    
  return (
    <>
    <div className="flex-container">
      <div className="square">
        <div className="circle"></div>

        <h1 className="name">Rafia .Z</h1>

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
     </div>
    
      </div>

      </div>
    </>
  );
}

export default Square;

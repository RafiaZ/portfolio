import React from 'react'
import { FaBeer } from 'react-icons/fa';
import { FaBicycle } from 'react-icons/fa';
import { FaBookReader } from 'react-icons/fa';
import { FaGamepad } from 'react-icons/fa';
import { FaCamera } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';
import { FaPlane } from 'react-icons/fa';
import { FaPalette } from 'react-icons/fa';
import './About.css'

function About() {

    return (

        <div className="about-me" >

            <div className="about-me__content ">

             <div className="about-me_header ">
            <h1 className="header--header">About me</h1>
            </div> 

            <p className="about-me__paragraph">
            <span className="paragraph--bold">I'm Rafia .Z, a web developer enthusiast.</span> text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries,but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
            </p>

            <div className="about-me__sections">


             <div className="section--personal-details">
                 
             <div><h3>Personal Details</h3></div>
            <div className="details--list">
            <ul className="list-1">
                  <li>Date of Birth:    </li>
                  <li>Phone:</li>
                  <li>Email:</li>
                  <li>Website:</li>
                  <li>Job status:</li>
             </ul>

             <ul>
                  <li>12-38-45</li>
                  <li>052093038</li>
                  <li>rafiazafar75@gmail.com</li>
                  <li>www.example.com</li>
                  <li>none</li>
             </ul>
            </div>
           

             </div>

             <div className="section--my-interests">

             <div className="interest_header">
                 <h3>My Interests</h3>
            </div>
                    
            <div className="icons">

                    <div className="interests_icons">
                    <FaBeer />
                    Chai
                    </div>
                    <div className="interests_icons">
                        <FaBicycle/>
                        Bicycle
                    </div>
                    <div className="interests_icons">
                        <FaBookReader/>
                        Book Reader
                    </div>
                    <div className="interests_icons">
                        <FaGamepad/>
                        Games
                    </div>
                    <div className="interests_icons">
                        <FaCamera/>
                        Photography
                    </div>
                    <div className="interests_icons">
                        <FaCar/>
                        Car Racing
                    </div>
                    <div className="interests_icons">
                        <FaPlane/>
                        Traveling
                    </div>
                    <div className="interests_icons">
                        <FaPalette/>
                        Painting
                    </div>
            </div>
            <div>
              
                </div>          
             </div>

            </div>

            <div className="download_button">
            <button className="download_button-style">Download CV</button>
            </div>
              
            </div>
                
        </div>
    )
}

export default About

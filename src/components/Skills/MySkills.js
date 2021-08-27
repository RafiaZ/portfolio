import React from 'react'


import ProgressBar from 'react-bootstrap/ProgressBar'
import './MySkills.css';

function MySkills() {
    return (
        <div className="skills">

            <div className="skills__content">
            
            <div className="skills__header">
             <h1> Skills </h1>
            </div>

            <div className="skills__bars">

            <div className="skills__bars-left">
                 <ProgressBar now={60} /> 
            </div>

            <div className="skills__bars-right">
                 <ProgressBar now={60} /> 
            </div>
            </div>
           


            </div> 
        </div>
    )
}

export default MySkills

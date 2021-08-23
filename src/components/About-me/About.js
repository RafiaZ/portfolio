import React from 'react'

import './About.css'

function About() {
    return (
        <div className="about-me">

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

             </div>

             <div className="section--my-interests">

             </div>

            </div>
                
        </div>
    )
}

export default About

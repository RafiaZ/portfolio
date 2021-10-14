import React from 'react'


import './ContactMe.css'



function ContactMe() {
    return (
        <div className="contact-me-container">

            <div className="contact-me-heading">
               <h1 className="contact-me-heading__underline">
                   Contact me
               </h1>
            </div>

        <div className="form-map-container">

            <div className="contact-me__form">
               <form className="contact-me__form-inner">
                   <input className="name" placeholder="Your Name"/>
                   <input className="email" placeholder="Email"/>
                   <input className="Message" placeholder="Type Your Message Here!"/>
                   <input className="form-button" type="button" value="Send Message"/>
                   
               </form>
            </div>

            <div className="contact-me__map">
               <div className="contact-me__map-text">123 Lorem ipsum dolor sit amet elite</div>
               <div className="contact-me__map-text">Call us: 0123 456 7890</div>
               <div className="contact-me__map-text">Email: cv@example.com</div>
               
            </div>
        </div>
            
        </div>
    )
}

export default ContactMe

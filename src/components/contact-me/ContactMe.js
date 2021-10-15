import React, {useState} from 'react'



import './ContactMe.css'



function ContactMe() {

    
    const [inputVal, setInputVal] = useState('')

 
    const handleName =() => {
        return(
            <div>{inputVal}</div>
        )

    }

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
                  <input className="nameC" placeholder="Your Name" value= {inputVal}  onChange={ (e) =>{setInputVal(e.target.value);}}/>
                   <input className="email" placeholder="Email"/>
                   <input className="Message" placeholder="Type Your Message Here!"/>
                   <button className="form-button"  onClick={handleName}> Send Message </button>
                   
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

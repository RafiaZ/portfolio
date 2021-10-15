import React, {useState} from 'react'



import './ContactMe.css'



function ContactMe() {

    
    const [inputVal, setInputVal] = useState('')
    const [inputEmail, setInputemail] = useState('')
    const [inputEtext, setInputEtext] = useState('')

 
    const handleInputs =() => {
      alert(inputVal + inputEmail + inputEtext)
     setInputVal("")
     setInputemail("")
     setInputEtext("")
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
                   <input className="email" placeholder="Email" value={inputEmail} onChange={(e)=>{setInputemail(e.target.value)}}/>
                   <input className="Message" placeholder="Type Your Message Here!" value= {inputEtext} onChange={(e)=>{setInputEtext(e.target.value)}}/>
                   <input className="form-button" onClick={handleInputs} value="Send Message" type="button" />
                   {/* <button className="form-button"  onClick={handleName}> Send Message </button> */}
                   
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

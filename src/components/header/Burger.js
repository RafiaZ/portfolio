import React, {useState} from 'react'

import Popup from './Popup';
import '../header/Burger.css'

function Burger(props) {

    const[togglePopup, setTogglePopup]= useState(false);

   const handleToggle = ()=>{
        setTogglePopup(!togglePopup);
    }
    return (
        <>
        {togglePopup && <Popup/>}
          <div className="burger" onClick={handleToggle}>
              <span className="dash"></span>
              <span className="dash"></span>
              <span className="dash"></span>
          </div>

        </>
    )
}

export default Burger


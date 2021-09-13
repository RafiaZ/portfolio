import React from 'react'
import './Recents.css'

function Recents() {
    return (
        <div className="recents__container">
            <div className="recents__header">
                <h1 className="recents__header-heading">Recent Portfolio</h1>
            </div>
            <div className="recents__list">

              <li> <a href="#" className="recents__list-item recents__list-active">All catagories</a></li>
              <li> <a href="#" className="recents__list-item recents__list-active">My Blog</a></li>
              <li> <a href="#" className="recents__list-item recents__list-active">Photography</a></li>
              <li> <a href="#" className="recents__list-item recents__list-active">Painting</a></li>
                
            </div>
            <div className="recents__grid">
                <div></div>
            </div>
        </div>
    )
}

export default Recents

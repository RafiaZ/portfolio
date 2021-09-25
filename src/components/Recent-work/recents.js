import React from 'react'
import './Recents.css'

function Recents() {
    return (
        <div className="recents__container">
            <div className="recents__header">
                <h1 className="recents__header-heading">Recent Portfolio</h1>
            </div>
            <div className="recents__list">

              <li className="recents__list-item"> <a href="#" className="recents__list-link">All catagories</a></li>
              <li className="recents__list-item"> <a href="#" className="recents__list-link">My Blog</a></li >
              <li className="recents__list-item"> <a href="#" className="recents__list-link">Photography</a></li >
              <li className="recents__list-item"> <a href="#" className="recents__list-link">Painting</a></li>
                
            </div>
            <div className="recents__grid">
                
                <div>
                    <img src="recents-img/r-img-1.jpg" alt="recents image 1"/>
                </div>

                <div>
                    <img src="recents-img/r-img-1.jpg" alt="recents image 1"/>
                </div>
                <div>
                    <img src="recents-img/r-img-1.jpg" alt="recents image 1"/>
                </div>
                <div>
                    <img src="recents-img/r-img-1.jpg" alt="recents image 1"/>
                </div>
                <div>
                    <img src="recents-img/r-img-1.jpg" alt="recents image 1"/>
                </div>

                
            </div>
        </div>
    )
}

export default Recents

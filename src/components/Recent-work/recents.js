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
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                
            </div>
        </div>
    )
}

export default Recents

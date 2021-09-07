import React from 'react'

import './Resume.css'

function Resume() {
    return (
        <div className="resume-container">
            <div className="resume-container-inner">
                
              <div className="resume-header">
                  <h1 className="resume-header-underline">My Experiene</h1>
              </div>

              <div className="experience-cards">
                  <div className="card">
                      <div className="card-heading">
                          <h3> Experiene no 1</h3>
                      </div>
                      <p>Here I worked</p>
                      <p>2002-2004</p>
                  </div>


                  <div className="card">
                  <div className="card-heading">
                          <h3> Experiene no 1</h3>
                      </div>
                      <p>Here I worked</p>
                      <p>2002-2004</p>
                  </div>
              </div>

            </div>
        </div>
    )
}

export default Resume

import React from 'react'

import './Resume.css'

function Resume() {
    return (
        <div className="resume-container">
            <div className="resume-container-inner">
                
              <div className="resume-header">
                  <h1 className="resume-header-underline">My Experience</h1>
              </div>

              <div className="experience-cards">
                  <div className="card">
                      <div className="card-heading">
                          <h3> Database Administration and Web development</h3>
                      </div>
                      <p>eLearning Dancom, Blue Are, Islamabad</p>
                      <p>June,2019 - September,2019</p>
                  </div>


                  <div className="card">
                  <div className="card-heading">
                          <h3>Graphics Designer</h3>
                      </div>
                      <p>ELOGIC Solutions, National Information Technology Board, H-9/1 Islamabad</p>
                      <p>July,2018 - September,2018</p>
                  </div>
              </div>

            </div>
        </div>
    )
}

export default Resume

import React from 'react'


import ProgressBar from 'react-bootstrap/ProgressBar'
import {Data} from './SkillsData';
import {DataRight} from './SkillsDataRt';
import './MySkills.css';

function MySkills(props) {

    const Pitems = Data.map(items =>
        <div >
            <ProgressBar key={items.id} now={items.percentage} />
            <h3>{items.label}</h3>
        </div> 
         
       )


        const Pright = DataRight.map(item =>{
        <div>
                <ProgressBar key={item.id} now={item.per} />
             <h3>{item.lab}</h3>
            </div>
       })

    return (
        <div className="skills">

            <div className="containers skills-content">

            <div className="skills_header ">
            <h1 className="skills_header-underline">Skills</h1>
            </div> 

            <div className="skills_bars_section">
                <div className="section_left">
                     {Pitems}
                    
                </div>
                <div className="section_right">
               {Pright}
                </div>
            </div>

            </div>
        </div>
    )
}

export default MySkills


{/* <div className="skills__content">
            
            <div className="skills__header">
             <h1 className="skills__header-heading"> Skills </h1>
            </div>

            <div className="skills__bars">

            <div className="skills__bars-left">
                 <ProgressBar now={60} /> 
            </div>

            <div className="skills__bars-right">
                 <ProgressBar now={60} /> 
            </div>
            </div>
           


            </div>  */}

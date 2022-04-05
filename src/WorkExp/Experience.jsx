import React from 'react'
import EduMap from './EduMap'
import './Experience.scss'

function Experience () {
  return (
    <div className='work-container wrapper' id='experience'>
      <div>
        <h1>Work Experience</h1>
        <p className='instruction'>Click the map to see my educational background. Click anywhere outside to close it.</p>
        <EduMap/>
      </div>
        <div className='work-experience-list'>
        <div className='work-experience-item'>
            <h2 className='date'>08/19 – Currently</h2>
            <h2 className='position'>Saudi Arabian Airlines: Executive Assistant to Regional Manager </h2>
            <p>- Main point of contact </p>
            <p>- Troubleshooting and problem solving</p>
            <p>- Writing and preparing infographics and reports</p>
            <p>- Processing invoices in SAP, petty cash custodian </p>
          </div> 
          <div className='work-experience-item'>
            <h2 className='date'>02 – 06/2019</h2>  
            <h2 className='position'>Wifirst UK: Marketing manager intern, London</h2>
            <p>- Creating, publishing and managing social media content </p>
            <p>- Planning and implementing promotional campaigns </p>
            <p>- Analysing potential strategic partner relationships</p>
          </div>
          <div className='work-experience-item'>
            <h2 className='date'>04/2017 –  08/2018</h2>  
            <h2 className='position'>International Relations Office, University of Sarajevo: Intern</h2> 
            <p>- Preparing brochures, infographics, reports and managing and publishing online content</p>
            <p>- Researching information on visits, cooperation initiatives and agreements </p>
            <p>- Organising various events for international staff and students</p>
          </div>
        </div>

        
    </div>
  )
}

export default Experience
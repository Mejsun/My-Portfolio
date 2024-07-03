import React from 'react'
// import EduMap from './EduMap'
import './Experience.scss'

function Experience () {
  return (
    <div className='work-container wrapper' id='experience'>
      <div>
        <h1>Work Experience</h1>
        {/* <p className='instruction'>Click the map to see my educational background. Click anywhere outside to close it.</p>
        <EduMap/> */}
      </div>
        <div className='work-experience-list'>

          <div className='work-experience-item'>
            <h2>07/22 – Currently</h2>
            <h2>5App: Frontend developer </h2>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
            </ul>
          </div> 

          <div className='work-experience-item'>
            <h2>Other work experience</h2>
            <p>Previous roles included various responsibilities, such as:</p>
            <ul>
              <li>Creating, publishing and managing social media content </li>
              <li>Preparing and writing brochures, infographics, reports and managing and publishing online content</li>
              <li>Planning and implementing promotional campaigns </li>
              <li>Analysing potential strategic partner relationships</li>
              <li>Main point of contact between different teams as an assistant to regional manager for an airline</li>
              <li>Researching information on international visits, cooperation initiatives and agreements </li>
              <li>Organising various events for international staff and students</li>
            </ul>
          </div> 
        </div>
    </div>
  )
}

export default Experience
import React from 'react'
import './Experience.scss'

function Experience () {
  return (
    <div className='work-container wrapper' id='experience'>
        <h1>Work Experience</h1>
        <div className='work-experience-list'>

          <div className='work-experience-item'>
            <h2>07/22 – Currently</h2>
            <h2>5App: Frontend developer </h2>
            <ul>
              <li>Key team member covering both frontend and backend tickets</li>
              <li>Created new complex features written in React with Typescript</li>
              <li>Regularly written unit tests for APIs</li>
              <li>Improved frontend test coverage using Cypress which resulted in less bugs and lowered regressions</li>
              <li>Handled custom API for generating SQL</li>
              <li>Refactored React class based components to functional components</li>
              <li>Refactored frontend components to Typescript </li>
              <li>Introduced Zapier automation</li>
              <li>Contributed to writing documentation using Docusaurus</li>
              <li>Tech stack: React, Typescript, Cypress, Jest, Storybook, Figma, Node, MySQL</li>
            </ul>
          </div> 

          <div className='work-experience-item'>
            <h2>Other work experience</h2>
            <p>My previous roles included various responsibilities, such as:</p>
            <ul>
              <li>Creating, publishing and managing social media content </li>
              <li>Preparing and writing brochures, infographics and reports </li>
              <li>Managing and publishing online content</li>
              <li>Planning and implementing promotional campaigns </li>
              <li>Analysing potential strategic partner relationships</li>
              <li>Main point of contact between different teams</li>
              <li>Organising various events for international staff and students</li>
            </ul>
          </div> 
        </div>
    </div>
  )
}

export default Experience
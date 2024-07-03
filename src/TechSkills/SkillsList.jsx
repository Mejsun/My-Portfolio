import React from 'react'
import './Skills.scss'
// import Certificates from './Certificates';

let skillsList = [
  {name: 'HTML', icon: 'html'},
  {name: 'CSS', icon: 'css'},
  {name: 'JavaScript', icon: 'js'},

  {name: 'React', icon: 'react'},
  {name: 'Next.js', icon: 'nextjs'},
  {name: 'Typescript', icon: 'ts'},

  {name: 'Cypress', icon: 'cypress'},

  {name: 'Sass', icon: 'sass'},
  {name: 'Styled Components', icon: 'styled'},
  {name: 'Tailwind', icon: 'tailwind'},
  {name: 'Bootstrap', icon: 'bootstrap'},

  {name: 'Storybook', icon: 'storybook'},
  {name: 'Figma', icon: 'figma'},
  {name: 'Inkscape', icon: 'inkscape'},
  {name: 'Adobe XD', icon: 'adobexd'},
  {name: 'Canva', icon: 'canva'},

  // {name: 'jQuery', icon: 'jquery'},
  // {name: 'JSON', icon: 'json'},

  {name: 'MySql', icon: 'mysql'},
  {name: 'MongoDB', icon: 'mongodb'},

  {name: 'Node.js', icon: 'nodejs'},
  {name: 'APIs', icon: 'api'},

  {name: 'Github', icon: 'github'},
  // {name: 'Wordpress', icon: 'wordpress'},
  {name: 'Zapier', icon: 'zapier'},
]

function SkillsList() {
  return (
    <div className='wrapper' id='skills'>
      <div>
        <h1>Technical Skills</h1>
        <div className='skills'>
        {skillsList.map((skill) => (
          <div key={Math.random()}><img src= {require('../static/Icons/' + skill.icon + '.avif')} alt='icon'/>{skill.name}</div>
        ))}
        </div>
      </div>
      {/* <Certificates/> */}
    </div>
  )
}

export default SkillsList
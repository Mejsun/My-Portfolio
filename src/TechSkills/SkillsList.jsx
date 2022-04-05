import React from 'react'
import './Skills.scss'
import Certificates from './Certificates';

let skillsList = [
  {name: 'HTML', icon: 'html5'},
  {name: 'CSS', icon: 'css'},
  {name: 'JavaScript', icon: 'js'},
  {name: 'React', icon: 'react'},
  {name: 'Sass', icon: 'sass'},
  {name: 'Bootstrap', icon: 'bootstrap'},
  {name: 'APIs', icon: 'api'},
  {name: 'Github', icon: 'github'},
  {name: 'Styled Components', icon: 'styled'},
  {name: 'Inkscape', icon: 'inkscape'},
  {name: 'jQuery', icon: 'jquery'},
  {name: 'MongoDB', icon: 'mongodb'},
  {name: 'Node.js', icon: 'nodejs'},
  {name: 'Canva', icon: 'canva'},
  {name: 'Wordpress', icon: 'wordpress'},
  {name: 'Adobe XD', icon: 'adobexd'},
  {name: 'JSON', icon: 'json'},
  {name: 'Redux', icon: 'redux'},
]

function SkillsList() {
  return (
    <div className='wrapper' id='skills'>
      <div>
        <h1>Technical Skills</h1>
        <div className='skills'>
        {skillsList.map((skill) => (
          <div><img src= {require('../static/Icons/' + skill.icon + '.avif')} alt='icon'/>{skill.name}</div>
        ))}
        </div>
      </div>
      <Certificates/>
    </div>
  )
}

export default SkillsList
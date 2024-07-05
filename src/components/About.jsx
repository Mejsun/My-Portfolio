import React from 'react'
import body from '../static/Images/body.avif'
import hand from '../static/Images/hand.avif'
import '../styles/About.scss'
import SkillsList from './SkillsList'

function About() {
  return (
    <div className='profile-container wrapper' id='about'>
      <div>
      <div className='my-image-waving'>
        <img src={body} alt='body' className='body-static'/>
        <img src={hand} alt='hand' className='hand-waving'/>
      </div>
        <h1>Mejsun Alghoul</h1> 
        <h2>Frontend developer</h2> 
        <div className='contact-grid'>
            <a className='contact-info' href='https://github.com/Mejsun' target='_blank' rel='noreferrer'><i className="fa-brands fa-github-square fa-fw"></i>Github</a>
            <a className='contact-info' href='https://www.linkedin.com/in/mejsun' target='_blank' rel='noreferrer'><i className="fa-brands fa-linkedin fa-fw"></i>Linkedin</a>
            <a className='contact-info' href="https://drive.google.com/file/d/1y6Nzgrt5foN07l8xIITuyjeo6INKej-W/view?usp=sharing" target='_blank' rel='noreferrer'><i className="fa-solid fa-file-lines fa-fw"></i>CV</a>
        </div>
      </div>
      <SkillsList />
    </div>
  )
}

export default About
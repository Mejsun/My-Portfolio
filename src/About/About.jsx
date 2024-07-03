import React from 'react'
import body from '../static/Images/body.avif'
import hand from '../static/Images/hand.avif'
import './About.scss'

function About() {
  return (
    <div className='profile-container wrapper' id='about'>
    {/* <div> */}
      <div className='my-image-waving'>
        <img src={body} alt='body' className='body-static'/>
        <img src={hand} alt='hand' className='hand-waving'/>
      </div>
      <div>
        <h1>Mejsun Alghoul</h1> 
        <h2>Frontend developer</h2> 
        <div className='contact-grid'>
            <a className='contact-info' href='https://github.com/Mejsun' target='_blank' rel='noreferrer'><i className="fa-brands fa-github-square fa-fw"></i>Github</a>
            <a className='contact-info' href='https://www.linkedin.com/in/mejsun' target='_blank' rel='noreferrer'><i className="fa-brands fa-linkedin fa-fw"></i>Linkedin</a>
            <a className='contact-info' href="https://drive.google.com/file/d/1FpzXBhH6P_HgnRImQeKlROXv-lbnzVI_/view?usp=sharing" target='_blank' rel='noreferrer'><i className="fa-solid fa-file-lines fa-fw"></i>CV</a>
        </div>
      </div>
    {/* </div> */}
    {/* <div className='about-container'>
      <h2>About me</h2>
      <p>
      I am a self-taught frontend developer, who loves problem solving, researching, and using my creativity to build web applications. 
      I strive to work with attention to detail in mind.
      Through my working experience, I have gained transferable skills, and am able to work both independently and as a part of a team, with a motivated, 
      self-reliant attitude towards work. 
      </p>
    </div> */}
    </div>
  )
}

export default About
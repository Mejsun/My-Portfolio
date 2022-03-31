import React from 'react'

function About() {
  return (
    <div className='about-container wrapper' id='about'>
    <div>
      <h1>Mejsun Alghoul</h1> 
      <h2>Junior Front end developer</h2> 
      <div className='contact-grid'>
          <a className='contact-info' href='https://github.com/Mejsun' target='_blank' rel='noreferrer'><i class="fa-brands fa-github-square fa-fw"></i>Github</a>
          <a className='contact-info' href='https://www.linkedin.com/in/mejsun-al-ghoul/' target='_blank' rel='noreferrer'><i class="fa-brands fa-linkedin fa-fw"></i>Linkedin</a>
          <a className='contact-info' href="https://drive.google.com/file/d/1IX0W6sD9LlnYNg7Y5WodMRyLt4X7SuBL/view?usp=sharing" target='_blank' rel='noreferrer'><i class="fa-solid fa-file-lines fa-fw"></i>CV</a>
      </div>
    </div>
    <div>
      <h2>About me</h2>
      <p>
      I am a self-taught junior Front-End developer.
      I love problem solving, researching, and using my creativity to build web applications. 
      I strive to work with attention to detail in mind.
      I have many transferable skills working independently and as part of a team, and have a motivated, 
      self-reliant attitude towards work. 
      </p>
    </div>
    </div>
  )
}

export default About
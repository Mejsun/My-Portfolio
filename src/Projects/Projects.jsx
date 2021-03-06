import React from 'react'
import Slider from 'react-slick'
import './Projects.scss'

function Projects() {

let projectsList = [
  {name: 'Mementos', tech: 'React, API’s, Bootstrap, Sass', 
  bgr: 'memento', link: 'https://mymementos.netlify.app/'},
  {name: 'Calculator', tech: 'HTML, CSS, JavaScript', 
  bgr: 'calc', link: 'https://calculatingaway.netlify.app/'},
  {name: 'URL Shortener', tech: 'JavaAcript, Node.js, MongoDB, Express', 
  bgr: 'underconstr', link: 'https://github.com/Mejsun/urlShortener'},
  {name: 'Pokedex', tech: 'HTML, CSS, JavaScript, API', 
  bgr: 'Pokedex', link: 'https://mejsunspokedex.netlify.app/'},
  {name: 'Language Shake', tech: 'HTML, CSS, JavaScript', 
  bgr: 'Lang', link: 'https://languageshake.netlify.app/'},
  {name: 'SkyNews', tech: 'HTML, CSS', 
  bgr:'skynews', link: 'https://skynewsremake.netlify.app/'},
  {name: 'Nodemailer', tech: 'Node.js, Express',
  bgr:'underconstr', link:'https://github.com/Mejsun/nodemailer'},
  {name: 'To do list', tech: 'React, Sass',
  bgr:'todo',  link: 'https://mytodosonweb.netlify.app/'}
]

const settings = {
  dots: false,
  infinite: true,
  //centerMode: true,
  //centerPadding: '100px',
  slidesToShow: 1,
};

  return (
    <div className='container-projects wrapper' id='projects'>
    <h1>Projects</h1>
    <p> Please see more projects on my <a href='https://codepen.io/mejsun' target='_blank' rel='noreferrer'>Codepen</a></p>
    <div className='projects-slider'>
    <Slider {...settings}>
          {projectsList.map((project) => (
      <div className='projects-cell' key={Math.random()}>
        <img src={require('../static/Images/' + project.bgr + '.avif')} alt='screenshot'/>
        <div className='project-text'>
          <a className='heading2' href={project.link} target='_blank' rel='noreferrer'>{project.name}</a>
          <p> Tech used: {project.tech} </p>
        </div>
      </div>
      ))}
        </Slider>
      </div>
    </div>
  )
}

export default Projects
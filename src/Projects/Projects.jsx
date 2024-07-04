import React from 'react'
import Slider from 'react-slick'
import './Projects.scss'

function Projects() {

let projectsList = [
  {name: 'Pokedex', tech: 'HTML, CSS, JavaScript, API', 
  bgr: 'Pokedex', link: 'https://mejsunspokedex.netlify.app/'},
  {name: 'Mementos', tech: 'React, API’s, Bootstrap, Sass', 
  bgr: 'memento', link: 'https://mymementos.netlify.app/'},
  {name: 'Mementos - rebuilt', tech: 'Next.js, Typescript, Tailwind, MySQL', 
  bgr: 'underconstr', link: 'https://github.com/Mejsun/mementos'},
  {name: 'Calculator', tech: 'HTML, CSS, JavaScript', 
  bgr: 'calc', link: 'https://calculatingaway.netlify.app/'},
  {name: 'Language Shake', tech: 'HTML, CSS, JavaScript', 
  bgr: 'Lang', link: 'https://languageshake.netlify.app/'},
  {name: 'SkyNews', tech: 'HTML, CSS', 
  bgr:'skynews', link: 'https://skynewsremake.netlify.app/'},
  {name: 'To do list', tech: 'React, Sass',
  bgr:'todo',  link: 'https://mytodosonweb.netlify.app/'},
  {name: 'URL Shortener', tech: 'JavaAcript, Node.js, MongoDB, Express', 
  bgr: 'underconstr', link: 'https://github.com/Mejsun/urlShortener'},
  {name: 'Nodemailer', tech: 'Node.js, Express',
  bgr:'underconstr', link:'https://github.com/Mejsun/nodemailer'},

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
      <div className='projects-slider'>
        <Slider {...settings}>
          {projectsList.map((project) => (
            <div key={Math.random()}>
              <img src={require('../static/Images/' + project.bgr + '.avif')} alt='project screenshot'/>
              <div className='project-text'>
                <a className='subheading' href={project.link} target='_blank' rel='noreferrer'>{project.name}</a>
                <p> Tech used: {project.tech} </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <p> To see more projects, have a look at my 
          <a href='https://codepen.io/mejsun' target='_blank' rel='noreferrer'>Codepen</a>.
      </p>
    </div>
  )
}

export default Projects
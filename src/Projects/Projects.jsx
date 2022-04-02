import React from 'react'
import Slider from 'react-slick'

function Projects() {

let projectsList = [
  {id: 1, name: 'Wishlist', tech: 'React, API’s, React Hooks, Bootstrap, Sass', 
  bgr: 'underconstr', link: 'https://github.com/Mejsun/wishlist'},
  {id: 2, name: 'Calculator', tech: 'React, API’s, React Hooks, Bootstrap, Sass', 
  bgr: 'calc', link: 'https://github.com/Mejsun/wishlist'},
  {id: 3, name: 'URL Shortener', tech: 'React, API’s, React Hooks, Bootstrap, Sass', 
  bgr: 'underconstr', link: 'https://github.com/Mejsun/wishlist'},
  {id: 4, name: 'Pokedex', tech: 'React, API’s, React Hooks, Bootstrap, Sass', 
  bgr: 'Pokedex', link: 'https://github.com/Mejsun/wishlist'},
  {id: 5, name: 'Language Shake', tech: 'React, API’s, React Hooks, Bootstrap, Sass', 
  bgr: 'Lang', link: 'https://github.com/Mejsun/wishlist'},
  {id: 6, name: 'SkyNews', tech: 'React, API’s, React Hooks, Bootstrap, Sass', 
  bgr:'skynews', link: 'https://github.com/Mejsun/wishlist'},
]

const settings = {
  dots: false,
  infinite: true,
  centerMode: true,
  centerPadding: '100px',
  slidesToShow: 1,
};

  return (
    <div className='container-projects wrapper' id='projects'>
    <h1>Projects</h1>
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
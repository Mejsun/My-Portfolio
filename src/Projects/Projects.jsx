import React from 'react'

function Projects() {

const projectsList = [
  {name: 'Wishlist', tech: 'React, API’s, React Hooks, Bootstrap, Sass', 
  bgr: 'underconstr', link: 'https://github.com/Mejsun/wishlist'},
  {name: 'Calculator', tech: 'React, API’s, React Hooks, Bootstrap, Sass', 
  bgr: 'calc', link: 'https://github.com/Mejsun/wishlist'},
  {name: 'URL Shortener', tech: 'React, API’s, React Hooks, Bootstrap, Sass', 
  bgr: 'underconstr', link: 'https://github.com/Mejsun/wishlist'},
  {name: 'Pokedex', tech: 'React, API’s, React Hooks, Bootstrap, Sass', 
  bgr: 'Pokedex', link: 'https://github.com/Mejsun/wishlist'},
  {name: 'Language Shake', tech: 'React, API’s, React Hooks, Bootstrap, Sass', 
  bgr: 'skynews', link: 'https://github.com/Mejsun/wishlist'},
  {name: 'SkyNews', tech: 'React, API’s, React Hooks, Bootstrap, Sass', 
  bgr:'Lang', link: 'https://github.com/Mejsun/wishlist'},
]


function next() {
  console.log('next')
}
function prev() {
  //projectIndex--
  console.log('prev')
}

  return (
    <div className='wrapper'>
    <h1>Projects</h1>
      <div className='projects' >
      {projectsList.map((project, index) => (
          <div className='projects-cell' key={index}>
            <img src={require('../static/Images/' + project.bgr + '.png')} alt='screenshot'/>
            <div className='projectText'>
              <a className='heading2' href={project.link} target='_blank' rel='noreferrer'>{project.name}</a>
              <p> Tech used: {project.tech} </p>
            </div>
          </div>
      ))}
      </div>
    <button className='prev' onClick={prev}><i className='fas fa-angle-left'></i> </button>
    <button className='next' onClick={next}><i className='fas fa-angle-right'></i> </button>
    </div>
  )
}

export default Projects
import React from 'react'
import lang from '../static/Images/Lang.png'
import calc from '../static/Images/calc.png'
import pokedex from '../static/Images/Pokedex.png'
import skynews from '../static/Images/skynews.png'
import underconstr from '../static/Images/underconstr.png'

function Projects() {
  return (
    <div>
    <h1>Projects</h1>
    <div>
    <div>
        <img src={underconstr} alt='memento'/>
        <div>
          <h2 href='https://github.com/Mejsun/wishlist'>Wishlist</h2>
          <p> Tech used: React, API’s, React Hooks, Bootstrap, Sass</p>
          <p> Changes pending:</p>
          <p>- Adding sign up / log in functionality</p> 
        </div>
      </div>
     
      <div>
      <img src={calc} alt='calculate'/>
        <div>
          <h2 href='https://calculatingaway.netlify.app/' target='_blank'>Calculator</h2>
          <p>Tech used: HTML, CSS, Javascript</p>
        </div>
      </div>
      
      <div>
        <img src={underconstr} alt='under construction'/>
        <div>
          <h2 href='https://github.com/Mejsun/urlShortener' target='_blank'>URL shortener</h2>
          <p>Tech used: JavaScript, MongoDB, ExpressJS</p>
          <p> Changes pending:</p>
          <p> - Create the front-end side of application</p>
        </div>
      </div>
      
      <div>
        <img src={pokedex} alt='pokedex'/>
        <div>
          <h2 href='https://mejsunspokedex.netlify.app/' target='_blank'>Pokedex</h2>
          <p>Tech used: HTML, CSS, JavaScript, API’s </p>
        </div>
      </div>
      
      <div>
        <img src={lang} alt='language shake'/>
        <div>
          <h2 href='https://languageshake.netlify.app/' target='_blank'>Language shake</h2>
          <p>Tech used: HTML, CSS, JavaScript</p>
        </div>
      </div>
      
      <div>
        <img src={skynews} alt='skynews'/>
        <div>
          <h2 href='https://skynewsremake.netlify.app/' target='_blank'>Sky News remake</h2>
          <p>Tech used: HTML, CSS </p>
         </div>
      </div>
    </div>
    </div>
  )
}

export default Projects
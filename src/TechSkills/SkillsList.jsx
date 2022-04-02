import React from 'react'
import '../App.scss';
import api from '../static/Icons/api.avif'
import css from '../static/Icons/css.avif'
import github from '../static/Icons/github.avif'
import html from '../static/Icons/html5.avif'
import inkscape from '../static/Icons/inkscape.avif'
import jquery from '../static/Icons/jquery.avif'
import js from '../static/Icons/js.avif'
import json from '../static/Icons/json.avif'
import mongodb from '../static/Icons/mongodb.avif'
import nodejs from '../static/Icons/nodejs.avif'
import react from '../static/Icons/react.avif'
import redux from '../static/Icons/redux.avif'
import sass from '../static/Icons/sass.avif'
import styledcomps from '../static/Icons/styled.avif'
import wordpress from '../static/Icons/wordpress.avif'
import adobexd from '../static/Icons/adobexd.avif'
import bootstraplogo from '../static/Icons/bootstrap.avif'
import canva from '../static/Icons/canva.avif'
import Certificates from './Certificates';

function SkillsList() {
  return (
    <div className='wrapper' id='skills'>
      <div>
        <h1>Technical Skills</h1>
        <div className='skills'>
          <div><img src= {html} alt='html'/>HTML</div>
          <div><img src= {css} alt='css'/>CSS</div>
          <div><img src= {js} alt='js'/>JavaScript</div>
          <div><img src= {react} alt='react'/>React</div>
          <div><img src= {bootstraplogo} alt='js'/>Bootstrap</div>
          <div><img src= {sass} alt='sass'/>Sass</div>
          <div><img src= {github} alt='github'/>Github</div>
          <div><img src= {api} alt='api'/>API's</div>
          <div><img src= {styledcomps} alt='styled components'/>Styled Components</div>
          <div><img src= {nodejs} alt='nodejs'/>Node.js</div>
          <div><img src= {adobexd} alt='js'/>Adobe XD</div>
          <div><img src= {inkscape} alt='inkscape'/>Inkscape</div>
          <div><img src= {canva} alt='js'/>Canva</div>
          <div><img src= {jquery} alt='jQuery'/>jQuery</div>
          <div><img src= {json} alt='json'/>JSON</div>
          <div><img src= {mongodb} alt='mongodb'/>MongoDB</div>
          <div><img src= {wordpress} alt='wordpress'/>Wordpress</div>
          <div hidden><img src= {redux} alt='redux'/>Redux</div>
        </div>
      </div>
      <Certificates/>
    </div>
  )
}

export default SkillsList
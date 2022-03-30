import React from 'react'
import '../App.scss';
import api from '../static/Icons/api.png'
import css from '../static/Icons/css.png'
import github from '../static/Icons/github.png'
import html from '../static/Icons/html5.png'
import inkscape from '../static/Icons/inkscape.png'
import jquery from '../static/Icons/jquery.png'
import js from '../static/Icons/js.png'
import json from '../static/Icons/json.png'
import mongodb from '../static/Icons/mongodb.png'
import nodejs from '../static/Icons/nodejs.png'
import react from '../static/Icons/react.png'
import redux from '../static/Icons/redux.png'
import sass from '../static/Icons/sass.png'
import styledcomps from '../static/Icons/styled.png'
import wordpress from '../static/Icons/wordpress.png'
import adobexd from '../static/Icons/adobexd.png'
import bootstraplogo from '../static/Icons/bootstrap.png'
import canva from '../static/Icons/canva.png'
import Certificates from './Certificates';

function SkillsList() {
  return (
    <div className='wrapper'>
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
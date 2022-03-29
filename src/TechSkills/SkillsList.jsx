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
          <p><img src= {html} alt='html'/> <br/>HTML</p>
          <p><img src= {css} alt='css'/> <br/>CSS</p>
          <p><img src= {js} alt='js'/> <br/>JavaScript</p>
          <p><img src= {react} alt='react'/> <br/>React</p>
          <p><img src= {bootstraplogo} alt='js'/> <br/>Bootstrap</p>
          <p><img src= {sass} alt='sass'/> <br/>Sass</p>
          <p><img src= {github} alt='github'/><br/>Github</p>
          <p><img src= {api} alt='api'/><br/>API's</p>
          <p><img src= {styledcomps} alt='styled components'/> <br/> Styled Components</p>
          <p><img src= {nodejs} alt='nodejs'/><br/>Node.js</p>
          <p><img src= {adobexd} alt='js'/><br/>Adobe XD</p>
          <p><img src= {inkscape} alt='inkscape'/> <br/>Inkscape</p>
          <p><img src= {canva} alt='js'/><br/>Canva</p>
          <p><img src= {jquery} alt='jQuery'/> <br/> jQuery</p>
          <p><img src= {json} alt='json'/> <br/>JSON</p>
          <p><img src= {mongodb} alt='mongodb'/> <br/> MongoDB</p>
          <p><img src= {wordpress} alt='wordpress'/><br/>Wordpress</p>
          <p hidden><img src= {redux} alt='redux'/> <br/>Redux</p>
        </div>
      </div>
      <Certificates/>
    </div>
  )
}

export default SkillsList
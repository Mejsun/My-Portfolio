import React from 'react'

function About() {
  return (
    <div className='wrapper'>
    <h1>Mejsun Alghoul</h1> 
    <h3>Junior Front end developer</h3> 
    <div className='contact-grid'>
        <button className='contact-info'>Linkedin</button>
        <button className='contact-info'>Github</button>
        <button className='contact-info'>CV</button>
    </div>
    <div>
      <h3>About me</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Donec quam felis, ultricies nec, 
        pellentesque eu, pretium quis, sem. lla ut metus varius laoreet.
      </p>
    </div>
    </div>
  )
}

export default About
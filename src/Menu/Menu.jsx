import React, {useRef} from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  
  const ref = useRef(null)
  
  const toggleOpen = () => {
    if(ref.current.style.display === 'none'){
      ref.current.style.display = 'flex'
    }else {
      ref.current.style.display = 'none'
    }
  }

  return (
    <div className='menu-wrapper'>
    <button className='burger' onClick={toggleOpen}><i className="fa fa-bars"></i></button>
    <div className='menu-container' ref={ref}>
        <Link className='menu-item' to='/'><i className="fa-solid fa-user"></i>About</Link>
        <Link className='menu-item' to='projects'><i className="fa-solid fa-laptop-code"></i>Projects</Link>
        <Link className='menu-item' to='skills'><i className="fa-solid fa-user-gear"></i>Skills</Link>
        <Link className='menu-item' to='experience'><i className="fa-solid fa-briefcase"></i>Experience</Link>
        <Link className='menu-item' to='contact'><i className="fa-solid fa-envelope"></i>Contact</Link>
    </div>
    </div>
  )
}

export default Menu
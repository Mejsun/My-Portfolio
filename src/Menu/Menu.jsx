import React, {useRef} from 'react'
//import { Link } from 'react-router-dom'
import './Menu.scss'

function Menu() {
  
  const ref = useRef(null)
  
  const toggleOpen = () => {
    if(window.innerWidth < 500){
      if(ref.current.style.display === 'none'){
        ref.current.style.display = 'flex'
        console.log(window.innerWidth)
      }else {
        ref.current.style.display = 'none'
      }
    }else{
      ref.current.style.display = 'flex'
    }
  }

  return (
    <div className='menu-wrapper'>
    <button className='burger' onClick={toggleOpen}><i className="fa fa-bars"></i></button>
    <div className='menu-container' ref={ref}>
        <a href='#about' className='menu-item' to='/'><i className="fa-solid fa-user"></i>About</a>
        <a href='#projects' className='menu-item' to='projects'><i className="fa-solid fa-laptop-code"></i>Projects</a>
        <a href='#skills' className='menu-item' to='skills'><i className="fa-solid fa-user-gear"></i>Skills</a>
        <a href='#experience' className='menu-item' to='experience'><i className="fa-solid fa-briefcase"></i>Experience</a>
        <a href='#contact' className='menu-item' to='contact'><i className="fa-solid fa-envelope"></i>Contact</a>
    </div>
    </div>
  )
}

export default Menu
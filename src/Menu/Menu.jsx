import React, { useState, useEffect} from 'react'
import './Menu.scss'

function Menu() {
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
      const clickOutside = (e) =>{
        setOpenMenu(false)
      }
      document.addEventListener('click', clickOutside, true);
    return () => {
      document.removeEventListener('click', clickOutside, true)
    }
  })
  
  useEffect(() => {
      if(window.innerWidth > 500){
        setOpenMenu(true)
      }
    }, []
  )

  return (
    <div className='menu-wrapper'>
    <button className='burger' onClick={() => setOpenMenu(true)} aria-label='button'><i className="fa fa-bars"></i></button>
    {openMenu && (
      <div className='menu-container'>
          <a href='#about' className='menu-item' to='/'><i className="fa-solid fa-user"></i>About</a>
          <a href='#projects' className='menu-item' to='projects'><i className="fa-solid fa-laptop-code"></i>Projects</a>
          <a href='#experience' className='menu-item' to='experience'><i className="fa-solid fa-briefcase"></i>Experience</a>
          <a href='#contact' className='menu-item' to='contact'><i className="fa-solid fa-envelope"></i>Contact</a>
      </div>
      )}
    </div>
  )
}

export default Menu
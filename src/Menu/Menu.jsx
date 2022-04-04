import React, {useRef} from 'react'

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
        <a className='menu-item' href='#about'><i className="fa-solid fa-user"></i>About</a>
        <a className='menu-item' href='#projects'><i className="fa-solid fa-laptop-code"></i>Projects</a>
        <a className='menu-item' href='#skills'><i className="fa-solid fa-user-gear"></i>Skills</a>
        <a className='menu-item' href='#experience'><i className="fa-solid fa-briefcase"></i>Experience</a>
        <a className='menu-item' href='#contact'><i className="fa-solid fa-envelope"></i>Contact</a>
    </div>
    </div>
  )
}

export default Menu
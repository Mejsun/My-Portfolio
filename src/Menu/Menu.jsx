import React from 'react'

function Menu() {
  return (
    <div className='menu-container'>
        <a className='menu-item' href='#about'><i class="fa-solid fa-user"></i><br/>About</a>
        <a className='menu-item' href='#projects'><i class="fa-solid fa-laptop-code"></i><br/>Projects</a>
        <a className='menu-item' href='#skills'><i class="fa-solid fa-user-gear"></i><br/>Skills</a>
        <a className='menu-item' href='#experience'><i class="fa-solid fa-briefcase"></i><br/>Experience</a>
        <a className='menu-item' href='#contact'><i class="fa-solid fa-envelope"></i><br/>Contact</a>
    </div>
  )
}

export default Menu
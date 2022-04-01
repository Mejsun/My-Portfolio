import React, {useState, useEffect, useRef} from 'react'
import map from '../static/Images/map.png'

function EduMap() {
    const [open, setOpen] = useState(false);
    const ref = useRef(null)

    const toggleOpen = () => {setOpen(true)}
    const toggleClose = () => {setOpen(false)}

    useEffect(() => {
        const clickOutside = (e) =>{
            if(ref.current !== e.target){toggleClose()}}
        document.addEventListener('click', clickOutside, true);
      return () => {
        document.removeEventListener('click', clickOutside, true)
      }
    })

  return (
    <div>
        <button type='button' onClick={toggleOpen} >
        <img src={map} alt='europe map' className='map-img'></img>
        </button>    
        <div open={open} ref={ref}>
          <button onClick={toggleClose}><i className='fas fa-close'></i></button>
            <div>
            <h2>Uni1</h2>
            <h3>Uni2</h3>
            <p>Uni3</p>
            </div>
        </div>
    </div>
  )
}

export default EduMap
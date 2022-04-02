import React, { useEffect, useRef} from 'react'
import map from '../static/Images/map.avif'

function EduMap() {
    const ref = useRef(null)

    const toggleOpen = () => {
        ref.current.style.display = 'flex'
    }
    const toggleClose = () => {
        ref.current.style.display = 'none'
    }

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
        <button type='button' onClick={toggleOpen} className='button-box'>
        <img src={map} alt='europe map' className='map-img'></img>
        </button>    
        <div ref={ref} className='uni-box'>
            <h3>2018-2019: University of Westminster - Tourism MA</h3>
            <h3>2014-2018: Economics and Business, University of Sarajevo - BA Management</h3>
            <h3>2017-2018: University of Pavia - Erasmus student</h3>
        </div>
    </div>
  )
}

export default EduMap
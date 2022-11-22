import React from 'react'
import './Selecciones.css'


function Card({title, imageSource , dat, linkdat}) {
  return (
    <div className='cartas'>
      <div className='cardprincipaltor'>

        <img src={imageSource} alt='' className='Torimg'></img>
        <div className='card-body'>
          <h4 className='card-title'>{title}</h4>
          <p className='card-text text-secondary'>{dat}</p>
         
        </div>
        <br></br>
        <br></br>
      </div>
      
    </div>
  )
}

export default Card
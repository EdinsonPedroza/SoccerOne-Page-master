import React from 'react'
import Card from './cardSelec'
import './Selecciones.css'
import america from './img/america.png'
import europa from './img/europa.png'
import asia from './img/asia.png'

const card = [
  {
    id: 1,
    title: 'COLOMBIA',
    image: america, 
    dat: 'Una de las mejores selecciones de America.'

  },

  {
    id: 2,
    title: 'ALEMANIA',
    image: europa,
    dat: 'Una de las mejores selecciones de Europa'

  },
  {
    id: 3,
    title: 'COREA DEL SUR',
    image: asia,
    dat: 'Una de las mejores selecciones de Asia'

  }
]

function Cards() {
  return (
    <div className='contenedorligas'>
        {
          card.map(card =>(
            <div className='Ord-card' key={card.id}>
                <Card title = {card.title}  imageSource= {card.image}  dat= {card.dat}/>
              </div>
          ))
        }
      </div>
  )
}

export default Cards
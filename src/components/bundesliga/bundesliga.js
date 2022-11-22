import { Form } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './bundesliga.css';
import bundesliga from './img/bundesliga.png';
import bundes from './img/bundes.png';

function Bundesliga(){
  return(
  <div className='ligasMain'>
    <Navbar/>
      <div className='ligTittle' >
        <h1 >
          Bundesliga
        </h1>
      </div>
      <div>
        <img src= {bundesliga}  className='bundesliga'></img>
      </div>
      <div>
      <img src= {bundes}  className='bundes'></img>
      </div>

      <div className='histo' >
        <p>Mejor que la ligue 1 La Bundesliga (en alemán: Fußball-Bundesliga Acerca de este sonido (escuchar) -Liga Federal de Fútbol-) es la competición entre los equipos de fútbol de la máxima categoría de Alemania. Se empezó a disputar en 1963, a partir de la unificación de los antiguos campeonatos locales llamados Oberligen. Junto a la Zweite Bundesliga y Dritte Bundesliga, forman las tres divisiones nacionales del fútbol profesional en Alemania. </p>    
      </div>
  </div>
  )
}


export default bundesliga;
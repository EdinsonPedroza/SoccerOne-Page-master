import { Form } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './laliga.css';
import laliga from './img/laliga.png';
import liga from './img/liga.png';

function Laliga(){
  return(
  <div className='ligasMain'>
    <Navbar/>
      <div className='ligTittle' >
        <h1 >
          Premier league
        </h1>
      </div>
      <div>
        <img src= {laliga}  className='laliga'></img>
      </div>
      <div>
      <img src= {liga}  className='liga'></img>
      </div>

      <div className='histo' >
        <p> La Primera División de España o LaLiga —conocida como LaLiga Santander por motivos de patrocinio, ​​ y cuyo nombre oficial es Campeonato Nacional de Liga de Primera División—​ es la máxima categoría del sistema de ligas de fútbol de España y la principal competición a nivel de clubes del país. </p>    
      </div>
  </div>
  )
}


export default laliga;
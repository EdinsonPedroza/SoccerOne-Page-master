import { Form } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './euro.css';
import euro from './img/euro.png';
import europaleage from './img/europaleage.png';

function Euro(){
  return(
  <div className='ligasMain'>
    <Navbar/>
      <div className='ligTittle' >
        <h1 >
         Europa League
        </h1>
      </div>
      <div>
        <img src= {euro}  className='euro'></img>
      </div>
      <div>
      <img src= {europaleage}  className='europaleage'></img>
      </div>

      <div className='histo' >
        <p> La Liga de Campeones de la UEFA, también conocida como Copa de Europa, es el torneo internacional oficial de fútbol más prestigioso a nivel de clubes en Europa. </p>    
      </div>
  </div>
  )
}


export default Euro;
import { Form } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './champions.css';
import championsleage from './img/championsleage.png';
import champions from './img/champions.png';

function Champions(){
  return(
  <div className='ligasMain'>
    <Navbar/>
      <div className='ligTittle' >
        <h1 >
         Champions League
        </h1>
      </div>
      <div>
        <img src= {championsleage}  className='championsleage'></img>
      </div>
      <div>
      <img src= {champions}  className='champions'></img>
      </div>

      <div className='histo' >
        <p> La Liga de Campeones de la UEFA, también conocida como Copa de Europa, es el torneo internacional oficial de fútbol más prestigioso a nivel de clubes en Europa. </p>    
      </div>
  </div>
  )
}


export default Champions;
import { Form } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './conferenc.css';
import conferenceleage from './img/conferenceleage.png';
import conference from './img/conference.png';

function Conferenc(){
  return(
  <div className='ligasMain'>
    <Navbar/>
      <div className='ligTittle' >
        <h1 >
         Conference League
        </h1>
      </div>
      <div>
        <img src= {conferenceleage}  className='conferenceleage'></img>
      </div>
      <div>
      <img src= {conference}  className='conference'></img>
      </div>

      <div className='histo' >
        <p> La Liga de Campeones de la UEFA, también conocida como Copa de Europa, es el torneo internacional oficial de fútbol más prestigioso a nivel de clubes en Europa. </p>    
      </div>
  </div>
  )
}


export default Conferenc;
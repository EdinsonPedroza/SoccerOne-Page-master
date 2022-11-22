
import Navbar from '../Navbar/Navbar';
import './Selecciones.css'
import Cards from './cardsSelec';

function Selecciones(){
  return<body>
    <div className='SeleccionesMain'>
      <Navbar/>
      <h1 id='ligaTittle'>
        Selecciones
      </h1>
     
        <div>
          <Cards/>
        </div>      
    
    </div>

  </body>
}


export default Selecciones;
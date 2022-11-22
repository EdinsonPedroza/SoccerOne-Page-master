import React from "react";
import './Contactanos.css'
import Navbar from "../Navbar/Navbar";


function Contactanos(){
  return(
    <div className="contactanosMain">
      <Navbar/>
      <h1 className="contactanosT">CONTACTANOS</h1>
      <div className='guiaparrafo'>
      <p id='parrafo1'>Nosotros somos.</p>
      </div>
    </div>
  )
}

export default Contactanos
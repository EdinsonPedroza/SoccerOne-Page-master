import Navbar from '../Navbar/Navbar';
import './IniciarSesion.css'
import logo from '../soccerone3.svg';
import React from 'react';


function IniciarSesion(){
  return<div className='Login'>
    <div class='title'>
      <a href="/"><img src={logo} alt= "logo" className='logo'/>{} </a> 
    </div>
    <form >
      <label>
        <i class="fa-solid fa-user"></i>
        <input placeholder="usuario"type="text" id="usuario"></input>
      </label>
      <label>
        <i class="fa-solid fa-lock"></i>
        <input placeholder="contraseña" type="contraseña" id="contraseña"></input>
      </label>s
      <a href='#' class="link">¿Has olvidado tu contraseña?</a>
      <div >
        <a href='/Registro' class="link">Crear cuenta</a>  <a href='/' class="link">Cancelar</a>
      </div>
      <button id="button" >Iniciar sesion</button>
    </form>
  </div>
}


export default IniciarSesion;
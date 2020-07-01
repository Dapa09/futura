import React, { Component } from 'react'

import Logo from "../assets/futura-logo.svg";

export default class Footer extends Component {
    render() {
      return (
        <div id="nav">
            <img src={Logo} alt="Logotipo de Futura" />
            <div id="nav-prim">
                <a href="#">Asistencia Legal</a>
                <a href="#">Apoyo Psicológico</a>
                <a href="#">Agenda</a>
                <a href="#">Blog</a>
                <a href="#">Acerca de Futura</a>                
                <a href="#">Contacto</a>
            </div>
            <div id="search">
            <a href="#">Buscador</a>
            
            </div>
            
        </div>
      );
    }
  }
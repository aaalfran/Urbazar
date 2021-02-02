import React, { useState } from 'react';
import NavbarComponent from '../navBar/navbarComponent';
import CategoriaComponent from '../navBar/CategoriaComponent';
import { UncontrolledCarousel, Col } from 'reactstrap';
import '../../../css/MainComponent.css';
import "../../../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import {BrowserRouter as Router, Redirect} from 'react-router-dom';
import introJs from 'intro.js';
import LoadProducts from "./LoadProducts";
import '../../../css/slider.scss';
import banner1 from '../../../imagenes/ban1.png';
import banner7 from '../../../imagenes/ban7.png';
import banner9 from '../../../imagenes/ban9.png';

function Main(props) {
  //introJs().start();
  
  /* banner items */
  const items = [
    {
      src: banner1,
      caption: '',
      altText: 'Slide 1',
      key: '1'
    },    
    {
      src: banner9,
      caption: '',
      altText: 'Slide 3',
      key: '2'
    },
    {
      src: banner7,
      caption: '',
      altText: 'Slide 3',
      key: '3'
    }
  ];

  if(!localStorage.getItem("auth")){ 
    return  <Redirect to='/login'/> 
    
    }
  else{
  
    console.log(localStorage.getItem("auth"));
    return (
      <>
        <head>
        {/*<link rel="stylesheet" href="https://unpkg.com/intro.js/minified/introjs.min.css" />*/}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/intro.js@3.1.0/themes/introjs-nassim.min.css"/>
        </head>
        <NavbarComponent logout={props.logout}/>
        <CategoriaComponent isToggle={false}/>

        {/* banner */}
        <section className='banner_container'>
          <Col xs='12' md='12' lg='12'>
            <UncontrolledCarousel items={items} className='banner'/>
          </Col>
          
        </section>

        {/* contenido productos */}
        <section className='productos_container'>
          <div className='list_productos' >
            <h6 data-intro='En esta sección puedes encontrar
                prodcutos recientes en el catálogo' >Recientes</h6>
            <hr className="my-2" />
            
            <div className='productos mt-5 carousel'>
              {LoadProducts("http://localhost:3000/productos")}
            </div>
          </div>
          <div className='list_productos' >
            <h6 data-intro='Elige entre los productos más destacados de la Urbanización.'>Lo más destacado</h6>
            <hr className="my-2" />
            <div className='productos'>
            {LoadProducts("http://localhost:3000/productos")}
            </div>
          </div>
          <div className='list_productos' >
            <h6 data-intro='¿Por qué ir tan lejos? Encuentra productos cerca de tu ubicación.'>Cerca de ti</h6>
            <hr className="my-2" />
            <div className='productos'>
            {LoadProducts("http://localhost:3000/productos")}
            </div>
          </div>
          <div className='list_productos'>
            <h6  data-intro='No te pierdas las promociones que UrbazApp tiene para ti.'>Promociones</h6>
            <hr className="my-2" />
            <div className='productos'>
            {LoadProducts("http://localhost:3000/productos")}
            </div>
          </div>
        </section>

        {/* footer */}
        
        <footer>
          <p>&copy; 2020 Grupo BatScript - Todos los derechos reservados</p>
        </footer>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/intro.js/3.1.0/intro.min.js" integrity="sha512-8HbqTH7QzK30vhgVF/hTJ4loXwV85UU9vjI4nK04AfdOFzl8zG7b3LLAEHDmvIM8I0rvserMXmQx4Hw+kRknjw==" crossorigin="anonymous"></script>
        <script src="./main.js"></script>
      </>

    );
  
    }
}

export default Main;

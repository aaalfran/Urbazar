import React, { useState } from 'react';
import Producto from './Producto';
import NavbarComponent from './navbarComponent';
import CategoriaComponent from './CategoriaComponent';
import { UncontrolledCarousel, Col } from 'reactstrap';
import '../css/MainComponent.css';
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import introJs from 'intro.js';
import LoadProducts from "./LoadProducts";

function Main() {
  introJs().start();
  const src_kitten ='https://static.toiimg.com/photo/msid-68523832/68523832.jpg?1137762';
  const src_cupcake = 'https://preppykitchen.com/wp-content/uploads/2016/07/Chocolate-cupcakes-recipe-light.jpg';
  const src_boots = 'https://i.pinimg.com/originals/dd/5c/cc/dd5ccc1e042a6747f07493a1b3943c89.jpg'
  const src_ham = 'https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg'

  /* banner items */
  const items = [
    {
      src: 'https://static.vecteezy.com/system/resources/previews/000/669/988/original/vector-shopping-online-banner.jpg',
      caption: '',
      altText: 'Slide 1',
      key: '1'
    },
    {
      src: 'https://previews.123rf.com/images/vectorgift/vectorgift1608/vectorgift160800109/61622829-sale-discount-background-for-the-online-store-shop-promotional-leaflet-promotion-poster-banner-vecto.jpg',
      caption: '',
      altText: 'Slide 2',
      key: '2'
    },
    {
      src: 'https://st2.depositphotos.com/4063385/9889/v/950/depositphotos_98891888-stock-illustration-online-store-banner.jpg',
      caption: '',
      altText: 'Slide 3',
      key: '3'
    }
  ];
/*
  const [productos, guardarProductos] = useState ([ 
    { id: 1, nombre: 'Gato', precio: 50, foto_src: src_kitten},
    { id: 2, nombre: 'Cupcake', precio: 51, foto_src: src_cupcake},
    { id: 3, nombre: 'Boots', precio: 52, foto_src: src_boots},
    { id: 4, nombre: 'Hamburger', precio: 53, foto_src: src_ham},
  ]);*/

  return (
    <>
      <head>
      {/*<link rel="stylesheet" href="https://unpkg.com/intro.js/minified/introjs.min.css" />*/}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/intro.js@3.1.0/themes/introjs-nassim.min.css"/>
       </head>
      <NavbarComponent />
      <CategoriaComponent isToggle={false}/>

      {/* banner */}
      <section className='banner_container'>
        <Col xs='12' md='6' lg='6'>
          <UncontrolledCarousel items={items} className='banner'/>
        </Col>
        
      </section>

      {/* contenido productos */}
      <section className='productos_container'>
        <div className='list_productos' >
          <h6 data-intro='En esta sección puedes encontrar
              prodcutos recientes en el catálogo' >Recientes</h6>
          <hr className="my-2" />
          <div className='productos'>
            {LoadProducts("http://localhost:4000/api/productos")}
          </div>
        </div>
        <div className='list_productos' >
          <h6 data-intro='Elige entre los productos más destacados de la Urbanización.'>Lo más destacado</h6>
          <hr className="my-2" />
          <div className='productos'>
          {LoadProducts("http://localhost:4000/api/productos2")}
          </div>
        </div>
        <div className='list_productos' >
          <h6 data-intro='¿Por qué ir tan lejos? Encuentra productos cerca de tu ubicación.'>Cerca de ti</h6>
          <hr className="my-2" />
          <div className='productos'>
          {LoadProducts("http://localhost:4000/api/productos3")}
          </div>
        </div>
        <div className='list_productos'>
          <h6  data-intro='No te pierdas las promociones que UrbazApp tiene para ti.'>Promociones</h6>
          <hr className="my-2" />
          <div className='productos'>
          {LoadProducts("http://localhost:4000/api/productos4")}
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

export default Main;
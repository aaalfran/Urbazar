import React, { useState, useEffect } from 'react';
import Cajon from '../Carrito/CarritoComponent';
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import axios from 'axios';
import ToggleMenu from './ToggleMenuPC';
import '../../../css/MainComponent.css';
import '../../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import {filter, handleClick} from '../Main/main.js';
import CatalogoComponent from '../Busqueda/CatalogoComponent';

export let idCarritoDef;
export let cantidadProd = 0;

const NavbarComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cantProductos, setCantProductos] = useState(0);
    const [idCarrito, setIdCarrito] = useState(0);
    const toggle = () => setIsOpen(true);

    axios.get('http://localhost:3000/carrito')
    .then(response => response.data)
    .then( (res)=> {
        for(let i=0; i<res.length; i++){
            if(res[i].idUsuario == localStorage.getItem('userId')){
              setIdCarrito(res[i].id);
            }
        }
    })

    idCarritoDef = idCarrito;
    let cantidad = 0;
 
    axios.get('http://localhost:3000/detalle-carrito')
    .then(response => response.data)
    .then( (res2)=> {
        for(let i=0; i<res2.length; i++){
            if(res2[i].idCarrito == idCarrito){
              cantidad++;
            }
        }
          setCantProductos(cantidad);
          cantidadProd = cantProductos;
      } 
    );    

    return (  
     <>   
        <Navbar color='faded' dark className='navbar'>
        <NavbarToggler onClick={toggle} className="toggler mr-2 custom-toggler"/>
        {/* menu toggler */}
        <ToggleMenu 
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

        <NavbarBrand data-intro="¡Bienvenido a UrbazApp! Demos un tour" href='/' className='logo'>UrbazApp</NavbarBrand>
        <NavbarBrand href='/' className='logo2'>UApp</NavbarBrand>

        <form className='mr-auto search_form'>
          <input id="myInput"  onMouseDown={CatalogoComponent} onKeyUp={filter} onClick={handleClick} data-intro="Busca productos de tu interés" type='text' placeholder='Buscar...' name='search'/>
          <button type='submit'><i className='fas fa-search mr-auto'></i></button>
        </form>

        <p id='p_bienvenido'>Bienvenido</p>
        <p id='nombre_user'>{localStorage.getItem("nombre_usuario")}!</p>

        <button type='button' className='button_nav boton_notificacion'><i className='fas fa-bell fa-lg'></i></button>
        <div id="cont_icon_carrito">
          <a href={`/carrito/${Number(idCarrito)}`}><button type='button' data-intro="Accede a tu carrito de compras" className='button_nav' href="/carrito"><i className='fas fa-shopping-cart fa-lg'></i> </button></a>
          <p> {cantProductos}
          </p>
        </div>
      </Navbar>

    </>
    );
}
 
export default NavbarComponent;
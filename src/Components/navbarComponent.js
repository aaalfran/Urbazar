import React, { useState } from 'react';
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import ToggleMenu from './ToggleMenu'
import '../css/MainComponent.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';

const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(true);

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
          <input data-intro="Busca productos de tu interés" type='text' placeholder='Buscar...' name='search'/>
          <button type='submit'><i className='fas fa-search mr-auto'></i></button>
        </form>

        <p id='p_bienvenido'>Bienvenido!</p>
        <p id='nombre_user'>Walther López</p>

        <button type='button' className='button_nav'><i className='fas fa-bell fa-lg'></i></button>
        <button type='button' data-intro="Accede a tu carrito de compras" className='button_nav' href='/carrito'><i className='fas fa-shopping-cart fa-lg'></i> </button>

      </Navbar>

    </>
    );
}
 
export default NavbarComponent;
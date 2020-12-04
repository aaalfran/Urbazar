import React, { useState } from 'react';
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import ToggleMenuAdmins from './TogglemenuAdmins'
import '../css/MainComponent.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';

const NavbarAdmins = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(true);

    return (  
     <>   
        <Navbar color='faded' dark className='navbar'>
        <NavbarToggler onClick={toggle} className="toggler mr-2 custom-toggler"/>
        {/* menu toggler */}
        

        <NavbarBrand href='/' className='logo'>UrbazApp</NavbarBrand>
        <NavbarBrand href='/' className='logo2'>UApp</NavbarBrand>
        <div id="space"></div>
        <p id='p_bienvenido'>Bienvenido!</p>
        <p id='nombre_user'>Walther López</p>

        <button type='button' className='button_nav' href="/carrito"><i class="fas fa-users-cog"></i></button>

      </Navbar>

    </>
    );
}
 
export default NavbarAdmins;
import React, { useState } from 'react';

import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
UncontrolledCarousel, Col } from 'reactstrap';
const navbarComponent = React.lazy(() => import('./navbarComponent'));
function CategoriaComponent(){

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <html>
            <body>
            <Navbar color='faded' dark className='navbar'>
                <NavbarToggler onClick={toggle} className="toggler mr-2 custom-toggler"/>
                {/* hacer el menu del toggler */}
                <NavbarBrand href='/' className='logo'>UrbazApp</NavbarBrand>
                <NavbarBrand href='/' className='logo2'>UApp</NavbarBrand>

                <form className='mr-auto search_form'>
                    <input type='text' placeholder='Buscar...' name='search'/>
                    <button type='submit'><i className='fas fa-search mr-auto'></i></button>
                </form>

                <p id='p_bienvenido'>Bienvenido!</p>
                <p id='nombre_user'>Walther López</p>

                <button type='button' className='button_nav'><i className='fas fa-bell fa-lg'></i></button>
                <button type='button' className='button_nav'><i className='fas fa-shopping-cart fa-lg'></i> </button>

            </Navbar>

            {/* categorias */}
        <Nav className='nav_categorias'>
            <NavItem>
                <NavLink href='#'>
                <i className='icon_cat fas fa-home'></i>
                <p>Inicio</p></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href='#'>
                <i className='icon_cat fas fa-tshirt'></i>
                <p>Ropa</p></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href='#'>
                <i className='icon_cat fas fa-laptop'></i>
                <p>Tecnología</p></NavLink>          
            </NavItem>
            <NavItem>
                <NavLink href='#'>
                <i className='icon_cat fas fa-utensils'></i> 
                <p>Comida</p></NavLink>  
            </NavItem>
            <NavItem>
                <NavLink href='#'>
                <i className='icon_cat fas fa-bed'></i> 
                <p>Hogar</p></NavLink>
            </NavItem>     
            <NavItem>
                <NavLink href='#'>
                <i className='icon_cat fas fa-smile'></i> 
                <p>Makeup</p></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href='#'>
                <i className='icon_cat fas fa-umbrella-beach'></i> 
                <p>Otros</p></NavLink>
            </NavItem>       
        </Nav>
            Aquí mostrar las categorias
        
            </body>
        </html>
    );
}

export default CategoriaComponent;
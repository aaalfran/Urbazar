import React from 'react';
import '../css/MainComponent.css';
import { Nav, NavItem, NavLink } from 'reactstrap';

const CategoriaComponent = () => {
    return ( 
    <>
        {/* Categorías */}
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
    </>
     );
}
 
export default CategoriaComponent;
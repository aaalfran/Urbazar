import React from 'react'
import '../../../css/MainComponent.css'
import { Nav, NavItem, NavLink } from 'reactstrap'

const CategoriaComponent = ({ isToggle }) => {
  return (
    <>
        {/* Categorías */}
        <Nav data-intro="Utiliza filtros para encontrar más rápido lo que buscas" className={`${isToggle ? 'menu_cat_toggle' : 'nav_categorias'}`}>
        <NavItem>
          <NavLink href='/'>
          <i className='icon_cat fas fa-home'></i>
          <p>Inicio</p></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/buscador/1'>
          <i className='icon_cat fas fa-tshirt'></i>
          <p>Ropa</p></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/buscador/2'>
          <i className='icon_cat fas fa-laptop'></i>
          <p>Tecnología</p></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/buscador/3'>
          <i className='icon_cat fas fa-utensils'></i>
          <p>Comida</p></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/buscador/4'>
          <i className='icon_cat fas fa-bed'></i>
          <p>Hogar</p></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/buscador/5'>
          <i className='icon_cat fas fa-smile'></i>
          <p>Makeup</p></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/buscador/4'>
          <i className='icon_cat fas fa-umbrella-beach'></i>
          <p>Otros</p></NavLink>
        </NavItem>
      </Nav>
    </>
  )
}

export default CategoriaComponent

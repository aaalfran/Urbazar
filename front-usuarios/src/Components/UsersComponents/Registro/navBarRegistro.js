import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import '../../../css/MainComponent.css'
import '../../../../node_modules/@fortawesome/fontawesome-free/css/all.css'

const NavbarComponent = ({isLogin}) => {
  return (
     <>
        <Navbar color='faded' dark className='navBarRegister'>

        <NavbarBrand className='logo_reg'> UrbazApp</NavbarBrand>

        <div id="link_login">
          {isLogin? <p></p>  : <a href={'/login'}>Iniciar sesión</a>}
        </div>

      </Navbar>

    </>
  )
}

export default NavbarComponent

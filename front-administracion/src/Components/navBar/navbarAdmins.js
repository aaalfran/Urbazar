import React, { useState } from 'react';
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import '../../css/MainComponent.css';


const NavbarAdmins = (props) => {
    
    return (  
     <>   
        <Navbar color='faded' dark className='navbar'>
        {/* menu toggler */}
        

        <NavbarBrand  className='logo'></NavbarBrand>
        <NavbarBrand  className='logo2'>UApp</NavbarBrand>

          <p id='p_bienvenido'>Log out</p>

      </Navbar>

    </>
    );
}
 
export default NavbarAdmins;
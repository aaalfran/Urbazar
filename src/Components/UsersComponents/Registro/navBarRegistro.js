import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import '../../../css/MainComponent.css';
import '../../../../node_modules/@fortawesome/fontawesome-free/css/all.css';

const NavbarComponent = () => {
    

    return (  
     <>   
        <Navbar color='faded' dark className='navBarRegister'>
        

        <NavbarBrand className='logo_reg'> UrbazApp</NavbarBrand>

        <div  id="link_login"> 
          <a href={'/login'}>Iniciar sesión</a>
        </div>
        
      </Navbar>

    </>
    );
}
 
export default NavbarComponent;
import React, { useState } from 'react';
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import Betsy from "../../imagenes/betsy.jpeg";
import '../../css/MainComponent.css';
import NotificationsIcon from '@material-ui/icons/Notifications';

const NavbarAdmins = (props) => {
    
    return (  
     <>   
      <Navbar color='faded' dark className='navbar'>
        {/* menu toggler */}
        

        {/*<div className="notificaciones">
          <a ><button type='button' className='button_nav' ><NotificationsIcon/> </button></a>
          

        </div>*/}

        <div id="account">
            <img src={Betsy} className="photo_account"/>

          <div className="informacion_account">
            Diana Almeida<br/>
            Administrador de Conjunto

          </div>

        </div>

      </Navbar>

    </>
    );
}
 
export default NavbarAdmins;
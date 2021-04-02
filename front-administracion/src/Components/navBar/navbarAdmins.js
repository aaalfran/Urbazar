import React, { useState } from 'react';
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import Betsy from "../../imagenes/betsy.jpeg";
import '../../css/MainComponent.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MeetingRoom from '@material-ui/icons/MeetingRoom';
import PersonIcon from '@material-ui/icons/Person';

const NavbarAdmins = (props) => {
  let logout = () => {
    localStorage.setItem("auth", 0);
    localStorage.setItem('nombre_usuario', "");
    localStorage.setItem('userId', "");
    localStorage.setItem('role', "");
    localStorage.setItem('token', "");
  }
    
    return (  
     <>   
      <Navbar color='faded' dark className='navbar-admin'>
        {/* menu toggler */}
        

        <div className="notificaciones">
          <a ><button type='button' className='button_nav' ><NotificationsIcon/> </button></a>
          

        </div>

        <div className="notificaciones">
          <a ><button type='button' className='button_nav' ><PersonIcon/> </button></a>
          

        </div>

        <div className="notificaciones">
          <a href="/" ><button type='button' className='button_nav' onClick={logout} ><MeetingRoom/> </button></a>
          

        </div>
        

      </Navbar>

    </>
    );
}
 
export default NavbarAdmins;
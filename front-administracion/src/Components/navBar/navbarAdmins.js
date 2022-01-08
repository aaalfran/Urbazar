import React from 'react'
import { Navbar } from 'reactstrap'
import '../../css/navbar.css'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MeetingRoom from '@material-ui/icons/MeetingRoom'
import PersonIcon from '@material-ui/icons/Person'
import logoNaranja from '../../imagenes/logoNaranja.png'

const NavbarAdmins = (props) => {
  const logout = () => {
    localStorage.setItem('auth', 0)
    localStorage.setItem('nombre_usuario', '')
    localStorage.setItem('userId', '')
    localStorage.setItem('role', '')
    localStorage.setItem('token', '')
  }

  return (
     <>
      <Navbar color='faded' dark className='navbar-admin'>
        {/* menu toggler */}
        <div className="section-logo">
            <div className="logobox">
              <img src={logoNaranja} className="logo-png" />
            <p className="nombreUrbazapp"> UrbazApp </p>
            </div>
        </div>
        
        <div className="section-options"> 
          <div className="notificaciones">
            <a >
              <button type='button' className='button_nav d-flex' >
                <NotificationsIcon className="icon-navbar"/> 
              </button>
            </a>
        
          </div>

          <div className="notificaciones">
            <a href="/admin/dashboard/account">
              <button type='button' className='button_nav d-flex' >
                <PersonIcon className="icon-navbar"/> 
              </button>
            </a>

          </div>

          <div className="notificaciones">
            <a href="/" >
              <button type='button' className='button_nav d-flex' onClick={logout} >
                <MeetingRoom className="icon-navbar"/> 
              </button>
            </a>

          </div>
        </div>

      </Navbar>

    </>
  )
}

export default NavbarAdmins

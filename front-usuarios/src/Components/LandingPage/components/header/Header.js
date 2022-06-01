import React from 'react'
import { NavBarLanding } from '../navBarLanding/NavBarLanding'

import './header.css'

export const Header = () => {
  return (
    <header id="landing-page-header">
      <NavBarLanding></NavBarLanding>
      <div id="landing-page-banner">
        <span>
          El mejor lugar para <br></br>comprar y vender
        </span>
        <span>
          Tienda diseñada para la compra de productos dentro de tu ciudad.
          <br></br> Unete a nuestra comunidad. Es gratis.
        </span>
        <button>Empezar!</button>
      </div>
    </header>
  )
}

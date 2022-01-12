import React from 'react'
import logoUrbazapp from '../../images/logoUrbazapp.png'

import './header.css'

export const Header = () => {
  return (
    <header id="landing-page-header">
      <div className="container">
        <div id="landing-page-bar" className="row">
          <div className="col-6 d-flex no-wrap align-items-end">
            <img src={logoUrbazapp} width="70px"></img>
            <h1>
              Urbaz<span>App</span>
            </h1>
          </div>
          <div className="col-6 d-flex align-items-end justify-content-end">
            <button>Iniciar Sesión</button>
            <button>Registrarme</button>
          </div>
        </div>
        <div id="landing-page-banner">
          <span>El mejor lugar para comprar y vender</span>
          <span>
            Tienda diseñada para la compra de productos dentro de tu ciudad.
            Unete a nuestra comunidad. Es gratis.
          </span>
          <button>Empezar</button>
        </div>
      </div>
    </header>
  )
}

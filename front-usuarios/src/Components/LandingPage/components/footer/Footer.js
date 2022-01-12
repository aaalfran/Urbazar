import React from 'react'
import fb from '../../images/fb.png'
import insta from '../../images/insta.png'
import linked from '../../images/linked.png'
import twitter from '../../images/twitter.png'

import './footer.css'

export const Footer = () => {
  return (
    <footer id="landing-page-footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 col-footer">
            <div className="icon-footer-container">
              <img src={fb} width="34px"></img>
            </div>
            <p>Chequea nuestro Facebook</p>
          </div>
          <div className="col-12 col-md-3 col-footer">
            <div className="icon-footer-container">
              <img src={linked} width="34px"></img>
            </div>
            <p>Siguenos en LinkedIn</p>
          </div>
          <div className="col-12 col-md-3 col-footer">
            <div className="icon-footer-container">
              <img src={insta} width="34px"></img>
            </div>
            <p>Unete a nuestro Instagram</p>
          </div>
          <div className="col-12 col-md-3 col-footer">
            <div className="icon-footer-container">
              <img src={twitter} width="34px"></img>
            </div>
            <p>Mira acerca de lo que tweeteamos</p>
          </div>
        </div>
      </div>
      <span>Urbazapp©</span>
    </footer>
  )
}

import React from 'react'

import lock from '../../images/lock.png'
import chair from '../../images/chair.png'
import piggy from '../../images/piggy.png'
import speed from '../../images/speed.png'
import phone from '../../images/phone.png'
import btn_android from '../../images/playstore.png'
import btn_ios from '../../images/ios.png'

import './benefits.css'

export const Benefits = () => {
  return (
    <div id="landing-page-benefits">
      <div className="container">
        <div className="row d-flex flex-wrap">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="benefit-card">
              <div className="benefit-card-img">
                <img src={lock} className="img-fluid"></img>
              </div>
              <div className="benefit-card-text">
                <h2>Con seguridad</h2>
                <p>
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="benefit-card">
              <div className="benefit-card-img">
                <img src={chair} className="img-fluid"></img>
              </div>
              <div className="benefit-card-text">
                <h2>Desde tu hogar</h2>
                <p>
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="benefit-card">
              <div className="benefit-card-img">
                <img src={piggy} className="img-fluid"></img>
              </div>
              <div className="benefit-card-text">
                <h2>A menor precio</h2>
                <p>
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-8">
            <div className="benefit-card-large">
              <div className="benefit-card-large-text">
                <h2>Compra donde sea</h2>
                <p>
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum
                </p>
                <div className="badges-container row">
                  <img src={btn_ios} className="col-6"></img>
                  <img src={btn_android} className="col-6"></img>
                </div>
              </div>
              <div className="benefit-card-img">
                <img src={phone} className="img-fluid"></img>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="benefit-card">
              <div className="benefit-card-img">
                <img src={speed} className="img-fluid"></img>
              </div>
              <div className="benefit-card-text">
                <h2>Mas rapido</h2>
                <p>
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

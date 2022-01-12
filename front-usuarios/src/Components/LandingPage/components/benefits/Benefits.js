import React from 'react'

import lock from '../../images/lock.png'
import chair from '../../images/chair.png'
import piggy from '../../images/piggy.png'
import speed from '../../images/speed.png'
import phone from '../../images/phone.png'
import btn_android from '../../images/btn_android.png'
import btn_ios from '../../images/btn_ios.png'

import './benefits.css'

export const Benefits = () => {
  return (
    <div id="landing-page-benefits">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="benefit-card">
              <div id="benefit-card-img">
                <img src={lock} className="img-fluid"></img>
              </div>
              <div id="benefit-card-text">
                <h2>Con seguridad</h2>
                <p>
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="benefit-card">
              <div id="benefit-card-img">
                <img src={chair} className="img-fluid"></img>
              </div>
              <div id="benefit-card-text">
                <h2>Desde tu hogar</h2>
                <p>
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="benefit-card">
              <div id="benefit-card-img">
                <img src={piggy} className="img-fluid"></img>
              </div>
              <div id="benefit-card-text">
                <h2>A menor precio</h2>
                <p>
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="benefit-card-large">
              <div id="benefit-card-large-text">
                <h2>Con seguridad</h2>
                <p>
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum
                </p>
                <div className="row">
                  <img src={btn_ios} className="col-6"></img>
                  <img src={btn_android} className="col-6"></img>
                </div>
              </div>
              <div id="benefit-card-img">
                <img src={phone}></img>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="benefit-card">
              <div id="benefit-card-img">
                <img src={speed} className="img-fluid"></img>
              </div>
              <div id="benefit-card-text">
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

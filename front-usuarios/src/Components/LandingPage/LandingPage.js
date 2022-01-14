import React from 'react'

import { Header } from './components/header/Header'
import { Benefits } from './components/benefits/Benefits'
import { Roles } from './components/roles/Roles'
import { Ciudadelas } from './components/ciudadelas/Ciudadelas'
import { CallToAction } from './components/callToAction/CallToAction'
import { Footer } from './components/footer/Footer'

import './landingPage.css'

export const LandingPage = () => {
  return (
    <div>
      <Header></Header>
      <Benefits></Benefits>
      <Roles></Roles>
      <Ciudadelas></Ciudadelas>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </div>
  )
}

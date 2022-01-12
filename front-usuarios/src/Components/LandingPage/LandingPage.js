import React from 'react'

import { Header } from './components/header/Header'
import { Benefits } from './components/benefits/Benefits'
import { Footer } from './components/footer/Footer'

import './landingPage.css'

export const LandingPage = () => {
  return (
    <div>
      <Header></Header>
      <Benefits></Benefits>
      <Footer></Footer>
    </div>
  )
}

/* eslint-disable no-lone-blocks */
import React, { useState } from 'react'
import NavbarComponent from '../navBar/navbarComponent'
import CategoriaComponent from '../navBar/CategoriaComponent'
import { UncontrolledCarousel, Col } from 'reactstrap'
import '../../../css/MainComponent.css'
import '../../../../node_modules/@fortawesome/fontawesome-free/css/all.css'
import { Redirect } from 'react-router-dom'
import LoadProducts from './LoadProducts'
import '../../../css/slider.scss'
import banner1 from '../../../imagenes/ban1.png'
import banner7 from '../../../imagenes/ban7.png'
import banner9 from '../../../imagenes/ban9.png'
import data from '../../../enviroment'
import Tabla from '../Filtros/Tabla/Tabla'
import ProductsList from '../ProductsList/ProductsList'
import styled from 'styled-components'

import '../Main/Main.css'

const Container = styled.main`
  width: 100%;
  display: flex;
  @media (max-width: 769px) {
    flex-direction: column;
  }
`

const FiltersContainer = styled.div`
  width: 20%;
  height: 100vh;
  padding-top: 50px;
  @media (max-width: 769px) {
    height: auto;
    width: 100%;
  }
`

const ContentContainer = styled.div`
  padding-top: 50px;
  width: 80%;
  @media (max-width: 769px) {
    padding: 0 10px;
    width: 100%;
  }
`

const RecentsContainer = styled.div`
  
`

const CaroauselContainer = styled.div`

`

const Footer = styled.footer`
  
`

function Main() {
  const [products, setProducts] = useState([])
  const updateProducts = (newProducts) => {
    setProducts(newProducts)
  }

  // banner items
  const items = [
    {
      src: banner1,
      caption: '',
      altText: 'Slide 1',
      key: '1'
    },
    {
      src: banner9,
      caption: '',
      altText: 'Slide 3',
      key: '2'
    },
    {
      src: banner7,
      caption: '',
      altText: 'Slide 3',
      key: '3'
    }
  ]

  const auth = parseInt(localStorage.getItem('auth'), 10)
  const role = localStorage.getItem('role')

  if (auth && (role === '0' || role === '1')) {
    return (
      <>
        <NavbarComponent />
        <CategoriaComponent isToggle={false} />

        <section className="banner_container">
          <Col xs="12" md="12" lg="12">
            <UncontrolledCarousel items={items} className="banner" />
          </Col>
        </section>

        <Container>
          <FiltersContainer>
            <Tabla updateProducts={updateProducts}></Tabla>
          </FiltersContainer>
          <ContentContainer>
            <RecentsContainer>
              <h6
                data-intro="En esta sección puedes encontrar
                  prodcutos recientes en el catálogo"
              >
                Recientes
              </h6>
              <hr className="my-2" />
              <CaroauselContainer className="productos mt-5 carousel">
                {LoadProducts(`${data.url}/productos`)}
              </CaroauselContainer>
            </RecentsContainer>
            <div>
              <h6>Productos</h6>
              <ProductsList products={products} />
            </div>
          </ContentContainer>
        </Container>

        <Footer>
          <p>&copy; 2020 Grupo BatScript - Todos los derechos reservados</p>
        </Footer>
        <script src="./main.js"></script>
      </>
    )
  } else if (auth && (role === '2' || role === '3')) {
    return <Redirect to="/admin/dashboard/report" />
  } else return <Redirect to="/login" />
}

export default Main

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import data from '../../enviroment'

import NavbarComponent from '../../Components/UsersComponents/navBar/navbarComponent'
import OrderSummary from '../../Components/UsersComponents/OrderSummary/OrderSummary'
import ProductPreview from '../../Components/UsersComponents/productPreview/ProductPreview'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 5%;
  max-width: 1920px;
  margin: 0 auto;
`

const Title = styled.h1`
  color: ${(props) => props.theme.colors.black};
  margin-top: 20px;
  @media (max-width: 769px) {
    font-size: 1.2rem;
  }
  @media (max-width: 425px) {
      font-size: 1rem;
  }
`

const Hr = styled.hr`
  border: solid 1px ${(props) => props.theme.colors.border};
  width: 98%;
  margin-left: 0;
`

const ContentContainer = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const DetailsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 40px;
  @media (max-width: 1024px) {
    padding-right: 0;
  }
`

const SummaryContainer = styled.section`
  width: 20%;
  padding: 5% 0;
  @media (max-width: 1024px) {
    width: 100%;
  }
`

const DateContainer = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.black};
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 20px;
  span {
    margin-right: 20px;
    @media (max-width: 425px) {
      :nth-child(2){
        display: none;
      }
    }
  }
  @media (max-width: 769px) {
    font-size: 1rem;
  }
  @media (max-width: 425px) {
    font-size: 0.8rem;
    flex-direction: column;
  }
`

const InfoContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  width: 100%;
`

const Info = styled.div`
  margin-right: 100px;
  h3 {
    color: ${(props) => props.theme.colors.black};
    font-size: 1.2rem;
    @media (max-width: 769px) {
      font-size: 1rem;
      margin: 0;
    }
    @media (max-width: 425px) {
      font-size: 0.8rem;
      margin-right: 0;
    }
  }
  @media (max-width: 769px) {
    font-size: 1rem;
    margin-right: 20px;
  }
  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`

function OrderDetails({ match }) {
  const [orderDetails, setOrderDetails] = useState({
    personaId: parseInt(localStorage.getItem('userId'), 10),
    date: 'Cargando...',
    deliveryAddress: {
      ciudadela: 'Cargando...',
      manzana: 'Cargando...',
      villa: 'Cargando...'
    },
    paymentMethod: {
      typeOfCard: 'Cargando...', // change later for a real value
      lastDigits: 'Cargando...' // change later for a real value
    },
    products: [],
    orderSummary: {
      totalProducts: 0,
      totalDelivery: 0, // change later for real value
      totalWithoutTaxes: 0,
      taxes: 0,
      total: 0
    }
  })

  useEffect(() => {
    axios.get(`${data.url}/pedidos/${match.params.orderId}`)
      .then((response) => {
        setOrderDetails(response.data)
      })
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <Container>
        <Title>Detalles del pedido</Title>
        <ContentContainer>
          <DetailsContainer>
            <Hr></Hr>
            <DateContainer>
              <span>Pedido el {new Date(orderDetails.date).toLocaleString(navigator.language)}</span>
              <span>|</span>
              <span>Pedido #{match.params.orderId}</span>
            </DateContainer>
            <InfoContainer>
              <Info>
                <h3>Direccion de envio</h3>
                <p>
                  {orderDetails.deliveryAddress.ciudadela}
                  <br />
                  Manzana {orderDetails.deliveryAddress.manzana}
                  <br />
                  Villa {orderDetails.deliveryAddress.villa}
                </p>
              </Info>
              <Info>
                <h3>Metodo de pago</h3>
                <p>
                  {orderDetails.paymentMethod.typeOfCard}
                  <br />
                  ****{orderDetails.paymentMethod.lastDigits}
                </p>
              </Info>
            </InfoContainer>
            {orderDetails.products.map((product, index) => (
              <ProductPreview product={product} key={index + 1} />
            ))}
          </DetailsContainer>
          <SummaryContainer>
            <OrderSummary
              orderSummary={orderDetails.orderSummary}
            ></OrderSummary>
          </SummaryContainer>
        </ContentContainer>
      </Container>
    </>
  )
}

export default OrderDetails

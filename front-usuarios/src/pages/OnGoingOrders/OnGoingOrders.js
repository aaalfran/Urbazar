import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import data from '../../enviroment'

import NavbarComponent from '../../Components/UsersComponents/navBar/navbarComponent'
import OrderStatus from '../../Components/UsersComponents/OrderStatus/OrderStatus'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 200px;

  @media (max-width: 1024px) {
    padding: 0 10px;
  }
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const OrdersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  margin: 0;
  color: ${(props) => props.theme.colors.black};
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`

const Separator = styled.hr`
  width: 100%;
  border: solid 1px ${(props) => props.theme.colors.border};
  margin-top: 10px;
`

function OnGoingOrders() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    axios.get(`${data.url}/compras?filter[where][comprador]=${localStorage.getItem('userId')}`)
      .then((response) => {
        setOrders(response.data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <NavbarComponent></NavbarComponent>
      <Container>
        <TitleContainer>
          <Title>Pedidos en curso</Title>
          <Separator></Separator>
        </TitleContainer>
        <OrdersContainer>
          {orders.map((order, index) =>
            <OrderStatus key={index} order={order} />
          )}
        </OrdersContainer>
      </Container>
    </>
  )
}

export default OnGoingOrders

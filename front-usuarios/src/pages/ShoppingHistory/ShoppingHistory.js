import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import data from '../../enviroment'

import NavbarComponent from '../../Components/UsersComponents/navBar/navbarComponent'
import OrderPreview from '../../Components/UsersComponents/OrderPreview/OrderPreview'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 150px;

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
  @media (max-width: 769px) {
    flex-direction: column;
  }
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

function ShoppingHistory() {
  const [orders, setOrders] = useState([])
  useEffect(() => {
    axios.get(`${data.url}/pedidos?filter[where][personaId]=${localStorage.getItem('userId')}`)
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
          <Title>Tus pedidos</Title>
          <Separator></Separator>
        </TitleContainer>
        <OrdersContainer>
          {orders.map((order, index) =>
            <OrderPreview
              key={order._id}
              id={order._id}
              title={`Pedido ${index + 1}`}
              total={order.orderSummary.total}
              date={order.date}
              products={order.products}
            />
          )}
        </OrdersContainer>
      </Container>
    </>
  )
}

export default ShoppingHistory

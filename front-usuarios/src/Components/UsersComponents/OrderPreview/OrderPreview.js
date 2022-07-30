import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import Price from '../price/Price'

const Container = styled.div`
  min-width: 400px;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  border: solid 1px ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius};
  margin: 20px;

  @media (max-width: 425px) {
    margin: 0;
    margin-bottom: 10px;
    min-width: auto;
    min-height: auto;
  }

  @media (max-width: 400px) {
    flex-direction: column;
  }
`

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`

const InfoContiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  margin-left: 30px;
  @media (max-width: 425px) {
    margin-left: 0;
    gap: 5px;
  }
`

const Title = styled.h2`
  color: ${(props) => props.theme.colors.black};
  font-weight: 500;
  font-size: 3rem;
  @media (max-width: 425px) {
    font-size: 1.5rem;
  }
`

const DarkLabel = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black};
  @media (max-width: 425px) {
    font-size: 1rem;
  }
`

const Label = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.darkGray};
  text-transform: uppercase;
  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`

const InfoSection = styled.div`
  margin: 0;
  padding: 0;
  p {
    font-weight: 600;
    color: ${(props) => props.theme.colors.black};
    @media (max-width: 425px) {
      font-size: 0.8rem;
      margin: 0;
    }
  }
`

const LinksContainer = styled.div`
  margin-top: 100px;
  @media (max-width: 425px) {
      margin: 0;
  }
`

const Button = styled(Link)`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.darkBlue};
  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`

const ProductsContainer = styled.div`
  div {
    color: ${(props) => props.theme.colors.darkGray};
  }
`

const Thumbnail = styled.img`
  margin-right: 10px;
  width: 50px;
  @media (max-width: 425px) {
      width: 30px;
  }
`

/**
 * Returns an array with 1-3 products from the products array parameter
 * @returns Array of products
 */
const getProducts = (products) => {
  const firstProducts = []
  for (let i = 0; i < products.length; i++) {
    if (i < 3) {
      firstProducts.push(products[i])
    }
  }
  return firstProducts
}

function OrderPreview({ id, title, date, total, products }) {
  const history = useHistory()

  const goToOrderDetails = () => {
    history.push(`/detalles-de-compra/${id}`)
  }

  return (
    <Container key={id}>
      <DetailsContainer>
        <Title>{title}</Title>
        <ProductsContainer>
          <DarkLabel>Productos:</DarkLabel>
          {getProducts(products).map((product) => (
            <div key={product.nombre}>
              <Thumbnail src={product.source} />
              {product.nombre} (x{product.quantity})
            </div>
          ))}
          {products.length > 3 ? <div>...</div> : ''}
        </ProductsContainer>
        <LinksContainer>
          <Button>Ver recibo</Button><br></br>
          <Button onClick={goToOrderDetails}>Ver detalles del pedido</Button>
        </LinksContainer>
      </DetailsContainer>
      <InfoContiner>
        <InfoSection>
          <Label>Pedido #</Label>
          <p>{id}</p>
        </InfoSection>
        <InfoSection>
          <Label>Realizado</Label>
          <p>{new Date(date).toLocaleString(navigator.language)}</p>
        </InfoSection>
        <InfoSection>
          <Label>Total</Label>
          <Price price={'' + total} />
        </InfoSection>
      </InfoContiner>
    </Container>
  )
}

export default OrderPreview

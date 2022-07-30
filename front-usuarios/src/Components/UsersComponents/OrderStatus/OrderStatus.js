import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import data from '../../../enviroment'

import Price from '../price/Price'
import Stars from '../Stars/Stars'
import ProgressBar from '../ProgressBar/ProgressBar'

const Container = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  border: solid 1px ${(props) => props.theme.colors.border};
  padding: 20px;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 50px;
  margin: 20px 0;
  width: 100%;
`

const ImageContainer = styled.div`
  padding: 10px;
  min-width: 200px;
  max-width: 200px;
  min-height: 200px;
  max-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  min-width: 50%;
`

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const DetailsContainer = styled.div`
  display: flex;
  width: 100%;
`

const DescriptionContainer = styled.div`
  padding-top: 30px;
  min-width: 50%;
`

const Title = styled.h2`
  color: ${(props) => props.theme.colors.black};
  font-weight: 500;
  font-size: 2rem;
`

const Label = styled.span`
  color: ${(props) => props.theme.colors.black};
  font-weight: 500;
  font-size: 1.2rem;
`

const Vendor = styled.span`
  color: ${(props) => props.theme.colors.darkBlue};
  font-size: 1.2rem;
`

const VendorContainer = styled.div`
  margin-top: 30px;
`

function OrderStatus({ order }) {
  const [product, setProduct] = useState({})

  useEffect(() => {
    if (order) {
      axios.get(`${data.url}/productos/${order.producto}`)
        .then((response) => {
          return response.data
        }).then((prod) => {
          axios.get(`${data.url}/personas/${prod.idVendedor}`)
            .then((res) => {
              setProduct({ ...prod, vendor: res.data.nombre })
            })
        })
        .catch((error) => console.log(error))
    }
  }, [])

  const { nombre, precio, source, descripcion, vendor, promedioPuntuacion } = product

  const { imagePath, name, price, stars } = {
    imagePath: source,
    name: nombre,
    price: precio,
    stars: {
      number: promedioPuntuacion,
      numberOfVotes: 20
    },
    description: descripcion,
    vendor: vendor
  }

  return (
    <Container>
      <ImageContainer>
        <img src={imagePath} className="img-fluid"></img>
      </ImageContainer>
      <DetailsWrapper>
        <Title>{name}</Title>
        <DetailsContainer>
          <InfoContainer>
            <Stars
              mark={stars.number}
              numberOfVotes={stars.numberOfVotes}
            ></Stars>
            <Price price={price}></Price>
            <VendorContainer>
              <Label>Vendedor: </Label>
              <Vendor>{vendor}</Vendor>
            </VendorContainer>
          </InfoContainer>
          <DescriptionContainer>
            <ProgressBar state={order.estado} />
          </DescriptionContainer>
        </DetailsContainer>
      </DetailsWrapper>
    </Container>
  )
}

export default OrderStatus

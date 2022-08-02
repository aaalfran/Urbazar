import React from 'react'
import styled from 'styled-components'

import Price from '../price/Price'
import Stars from '../Stars/Stars'

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
  @media (max-width: 769px) {
    gap: 0;
    padding: 5px 0;
  }
  @media (max-width: 280px) {
    flex-direction: column;
    padding: 5px 10px;
  }
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
  @media (max-width: 769px) {
    min-width: 150px;
    max-width: 150px;
    min-height: 150px;
    max-height: 150px;
  }
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
  @media (max-width: 769px) {
    flex-direction: column;
  }
`

const DescriptionContainer = styled.div`
  padding-top: 30px;
  min-width: 50%;
`

const Title = styled.h2`
  color: ${(props) => props.theme.colors.black};
  font-weight: 500;
  font-size: 2rem;
  @media (max-width: 769px) {
    font-size: 1.2rem;
  }
  @media (max-width: 425px) {
    font-size: 1rem;
  }
  @media (max-width: 360px) {
    font-size: 0.8rem;
  }
`

const Label = styled.span`
  color: ${(props) => props.theme.colors.black};
  font-weight: 500;
  font-size: 1.2rem;
  @media (max-width: 769px) {
    font-size: 0.8rem;
  }
  @media (max-width: 360px) {
    font-size: 0.6rem;
  }
`

const Vendor = styled.span`
  color: ${(props) => props.theme.colors.darkBlue};
  font-size: 1.2rem;
  @media (max-width: 769px) {
    font-size: 0.8rem;
  }
  @media (max-width: 360px) {
    font-size: 0.6rem;
  }
`

const VendorContainer = styled.div`
  margin-top: 30px;
  @media (max-width: 769px) {
    margin: 0;
  }
`

function ProductPreview({ product }) {
  const { nombre, precio, source, descripcion, vendor } = product || {
    nombre: 'Cargando...',
    precio: 'Cargando...',
    foto_src: 'Cargando...',
    descripcion: 'Cargando...',
    vendor: 'Cargando...'
  }

  const { imagePath, name, price, stars, description } = {
    imagePath: source,
    name: nombre,
    price: precio,
    stars: {
      number: 4.5,
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
            <Label>Descripción</Label>
            <p>{description}</p>
          </DescriptionContainer>
        </DetailsContainer>
      </DetailsWrapper>
    </Container>
  )
}

export default ProductPreview

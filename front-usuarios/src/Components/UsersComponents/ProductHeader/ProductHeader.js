import React from 'react'
import styled from 'styled-components'

const Container = styled.thead`
  box-sizing: border-box;
  width: 100%;
  font-weight: bold;
  @media (max-width: 1040px) {
    font-size: 0.6rem;
  }
`

const Tr = styled.tr`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 10px;
  background-color: ${props => props.theme.colors.productRow};
  @media (max-width: 1040px) {
    gap: 5px;
  }
`

const HeadName = styled.td`
  display: flex;
  flex-direction: column;
  width: 20%;
  @media (max-width: 1040px) {
    width: 10%;
  }
`

const HeadPrice = styled.td`
  display: flex;
  flex-direction: column;
  width: 5%;
  @media (max-width: 1040px) {
    width: 10%;
  }
`

const HeadCategory = styled.td`
  display: flex;
  flex-direction: column;
  width: 10%;
  @media (max-width: 1040px) {
    width: 10%;
  }
`

const HeadDescription = styled.td`
  display: flex;
  flex-direction: column;
  width: 40%;
  @media (max-width: 1040px) {
    width: 30%;
  }
`

const HeadImage = styled.td`
  display: flex;
  flex-direction: column;
  width: 15%;
`

const HeadOptions = styled.td`
  display: flex;
  flex-direction: column;
  width: 96px;
  @media (max-width: 1040px) {
    width: 30px;
  }
`

function ProductHeader() {
  return (
    <Container>
      <Tr>
        <HeadName>Nombre</HeadName>
        <HeadPrice>Precio</HeadPrice>
        <HeadCategory>Categoria</HeadCategory>
        <HeadPrice>Stock</HeadPrice>
        <HeadDescription>Descripción</HeadDescription>
        <HeadImage>Imagen</HeadImage>
        <HeadOptions>Opciones</HeadOptions>
      </Tr>
    </Container>
  )
}

export default ProductHeader

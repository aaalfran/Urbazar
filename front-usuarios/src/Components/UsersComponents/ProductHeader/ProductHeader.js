import React from 'react'
import styled from 'styled-components'

const Container = styled.thead`
  box-sizing: border-box;
  width: 100%;
  font-weight: bold;
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
`

const HeadName = styled.td`
  display: flex;
  flex-direction: column;
  width: 20%;
`

const HeadPrice = styled.td`
  display: flex;
  flex-direction: column;
  width: 5%;
`

const HeadCategory = styled.td`
  display: flex;
  flex-direction: column;
  width: 10%;
`

const HeadDescription = styled.td`
  display: flex;
  flex-direction: column;
  width: 40%;
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
`

function ProductHeader() {
  return (
    <Container>
      <Tr>
        <HeadName>Nombre</HeadName>
        <HeadPrice>Precio</HeadPrice>
        <HeadCategory>Categoria</HeadCategory>
        <HeadCategory>Stock</HeadCategory>
        <HeadDescription>Descripción</HeadDescription>
        <HeadImage>Imagen</HeadImage>
        <HeadOptions>Opciones</HeadOptions>
      </Tr>
    </Container>
  )
}

export default ProductHeader

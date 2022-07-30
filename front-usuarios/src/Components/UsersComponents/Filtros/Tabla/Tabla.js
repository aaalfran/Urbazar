import React, { useRef } from 'react'
import axios from 'axios'
import Checkbox from '../../Checkbox/Checkbox'
import data from '../../../../enviroment'
import styled from 'styled-components'

const Container = styled.div`

`

const Wrapper = styled.ul`
  list-style-type: none;
  padding-left: 50px;
`

const Title = styled.h3`
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fontFamily};
  line-height: ${props => props.theme.lineHeight};
  text-align: left;
  font-size: 1rem;
  font-weight: bold;
  display: inline-block;
  padding-left: 30px;
`

const Label = styled.label`
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fontFamily};
  line-height: ${props => props.theme.lineHeight};
  margin-left: 5px;
`

const CheckboxInput = styled(Checkbox)`
  padding: 10px;
`

const Tabla = ({ updateProducts }) => {
  const filters = useRef([])
  const updateProductsList = async () => {
    const newProducts = []
    for (const filter of filters.current) {
      try {
        const response = await axios.get(`${data.url}/productos/categoria/${filter}`)
        const products = response.data
        for (const product of products) {
          newProducts.push(product)
        }
      } catch (error) {
        console.log('Hubo un error ' + error)
      }
    }
    updateProducts(newProducts)
  }

  const checkValue = (inputRef, checked) => {
    if (checked) {
      filters.current.push(inputRef.current.value)
    } else {
      filters.current = filters.current.filter((filter) => filter !== inputRef.current.value)
    }
    updateProductsList()
  }

  return (
    <Container className="filters-container">
      <Title>Categorias</Title>
      <Wrapper>
        <li>
          <CheckboxInput id="Ropa" action={checkValue} value="1"></CheckboxInput>
          <Label htmlFor="Ropa">Ropa</Label>
        </li>
        <li>
          <CheckboxInput id="Tecnologia" action={checkValue} value="2"></CheckboxInput>
          <Label htmlFor="Tecnologia">Tecnologia</Label>
        </li>
        <li>
          <CheckboxInput id="Comida" action={checkValue} value="3"></CheckboxInput>
          <Label htmlFor="Comida">Comida</Label>
        </li>
        <li>
          <CheckboxInput id="Hogar" action={checkValue} value="4"></CheckboxInput>
          <Label htmlFor="Hogar">Hogar</Label>
        </li>
        <li>
          <CheckboxInput id="Otros" action={checkValue} value="5"></CheckboxInput>
          <Label htmlFor="Otros">Otros</Label>
        </li>
      </Wrapper>
      <Title>
        Rango de Precios
      </Title>
      <Wrapper>
        <li>
          <CheckboxInput id="zero-twenty" action={checkValue}></CheckboxInput>
          <Label htmlFor="zero-twenty">0-20</Label>
        </li>
        <li>
          <CheckboxInput id="twenty-fifty" action={checkValue}></CheckboxInput>
          <Label htmlFor="twenty-fifty">20-50</Label>
        </li>
        <li>
          <CheckboxInput id="fifty-hundred" action={checkValue}></CheckboxInput>
          <Label htmlFor="fifty-hundred">50-100</Label>
        </li>
        <li>
          <CheckboxInput id="hundred-fivehundred" action={checkValue}></CheckboxInput>
          <Label htmlFor="hundred-fivehundred">100-500</Label>
        </li>
        <li>
          <CheckboxInput id="thousand-plus" action={checkValue}></CheckboxInput>
          <Label htmlFor="thousand-plus">1000+</Label>
        </li>
      </Wrapper>
    </Container>
  )
}

export default Tabla

/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Row, Col, Container } from 'reactstrap'
import '../../../css/Detalle.css'
import data from '../../../enviroment'
import axios from 'axios'
import styled from 'styled-components'
import Price from '../price/Price'

const CustomContainer = styled(Container)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: none;
  border: 1px solid ${props => props.theme.colors.border};
`

const CustomCol = styled(Col)`
  height: auto;
  .valor{
    padding: 0;
  }
`

const CustomRow = styled(Row)`
  box-sizing: border-box;
`

const CarritoDetalle = ({
  src,
  nombre,
  descripcion,
  precio,
  cantidad,
  idDetalle
}) => {
  const [borrado, setBorrado] = useState(false)
  const borrarElemento = () => {
    axios
      .delete(`${data.url}/detalle-carrito/${idDetalle}`)
      .then((res) => {
        window.location.reload()
      })
  }
  if (borrado) {
    return <span></span>
  } else {
    return (
      <CustomContainer className="productoContenedor">
        <div className="w-100 text-right borrarDiv">
          <span className="pr-5 borrar" onClick={borrarElemento}>
            X
          </span>
        </div>
        <CustomRow>
          <CustomCol>
            <div className="producto media" id="tarjeta1">
              <div className="foto_producto align-self-center mr-3">
                <img src={src} alt={nombre} />
              </div>
              <div className="descripcion">
                <div>
                  <h5>{nombre}</h5>
                </div>
                <div className="">
                  <div>
                    <p>{descripcion}</p>
                  </div>
                </div>
                <div>
                  <strong>Vendedor:</strong> prueba
                  <br />
                  Cantidad: {cantidad}
                </div>
              </div>
            </div>
          </CustomCol>
          <CustomCol sm="2">
            <div>
              <Price price={precio}></Price>
            </div>
          </CustomCol>
        </CustomRow>
      </CustomContainer>
    )
  }
}

export default CarritoDetalle

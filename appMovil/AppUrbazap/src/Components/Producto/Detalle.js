import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import NavBarComponent from '../navBar/navbarComponent'
import CategoriaComponent from '../navBar/CategoriaComponent'
import { Container } from 'reactstrap'
import axios from 'axios'
const Detalle = ({ route, navigation }) => {
  const { id } = route.params
  const [load, setLoad] = useState(false)
  const [producto, setProducto] = useState({})
  useEffect(() => {
    if (!load) {
      axios.get(`http://localhost:3000/productos/${id}`).then((response) => {
        setProducto(response.data)
      })
      setLoad(true)
    }
  }, [load])
  return (
        <View>
            <NavBarComponent></NavBarComponent>
            <CategoriaComponent></CategoriaComponent>
            {!load
              ? <></>
              : <Container className="d-flex flex-column justify-content-center align-items-center">
                    <h1 className="my-3">{producto.nombre}</h1>
                    <img src={producto.source} alt={producto.nombre} style={{
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '300px',
                      maxHeight: '300px'

                    }}></img>
                </Container>
            }

        </View>
  )
}

export default Detalle

import React from 'react'
import styled from 'styled-components'

import ProductPreview from '../../Components/UsersComponents/productPreview/ProductPreview'

const p1 = {
  imagePath:
    'https://scontent.fgye1-1.fna.fbcdn.net/v/t45.5328-0/143014009_5116363125071730_3563134346349294162_n.jpg?stp=c4.4.288.288a_dst-jpg_p296x100&_nc_cat=110&ccb=1-7&_nc_sid=c48759&_nc_ohc=lHYei8fUuvAAX-O-kr2&_nc_ht=scontent.fgye1-1.fna&oh=00_AT9ngD_z91_puEWUfnmGOZqPbkTYCDnQhxmIW_exBN9l3Q&oe=62AE2B88',
  name: 'Camiseta del idolo',
  price: 35.0,
  stars: '2',
  description:
    'Camiseta del idolo totalmente nueva, para que la lleves al estadio.',
  vendor: 'Natalia Ramirez'
}

const Container = styled.main`
  display: flex;
  padding: 0 200px;
`

const DetailsContainer = styled.div`
  flex: 3;
`

const SummaryContainer = styled.div`
  flex: 1;
`

function OrderDetails() {
  return (
    <Container>
      <DetailsContainer>
        <ProductPreview product={p1}></ProductPreview>
      </DetailsContainer>
      <SummaryContainer>
        <p>hola</p>
      </SummaryContainer>
    </Container>
  )
}

export default OrderDetails

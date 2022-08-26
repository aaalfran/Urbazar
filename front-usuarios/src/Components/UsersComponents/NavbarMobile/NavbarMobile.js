import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BsCartFill, BsClipboard, BsTruck } from 'react-icons/bs'

const Container = styled.nav`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: space-around;
  background-color: ${props => props.theme.colors.darkBlue};
  position: absolute;
  bottom: 0;
`

const CartIcon = styled(BsCartFill)`
  font-size: 1rem;
  color: ${props => props.theme.colors.white};
`

const ClipBoardIcon = styled(BsClipboard)`
  font-size: 1rem;
  color: ${props => props.theme.colors.white};
`

const TruckIcon = styled(BsTruck)`
  font-size: 1rem;
  color: ${props => props.theme.colors.white};
`

const Button = styled(Link)`
  padding: 5px;
`

function NavbarMobile () {
  return <Container>
    <Button>
      <CartIcon/>
    </Button>
    <Button>
      <ClipBoardIcon/>
    </Button>
    <Button>
      <TruckIcon/>
    </Button>
  </Container>
}

export default NavbarMobile

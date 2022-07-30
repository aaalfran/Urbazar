import React from 'react'
import styled from 'styled-components'
import { BsClock, BsBoxSeam, BsTruck, BsCheckCircleFill } from 'react-icons/bs'

const Container = styled.div`
  font-size: 2rem;
`

const IconRef = styled.div`
  position: relative;
`

const ClockIcon = styled(BsClock)`
  font-size: 2rem;
  position: absolute;
  top: -40px;
  right: -15px;
`

const BoxIcon = styled(BsBoxSeam)`
  font-size: 2rem;
  position: absolute;
  top: -40px;
  right: -15px;
`

const TruckIcon = styled(BsTruck)`
  font-size: 2rem;
  position: absolute;
  top: -40px;
  right: -15px;
`

const CheckIcon = styled(BsCheckCircleFill)`
  font-size: 2rem;
  margin-left: 20px;
`

const BarContainer = styled.div`
  display: flex;
  padding: 10px 0;
`

const Bar = styled.div`
  display: flex;
  width: 90%;
`

const BarFragmentBegin = styled.div`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 25%;
  height: 30px;
  border: 1px solid ${props => props.theme.colors.black};
  background-color: ${props => props.stateNumber >= 1 ? props.theme.colors.lightOrange : ''};
`

const BarFragmentMiddle1 = styled.div`
  width: 25%;
  height: 30px;
  border: 1px solid ${props => props.theme.colors.black};
  background-color: ${props => props.stateNumber >= 2 ? props.theme.colors.lightOrange : ''};
`

const BarFragmentMiddle2 = styled.div`
  width: 25%;
  height: 30px;
  border: 1px solid ${props => props.theme.colors.black};
  background-color: ${props => props.stateNumber >= 3 ? props.theme.colors.lightOrange : ''};
`

const BarFragmentEnd = styled.div`
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 25%;
  height: 30px;
  border: 1px solid ${props => props.theme.colors.black};
  background-color: ${props => props.stateNumber >= 4 ? props.theme.colors.lightOrange : ''};
`

const MessageContainer = styled.div`
  display: flex;
`

const Message = styled.p`
  width: 90%;
  text-align: center;
  font-size: 1rem;
`

function ProgressBar ({ state }) {
  let stateNumber = 0
  stateNumber = state === 'Pendiente' ? 1 : stateNumber
  stateNumber = state === 'Empaquetando' ? 2 : stateNumber
  stateNumber = state === 'Enviando' ? 3 : stateNumber
  stateNumber = state === 'Entregado' ? 4 : stateNumber

  return <Container>
    <BarContainer>
      <Bar>
        <BarFragmentBegin stateNumber={stateNumber} />
        <IconRef>
          <ClockIcon />
        </IconRef>
        <BarFragmentMiddle1 stateNumber={stateNumber} />
        <IconRef>
          <BoxIcon />
        </IconRef>
        <BarFragmentMiddle2 stateNumber={stateNumber} />
        <IconRef>
          <TruckIcon />
        </IconRef>
        <BarFragmentEnd stateNumber={stateNumber} />
      </Bar>
      {stateNumber === 4 ? <CheckIcon /> : ''}
    </BarContainer>
    <MessageContainer>
      <Message>Estado: {state}</Message>
    </MessageContainer>
  </Container>
}

export default ProgressBar

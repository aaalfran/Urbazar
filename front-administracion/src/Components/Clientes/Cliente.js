import { Container, Input, Table, Row, Col } from 'reactstrap'
import React, { useState } from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import CreateIcon from '@material-ui/icons/Create'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import AddIcon from '@material-ui/icons/Add'
import '../../css/Cliente.css'
import ClienteModal from './ClienteModal'
import { Redirect } from 'react-router-dom'

const Cliente = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  const auth = parseInt(localStorage.getItem('auth'), 10)
  const role = localStorage.getItem('role')

  if (auth && role === '3') {
    return (
        <Container className="mt-3 pr-0">
            <ClienteModal open={open} toggle={toggle}></ClienteModal>
            <div id="search">
                <Input className="col-md-12 input_busq pr-0" placeholder="Buscar..." />
            </div>
            <Table>
                <thead className="ClienteHead">
                    <tr>
                     <th className="TituloCliente">Clientes Villa Bonita</th>
                     <th width="4%">
                         <div id="button_Add" >
                         <AddIcon onClick={e => {
                           toggle()
                         }}/>
                         </div>
                         </th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td className="ClienteData" colSpan="2">
                            <Row>
                                <Col sm="1" className="d-flex align-items-center justify-content-center">
                                    <AccountCircleIcon fontSize="large"/>
                                </Col>
                                <Col sm="10" >
                                    <p className="m-0">Familia : Hernandez</p>
                                    <p className="m-0">Nombre: Javier Hernandez</p>
                                </Col>
                                <Col className="d-flex align-items-center">
                                <CreateIcon />
                                <DeleteOutlineIcon/>
                                </Col>
                            </Row>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
  } else {
    return <Redirect to='/'/>
  }
}

export default Cliente

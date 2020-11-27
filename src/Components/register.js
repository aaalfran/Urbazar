
import React, { Component } from 'react'
import '../css/register.css'

import logo2 from "../logo.jpg";
import { Card, Button, CardTitle, CardText ,  
    Form, FormGroup, Label, Input, 
    Container, Row, Col, DropdownMenu, DropdownItem, DropdownToggle} from 'reactstrap';

function register(){
    return(
    <Container>       
      <Row xs="1">

        <Col>        
        <Card body id="tarjeta">
            <div className= "Login-title">
                <div id="header"> 
                    <img src={logo2} className="Login-logo" alt="logo" />
                    <h3> UrbazApp </h3>            
                    
                </div>          
            </div>
            <form>
                <div className="datos">
                Datos personales
                <div className="form-row">
                    <FormGroup className="col-md-6">
                        <Input type="text" placeholder="Nombres" />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Input type="text" placeholder="Apellidos" />
                    </FormGroup>
                                    
                </div>
                <div className="form-row">
                    <FormGroup className="col-md-3">
                        <Input type="select" name="select" id="inputState" >
                            <option>Cédula</option>
                            <option>RUC</option>
                            <option>Pasaporte</option>
                        </Input>
                    </FormGroup>
                    <FormGroup className="col-md-9">
                        <Input type="text" placeholder="Identificación" />
                    </FormGroup>
                </div>
                <div >
                    <FormGroup >
                    <Input type="select" name="select" id="inputState" >
                    <option>Género</option>
                            <option>Masculino</option>
                            <option>Femenino</option>
                            <option>Otros</option>
                        </Input>
                    </FormGroup>
                </div>
                </div>
                <div className="datos1">
                Datos de contacto
                <div className="form-row">
                    <FormGroup className="col-md-6">
                        <Input type="text" placeholder="Teléfono" />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Input type="text" placeholder="Celular" />
                    </FormGroup>
                </div>                

                <div>
                    <FormGroup >
                        <Input type="text" placeholder="Correo electrónico" />
                    </FormGroup>
                </div>
                </div>
                <div className="datos1">
                Ubicación
                <div>
                    <FormGroup >
                            <Input type="text" placeholder="Urbanización"/>
                    </FormGroup>
                </div>
                <div className="form-row">
                    
                    <FormGroup className="col-md-4" >
                        <Input type="text" placeholder="Etapa"/>
                    </FormGroup>
                    <FormGroup className="col-md-4" >
                        <Input type="text" placeholder="Manzana"/>
                    </FormGroup>
                    <FormGroup className="col-md-4" >
                        <Input type="text" placeholder="Solar"/>
                    </FormGroup>
                </div>
                </div>
                <div class="datos1">
                Información de usuario
                <div className="form-row">
                    <FormGroup className="col-md-6">
                        <Input type="text" placeholder="Nuevo usuario" />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Input type="text" placeholder="Confirmar usuario" />
                    </FormGroup>
                                    
                </div>

                <div className="form-row">
                    <FormGroup className="col-md-6">
                        <Input type="password" placeholder="Contraseña" />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Input type="password" placeholder="Confirmar contraseña" />
                    </FormGroup>
                                    
                </div>
                </div>
                <div className="codigo_f">
                <FormGroup >
                        <Input type="text" placeholder="Código familiar" />
                    </FormGroup>
                </div>

                <div>
                    <Button>¡Unirme!</Button>
                    </div>
            </form>

        </Card>

        </Col>
    </Row>
    </Container>
    );
}

  
export default register;
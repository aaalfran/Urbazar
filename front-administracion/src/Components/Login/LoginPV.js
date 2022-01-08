import React from 'react'
import {
  Card, Button,
  Form, FormGroup, Input,
  Container
} from 'reactstrap'
import { Redirect } from 'react-router-dom'
import '../../css/LoginComponent.css'
import logoAzul from '../../imagenes/logoAzul.png'

function LoginComponent (props) {
  const auth = parseInt(localStorage.getItem('auth'), 10)
  const role = localStorage.getItem('role')

  if (auth && role === '3') {
    return <Redirect to='/report'/>
  } else {
    return (

        <Container className="container_login">
          <Card body id="tarjeta_login">

            <div>

              <div className= "Login-title">
                <h3> UrbazApp -<span style={{color:"#f4733e "}}> Administradores </span></h3>
                

              </div>
              <div className= "Login-title">
              <img src={logoAzul} className="Login-logo" alt="configuracion"  />
                </div>

              <div className= "Login-content">
                <div id="info">
                  <Form>
                    <FormGroup className="has-success">
                      <Input id="username" name="usuario" placeholder="Usuario"/>

                    </FormGroup>

                    <FormGroup className="has-success input_pass">
                    <Input id="password" type="password" name="contrasena" placeholder="Contraseña"/>

                    </FormGroup>
                    <div id="FeedbackLogin" className="feedback"></div>
                    <div id="cont_button">
                      <Button onClick={props.login} id="btn-round">
                        Ingresar
                      </Button>
                    </div>
                  </Form>

                </div>
              </div>

            </div>
          </Card>

          </Container>

    )
  }
}

export default LoginComponent


import logo2 from "../logo.jpg";
import React from "react";
import { Card, Button, CardTitle, CardText ,  
        Form, FormGroup, Label, Input, 
        Container, Row, Col} from 'reactstrap';

import '../css/LoginComponent.css'

function LoginComponent() {
    return (
     <html>
       
       <meta name="author" content="Beescript"/>
       <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

       <body>
      <Container>       
      <Row xs="1">

        <Col>        
        <Card body id="tarjeta">

          <div className= "Login-title">
          <CardTitle> 
            <h3> UrbazApp </h3>            
            <img src={logo2} className="Login-logo" alt="logo" />
          </CardTitle>          
          </div>

          <div className= "Login-content">
          <CardText id="info">          
            <Form>
              <FormGroup className="has-success">
              <Input type="text" name="user" id="user" placeholder="Usuario" />
              </FormGroup>
          
              <FormGroup className="has-success">
              <Input type="password" name="password" id="password" placeholder="Contraseña" />
              </FormGroup>
            </Form>  
            
                   
          </CardText>
          </div>
          <div id="cont_button">
            <Button id="btn-round" href="/">
              Ingresar 
            </Button> 
          </div>

          <div id="registrate">
            <p>¿No tienes una cuenta? <a href="/registro">Regístrate</a></p>
          </div>
        </Card>

          </Col>
        </Row>
        </Container>
        </body>
        
      </html>
      

    );

  }
  
  export default LoginComponent;

import logo2 from "../../..//logo.jpg";
import React from "react";

import { Card, Button, CardTitle, CardText ,  
        Form, FormGroup, Input, 
        Container} from 'reactstrap';
import {BrowserRouter as Router, Redirect} from 'react-router-dom';
import '../../../css/LoginComponent.css';

function LoginComponent(props) {
  if(props.auth){
    return  <Redirect to='/'/> 
  }
  else
{
    return (
     <html>
       <head>
          <meta name="author" content="Beescript"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
       </head>
       <body>
        <Container>       
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
                <div id="cont_button">
                  <Button onClick={props.login} id="btn-round">
                    Ingresar 
                  </Button> 
                </div>
              </Form>  
              
                    
            </CardText>
            </div>

            <div id="registrate">
              <p>¿No tienes una cuenta? <a href="/registro">Regístrate</a></p>
            </div>
          </Card>

          </Container>
        </body>
        
      </html>
      

    );
    }
  
}

  


  export default LoginComponent;
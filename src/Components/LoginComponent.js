
import logo2 from "../logo.jpg";
import React from "react";
import scriptt from "./login.js";
import { Card, Button, CardTitle, CardText ,  
        Form, FormGroup, Input, 
        Container} from 'reactstrap';
import '../css/LoginComponent.css';

function LoginComponent() {
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
              </Form>  
              
                    
            </CardText>
            </div>
            <div id="cont_button">
              <Button onClick={verificar()} id="btn-round">
                Ingresar 
              </Button> 
            </div>

            <div id="registrate">
              <p>¿No tienes una cuenta? <a href="/registro">Regístrate</a></p>
            </div>
          </Card>

          </Container>
          <script src={scriptt}> </script>
        </body>
        
      </html>
      

    );

  }

  function verificar() {
    fetch("http://localhost:3000/personas")
    .then(response => response.json())
    .then(personas=>{
        personas.map(persona=>{
        if(persona.username==="HOL" && persona.contrasena==="lj"){
            document.location.href="http://localhost:8080/";
        }
        })
        console.log("Acceso denegado");
    })

}

  export default LoginComponent;

import logo from '../logo.svg';

import React from "react";
import { Card, Button, CardTitle, CardText ,  
        Form, FormGroup, Label, Input, 
        Container, Row, Col} from 'reactstrap';

import '../css/LoginComponent.css'

function LoginComponent() {
    return (
    
      <div className="Login">
      <Container>
      
      <Row xs="1">

        <Col>
      
        
        <Card body inverse color="info">

          <div className= "Login-title">

          <CardTitle tag="h3"> Urbazar
            
            <img src={logo} className="Login-logo" alt="logo" />

          </CardTitle>
          
          </div>
          <div className= "Login-content">
          <CardText>
          
            <Form>
              <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              </FormGroup>

              <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
            </Form>
            
          </CardText>
          </div>

          <Button color="secondary"> Ingresar </Button>
        </Card>

          </Col>
        </Row>
        </Container>
      </div>

      

    );

  }
  
  export default LoginComponent;
import logo from './logo.svg';
import './App.css';
import { Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from "./Components/navBar/navbarAdmins";
import LoginComponent from './Components/Login/LoginPC';
import ToggleBar from "./Components/navBar/TogglemenuAdmins";
import GraphComponent from "./Components/GraphAndMaps/GraphComponent";
import FamiliaPC from "./Components/Familias/FamiliaPC";
import React,{useContext} from 'react';
import FamiliaPV from './Components/Familias/FamiliaPV';

function App() { 
  React.useEffect(() => {
    if(!localStorage.getItem("auth")){
      localStorage.setItem("auth", 0)
    }
    if(!localStorage.getItem("nombre_usuario")){
      localStorage.setItem("nombre_usuario", "")
    }
    if(!localStorage.getItem("userId")){
      localStorage.setItem("userId", "")
    }
    if(!localStorage.getItem("role")){
      localStorage.setItem("role", 0)
    }
    if(!localStorage.getItem("token")){
      localStorage.setItem("token", "")
    }
  
  })

  return (
    <>
      {!parseInt(localStorage.getItem("auth"), 10) ? (
          <React.StrictMode>
              <Router>
                <Switch>
                <Route path="/" exact component={LoginComponent}/>
              
                </Switch>
              </Router>
          </React.StrictMode>

          ) : (
            <React.StrictMode>
            <div className="container-fluid fondo">
            <div className="row">
          <Col sm="2">
          <ToggleBar/>
          </Col>
          <Col sm="10">
          <NavBar/>
          <Router>
          <Switch>
            <Route path="/report" exact component={GraphComponent}/>
            <Route path="/familias" exact component={FamiliaPC}/>
          </Switch>
      </Router> 

          </Col>
        </div>
      </div>
      </React.StrictMode>

          )}
          </>
     
      
     
    
  );
}

export default App;

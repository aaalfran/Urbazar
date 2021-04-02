import logo from './logo.svg';
import './App.css';
import React,{useContext} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from "./Components/navBar/navbarAdmins";
import LoginComponent from './Components/Login/LoginPC';
import ToggleBar from "./Components/navBar/TogglemenuAdmins";
import GraphComponent from "./Components/GraphAndMaps/GraphComponent";
import PanelEtapasPC from "./Components/Admin_Etapas/PanelEtapasPC";
import { Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Perfil from './Components/Perfil/Perfil';
import Cliente from './Components/Clientes/Cliente';
import Ubicaciones from './Components/Ubicaciones/Ubicaciones';

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

  const auth = parseInt(localStorage.getItem("auth"), 10)

  return (
    <React.StrictMode>
      {!auth ? (
              <Router>
                <Switch>
                <Route path="/login" exact component={LoginComponent}/>
              
                </Switch>
              </Router>

          ) : (
            <div className="container-fluid fondo">
        <div className="row">
          <Col sm="2">
          <ToggleBar/>
          </Col>
          <Col sm="10">
          <NavBar/>
          <Router>
          <Switch>
            <Route path="/login" exact component={LoginComponent}/>
            <Route path="/report" exact component={GraphComponent}/>
            <Route path="/etapas" exact component={PanelEtapasPC}/>
            <Route path="/admin/dashboard/account" exact component={Perfil}/>
            <Route path="/admin/dashboard/customer" exact component={Cliente}/>
            <Route path="/admin/dashboard/map" exact component={Ubicaciones}/>
          </Switch>
      </Router> 

          </Col>
        </div>
      </div>

          )}
     
      
     
    </React.StrictMode>
  );
}

export default App;

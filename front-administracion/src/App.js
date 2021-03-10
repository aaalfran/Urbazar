import logo from './logo.svg';
import './App.css';
import React,{useContext} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from "./Components/navBar/navbarAdmins";
import ToggleBar from "./Components/navBar/TogglemenuAdmins";
import MainAdmin from "./Components/Main/MainAdmins";
import GraphComponent from "./Components/GraphAndMaps/GraphComponent";
import PanelEtapasPC from "./Components/Admin_Etapas/PanelEtapasPC";
import { Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Perfil from './Components/Perfil/Perfil';

function App() {
  return (
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
            <Route path="/main" exact component={MainAdmin}/>
            <Route path="/report" exact component={GraphComponent}/>
            <Route path="/etapas" exact component={PanelEtapasPC}/>
            <Route path="/admin/dashboard/account" exact component={Perfil}/>

          </Switch>
      </Router> 

          </Col>
        </div>
      </div>

    </React.StrictMode>
  );
}

export default App;

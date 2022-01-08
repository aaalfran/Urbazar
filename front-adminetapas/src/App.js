import logo from "./logo.svg";
import "./App.css";
import { Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/navBar/navbarAdmins";
import LoginComponent from "./Components/Login/LoginPC";
import ToggleBar from "./Components/navBar/TogglemenuAdmins";
import GraphComponent from "./Components/GraphAndMaps/GraphComponent";
import FamiliaPC from "./Components/Familias/FamiliaPC";
import React, { useContext } from "react";
import FamiliaPV from "./Components/Familias/FamiliaPV";
import Perfil from "./Components/Perfil/Perfil";
import Productos from "./Components/Productos/Productos";
import "./css/MainComponent.css";

function App() {
  React.useEffect(() => {
    if (!localStorage.getItem("auth")) {
      localStorage.setItem("auth", 0);
    }
    if (!localStorage.getItem("nombre_usuario")) {
      localStorage.setItem("nombre_usuario", "");
    }
    if (!localStorage.getItem("userId")) {
      localStorage.setItem("userId", "");
    }
    if (!localStorage.getItem("role")) {
      localStorage.setItem("role", 0);
    }
    if (!localStorage.getItem("token")) {
      localStorage.setItem("token", "");
    }
    if (!localStorage.getItem('activeIndex')) {
      localStorage.setItem('activeIndex', 0)
    }

  });

  return (
    <>
      {!parseInt(localStorage.getItem("auth"), 10) ? (
        <React.StrictMode>
          <Router>
            <Switch>
              <Route path="/" exact component={LoginComponent} />
            </Switch>
          </Router>
        </React.StrictMode>
      ) : (
        <React.StrictMode>
          <div className="container-fluid fondo">
            <NavBar />
            <div className="row contenedorToggle">
            <Col xs={3} sm={3} className="colToggle">
                  <ToggleBar />
                </Col>
              <Col  xs={9} sm={9} className="pr-3 bodycontainer">
                <Router>
                  <Switch>
                    <Route path="/report" exact component={GraphComponent} />
                    <Route path="/familias" exact component={FamiliaPC} />
                    <Route path="/admin/dashboard/account" exact component={Perfil} />
                    <Route path="/admin/dashboard/productos" exact component={Productos} />
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

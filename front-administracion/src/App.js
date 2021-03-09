import logo from './logo.svg';
import './App.css';
import React,{useContext} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from "./Components/navBar/navbarAdmins";
import ToggleBar from "./Components/navBar/TogglemenuAdmins";
import MainAdmin from "./Components/Main/MainAdmins";
import GraphComponent from "./Components/GraphAndMaps/GraphComponent";

function App() {
  return (
    <React.StrictMode>
      <ToggleBar/>
      <Router>
          <Switch>
            <Route path="/main" exact component={MainAdmin}/>
            <Route path="/report" exact component={GraphComponent}/>
            
          </Switch>
      </Router> 
    </React.StrictMode>
  );
}

export default App;

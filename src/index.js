import React,{useContext} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginComponent from './Components/LoginComponent';
import Register from './Components/register';
import CarritoComponent from './Components/CarritoComponent';
import ProductComponent from './Components/ProductDeatilComponent';
import MainComponent from './Components/MainComponent';
import CategoriaComponent from './Components/CategoriaComponent';
import ContactanosComponent from './Components/ContactanosComponent';
import DesarrolladoresComponent from './Components/DesarrolladoresComponent';
import AboutUsComponent from './Components/AboutUSComponent';
import testJSON from './Components/testJSON';
import GraphComponent from './Components/GraphComponent';
import MainAdmins from './Components/MainAdmins';
import PanelProducts from './Components/PanelProducts';
import AccountComponent from './ComponentsAdmins/Account/Account';
import ClientesComponent from './Components/ClientesComponent';
import MapComponent from './Components/MapComponent';
import CatalogoComponent from './Components/CatalogoComponent';
import PerfilComponent from './Components/PerfilComponent';


const Index = () =>{

  React.useEffect(() => {
    if(!localStorage.getItem("carrito")){
      localStorage.setItem("carrito","")
    }
    if(!localStorage.getItem("precio")){
      localStorage.setItem("precio",0)
    }
  
  })

  return (
    <React.StrictMode>
      <Router>
        <Route path="/login" exact component={LoginComponent}/>
        <Route path="/registro" exact component={Register}/>
        <Route path="/" exact component={MainComponent}/>
        <Route path="/carrito" exact component={CarritoComponent}/>
        <Route path="/productdetail/:id" exact component={ProductComponent}/>
        <Route path="/categoria" exact component={CategoriaComponent}/>
        <Route path="/contactanos" exact component={ContactanosComponent}/>
        <Route path="/devs" exact component={DesarrolladoresComponent}/>
        <Route path="/aboutus" exact component={AboutUsComponent}/>
        <Route path="/test" exact component={testJSON}/>
        <Route path="/admin/dashboard" exact component={MainAdmins}/>
        <Route path="/admin/dashboard/report" exact component={GraphComponent}/>
        <Route path="/admin/dashboard/panel" exact component={PanelProducts}/>
        <Route path="/admin/dashboard/account" exact component={AccountComponent}/>
        <Route path="/admin/dashboard/customer" exact component={ClientesComponent}/>
        <Route path="/admin/dashboard/map" exact component={MapComponent}/>
        <Route path="/buscador" exact component={CatalogoComponent}/>
        <Route path="/perfil" exact component={PerfilComponent}/>
      </Router>
    </React.StrictMode>
  )

}


ReactDOM.render(<Index />,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

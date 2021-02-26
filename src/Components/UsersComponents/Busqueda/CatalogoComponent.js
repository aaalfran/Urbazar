import NavbarComponent from '../navBar/navbarComponent';
import BusquedaComponent from './BusquedaComponent';
import {Redirect,useParams} from 'react-router-dom';
import '../../../css/catalogo.css';
import React,{useState} from "react";

let ParamBusqueda = () =>{
    let {id} = useParams();
    if(id){
        return(
            <BusquedaComponent categoria={id}/>
        );
    }
    return(
        <BusquedaComponent categoria={""}/>
    );

}
let Buscador = ({match}) => {
    if((localStorage.getItem("auth")==="false")){ 
        return  <Redirect to='/login'/> 
        
        }
    else{

        return(
            <html>      
                <head>
                <meta name="author" content="Beescript"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            
                </head> 
                <body>
                <NavbarComponent/>
                <ParamBusqueda/>

                </body>
        </html> 
        );
    }
}

export default Buscador;
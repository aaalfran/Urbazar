import NavbarComponent from '../navBar/navbarComponent';
import BusquedaComponent from './BusquedaComponent';
import {Redirect} from 'react-router-dom';
import '../../../css/catalogo.css';

function Buscador(){
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
                <BusquedaComponent/>

                </body>
        </html> 
        );
    }
}

export default Buscador;
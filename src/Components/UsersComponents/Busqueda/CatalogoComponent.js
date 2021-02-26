import NavbarComponent from '../navBar/navbarComponent';
import BusquedaComponent from './BusquedaComponent';
import {Redirect} from 'react-router-dom';
import '../../../css/catalogo.css';

function Buscador(){
    const auth = parseInt(localStorage.getItem("auth"), 10)
    const role= localStorage.getItem("role");
    
    
    if( auth && (role=="0" || role=="1")){         
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
    else if(auth && (role=="2" || role=="3")){
        return  <Redirect to='/admin/dashboard/report'/> 
    }
    else return  <Redirect to='/login'/> 
}

export default Buscador;
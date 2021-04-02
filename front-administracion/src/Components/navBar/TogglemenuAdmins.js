import React from 'react';
import logo from "../../logo.svg";

const ToggleMenuAdmin = () => {

  

    return ( 
    
    <>
        
        <div className='toggleMenu toggle_admin'>
                      
            <div id="logo_box">
                <img className="rounded-lg p-3" src={process.env.PUBLIC_URL + "/Uapp.svg"} alt="uapp"/>
                <p className="m-0 titulo">UrbazApp </p>
            </div>
            
            <div className='toggleContenido'>   
                <a href='/report'> <i className="fas fa-tasks"></i> Reportes</a>   
                <a href='/etapas'><i className="fas fa-street-view"> </i>Administrar etapas</a>
                <a href='/admin/dashboard/customer'> <i className="fas fa-users"></i> Clientes</a>
                <a href='/admin/dashboard/map'> <i className="fas fa-street-view"> </i>Ubicaciones</a>
                       
            </div> 
            
        </div>      
                
        
        
    </>
  
    );
}
 
export default ToggleMenuAdmin;
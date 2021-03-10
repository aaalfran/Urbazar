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
                <a href='/report'>Reportes</a>   
                <a href='/etapas'>Administrar etapas</a>
                <a href='/admin/dashboard/customer'>Clientes</a>
                <a href='/admin/dashboard/map'>Ubicaciones</a>
                <a href='/admin/dashboard/report'>Reportes</a>
                <a href='/admin/dashboard/account'>Perfil</a>
                       
            </div> 
            
        </div>      
                
        
        
    </>
  
    );
}
 
export default ToggleMenuAdmin;
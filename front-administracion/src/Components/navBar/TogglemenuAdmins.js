import React from 'react';
import logo from "../../logo.svg";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css";
const ToggleMenuAdmin = () => {

  

    return ( 
    
    <>
        
        <div className='toggleMenu toggle_admin col-2'  style={{transform: 'translateX(0px)' , transition: '0.3s'}}>
                      
            <div id="logo_box">
                <img src={logo}/>
                <p>UrbazApp </p>
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
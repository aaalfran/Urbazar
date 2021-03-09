import React from 'react';
import logo from "../../logo.svg";
const ToggleMenuAdmin = () => {

  

    return ( 
    
    <>
        
        <div className='toggleMenu toggle_admin col-2'  style={{transform: 'translateX(0px)' , transition: '0.3s'}}>
                      
            <div id="logo_box">
                <img src={logo}/>
                <p>UrbazApp </p>
            </div>
            
            <div className='toggleContenido'>   
                <a href='/report'><i class="fas fa-tasks"></i>Reportes</a>   
                <a href='/main'><i class="fas fa-tasks"></i>Administrar etapas</a>
                <a href='/admin/dashboard/customer'><i className="fas fa-users"></i>Clientes</a>
                <a href='/admin/dashboard/map'><i className="fas fa-street-view"></i>Ubicaciones</a>
                <a href='/admin/dashboard/report'><i className="fas fa-file-invoice-dollar"></i>Reportes</a>
                <a href='/admin/dashboard/account'><i className="fas fa-user-tie"></i>Perfil</a>
                       
            </div> 
            
        </div>      
                
        
        
    </>
  
    );
}
 
export default ToggleMenuAdmin;
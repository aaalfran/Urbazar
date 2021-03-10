import React from 'react';
const ToggleMenuAdmin = () => {

  

    return ( 
    
    <>
        
        <div className='toggleMenu toggle_admin'>
                      
            <div id="logo_box">
                <img className="rounded-lg p-3" src={process.env.PUBLIC_URL + "/Uapp.svg"} alt="uapp"/>
                <p className="m-0 titulo">UrbazApp </p>
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
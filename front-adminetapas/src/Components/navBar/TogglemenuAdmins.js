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
                <a href='/familias'><i className="fas fa-street-view"> </i>Familias</a>
                <a href='/admin/dashboard/productos'> <i className="fas fa-users"></i> Productos </a>
                       
            </div> 
            
        </div>      
                
        
        
    </>
  
    );
}
 
export default ToggleMenuAdmin;
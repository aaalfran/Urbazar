import React from 'react';
import CategoriaComponent from './CategoriaComponent';

const ToggleMenu = ({isOpen, setIsOpen}) => {

    const cerrar = () => {setIsOpen(!isOpen)};
    let menu = document.getElementById('bodyApp');

    if(isOpen) {
        menu.style.overflow = 'hidden';
    } else {
        menu.style.overflow = 'auto';
    }

    return ( 
    
    <>
        {isOpen ?  
        <div className='toggleMenu' style={{transform: isOpen ? 'translateX(0px)' : 'translateX(-100%)', transition: '0.3s'}}>
            <div className='toggleTitulo'>
                <p className='p_toggleMenu'>Menú</p>
                <button className='btn-cerrar-toggle' onClick={cerrar}><i className="fas fa-times fa-lg"></i></button>
            </div>
            
            <div className='togglePerfil'>
                <div className='img_perfil_div'>
                    <i className="fas fa-user-circle fa-2x"></i>
                </div>
                <div id='perfilTags'>
                    <p id='toggleNombre'>Walther López</p>
                    <p id='toggleTipoUser'>Comprador</p>
                </div>
            </div>
            <div className='toggleContenido'>
                <p className='p_seccionToggler'>Categorías</p>  
                <hr className="my-2" /> 
                <CategoriaComponent isToggle={true}/>
                <br/>                
                <p className='p_seccionToggler'>Configuración</p>
                <hr className="my-2" />
                <a href='/'><i className="fas fa-user-alt"></i>Perfil</a>
                <a href='/'><i className="fas fa-cog"></i>Configuración</a>
                <a href='/'><i className="fas fa-exclamation-circle"></i>Reportar</a>
                
                <br/>
                <p className='p_seccionToggler'>Más</p>
                <hr className="my-2" />
                <a href='/devs'><i class="fas fa-user-alt"></i>Equipo de desarrollo</a>
                <a href='/contactanos'><i class="fas fa-cog"></i>Contactanos</a>
                <a href='/aboutus'><i class="fas fa-exclamation-circle"></i>¿Qué hacemos?</a>                
                <br/>
            
            <div className='toggleCerrarSesion'>
                <a id='btn_cerrarSesion' href='/login' ><i class="fas fa-sign-out-alt"></i>  Cerrar Sesión</a>
            </div>
            </div> 
            
        </div>      
                
        : console.log('menu cerrado') }
        
    </>
  
    );
}
 
export default ToggleMenu;
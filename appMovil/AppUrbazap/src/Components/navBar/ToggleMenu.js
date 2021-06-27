import React from 'react'
import CategoriaComponent from './CategoriaComponent'

const ToggleMenu = (props) => {
  const cerrar = () => {
    console.log('cerrando')
  }
  return (

    <>

        <div className='toggleMenu' style={{ transform: props.isOpen ? 'translateX(0px)' : 'translateX(-100%)', transition: '0.3s' }}>
            <div className='toggleTitulo'>
                <p className='p_toggleMenu'>Menú</p>
                <button className='btn-cerrar-toggle' onClick={cerrar}><i className="fas fa-times fa-lg"></i></button>
            </div>

            <div className='togglePerfil'>
                <div className='img_perfil_div'>
                    <i className="fas fa-user-circle fa-2x"></i>
                </div>
                <div id='perfilTags'>
                    <p id='toggleNombre'>{localStorage.getItem('nombre_usuario')}</p>
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
                <a href='/perfil'><i className="fas fa-user-alt"></i>Perfil</a>
                <a href='/'><i className="fas fa-cog"></i>Configuración</a>
                <a href='/'><i className="fas fa-exclamation-circle"></i>Reportar</a>

                <br/>
                <p className='p_seccionToggler'>Más</p>
                <hr className="my-2" />
                <a href='/devs'><i className="fas fa-user-alt"></i>Equipo de desarrollo</a>
                <a href='/contactanos'><i className="fas fa-cog"></i>Contactanos</a>
                <a href='/aboutus'><i className="fas fa-exclamation-circle"></i>¿Qué hacemos?</a>
                <br/>

            <div className='toggleCerrarSesion'>
                <a id='btn_cerrarSesion' onClick={props.logout} href="/login" ><i className="fas fa-sign-out-alt"></i>  Cerrar Sesión</a>
            </div>
            </div>

        </div>

    </>

  )
}

export default ToggleMenu

import React from 'react'
import CategoriaComponent from './CategoriaComponent'

const ToggleMenu = (props) => {
  const cerrar = () => { props.setIsOpen(!props.isOpen) }
  const menu = document.getElementById('bodyApp')

  if (props.isOpen) {
    menu.style.overflow = 'hidden'
  } else {
    menu.style.overflow = 'auto'
  }

  return (

    <>
        {props.isOpen
          ? <div className='toggleMenu' style={{ transform: 'translateX(0px)', transition: '0.3s' }}>
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
                <a href='/perfil' className="colora"><i className="fas fa-user-alt colora"></i>
                <span className="colora">
                Perfil
                </span>

                </a>
                <a href='/' className="colora"><i className="fas fa-cog colora"></i>
                <span className="colora">
                Configuración
                </span></a>
                <a href='/' className="colora"><i className="fas fa-exclamation-circle colora"></i>
                <span className="colora">
                Reportar
                </span></a>

                <br/>
                <p className='p_seccionToggler'>Más</p>
                <hr className="my-2" />
                <a href='/devs' className="colora"><i className="fas fa-user-alt colora"></i>
                <span className="colora">
                Equipo de desarrollo
                </span></a>
                <a href='/contactanos' className="colora"><i className="fas fa-cog colora"></i>
                <span className="colora">
                Contactanos
                </span></a>
                <a href='/aboutus' className="colora"><i className="fas fa-exclamation-circle colora"></i>
                <span className="colora">
                ¿Qué hacemos?
                </span></a>
                <br/>

            <div className='toggleCerrarSesion'>
                <a id='btn_cerrarSesion' onClick={props.logout} href="/login" ><i className="fas fa-sign-out-alt"></i>  Cerrar Sesión</a>
            </div>
            </div>

        </div>

          : console.log('menu cerrado') }

    </>

  )
}

export default ToggleMenu

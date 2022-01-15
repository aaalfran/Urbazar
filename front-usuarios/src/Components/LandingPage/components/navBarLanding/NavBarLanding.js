import './navBarLanding.css'
import logoUrbazapp from '../../images/logoUrbazapp.png'

export const NavBarLanding = () => {
  return (
    <div className="landing-page-bar-container container d-flex justify-content-center">
      <div id="landing-page-bar" className="row">
        <div className="col-12 col-md-6 d-flex no-wrap align-items-end">
          <img src={logoUrbazapp} width="70px"></img>
          <h1>
            Urbaz<span>App</span>
          </h1>
        </div>
        <div className="col-12 col-md-6 d-flex wrap">
          <button>Iniciar Sesión</button>
          <button>Registrarme</button>
        </div>
      </div>
    </div>
  )
}

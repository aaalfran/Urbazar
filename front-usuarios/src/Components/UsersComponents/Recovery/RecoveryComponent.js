import NavbarComponent from "../navBar/navbarComponent";
import logoUrbazapp from '../../LandingPage/images/logoUrbazapp.png'

import './header.css'
import './RecoveryComponent.css'

import { Button } from "reactstrap";

function Recovery(){

    return (
        <div id="general">
            <div id="landing-page-bar" className="row">
                <div className="col-6 d-flex no-wrap align-items-end">
                <img src={logoUrbazapp} width="70px"></img>
                 <h1>
                    Urbaz<span>App</span>
                 </h1>
            </div>
            <div className="col-6 d-flex align-items-end justify-content-end">
                <button>Iniciar Sesión</button>
                <button>Registrarme</button>
            </div>
        </div>
        
        <div id="recuadro">
            <h3>RECUPERACION DE CONTRASEÑA</h3>
            <h6>Ingrese su correo electrónico para recuperar su contraseña</h6>
            <label for="email"></label>
            <input type="email" id="email" name="email"></input>
            <Button>Recuperar</Button>
        </div>

        </div>
    );
}

export default Recovery;
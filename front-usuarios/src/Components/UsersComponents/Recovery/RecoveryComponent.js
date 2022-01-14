import NavbarComponent from "../navBar/navbarComponent";
import logoUrbazapp from '../../LandingPage/images/logoUrbazapp.png'

import './header.css'
import './RecoveryComponent.css'

import { Button, FormGroup } from "reactstrap";

function Recovery(){

    return (
        <div id="general">
            <div id="landing-page-bar" className="row">
                <div className="col-6 d-flex no-wrap align-items-center">
                    <img src={logoUrbazapp} width="70px"></img>
                    <h1>
                        Urbaz<span>App</span>
                    </h1>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end">
                    <button>Iniciar Sesión</button>
                    <button>Registrarme</button>
                </div>
            </div>
        
            <div id="recuadro">
                <div id="titulo-recovery">
                    <h3>RECUPERACION DE CONTRASEÑA</h3>
                </div>
                <div id="titulo-desc">
                    <h6>Ingrese su correo electrónico para recuperar su contraseña</h6>
                </div>
                <FormGroup id="input-correo">
                    <label for="email"></label>
                    <input type="email" id="email" name="email" placeholder="Correo"></input>
                </FormGroup>
                <div id="btn-contenedor">
                    <Button id="btn-recuperar">Recuperar</Button>
                </div>
            
            </div>

        </div>
    );
}

export default Recovery;
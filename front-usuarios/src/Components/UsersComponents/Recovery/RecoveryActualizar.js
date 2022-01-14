import logoUrbazapp from '../../LandingPage/images/logoUrbazapp.png'
import React from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import {
    Card, Button, CardTitle,
    Form, FormGroup, Input,
    Container
  } from 'reactstrap'
import './header.css'
import './RecoveryActualizar.css'



function RecoveryCorreoEnviado(){

    const [viewPassword, setViewPassword] = React.useState(false)

    const changeView = () =>{
        setViewPassword(!viewPassword)
    }

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
                    <h6>Ingresar nueva contraseña</h6>
                </div>
                <FormGroup id="input-password">
                    <div className="input-group">
                        {
                            viewPassword? 
                            <Input id="password" type="text" name="contrasena" placeholder="Contraseña" />
                            :    
                                                                                                                
                            <Input id="password" type="password" name="contrasena" placeholder="Contraseña" />
                            }
                            <div className="btn_eye" onClick={changeView}>
                                {viewPassword?
                                <VisibilityIcon style={{color:"red"}}/>
                                :
                                <VisibilityOffIcon/>
                                }
                            </div>
                    </div>
                </FormGroup>
                <div id="btn-contenedor">
                    <Button id="btn-recuperar">Actualizar</Button>
                </div>
            
            </div>

        </div>
    );
}

export default RecoveryCorreoEnviado;
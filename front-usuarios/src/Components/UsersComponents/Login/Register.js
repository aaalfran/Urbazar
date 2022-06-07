
import React from 'react'
import '../../../css/register.css'
import NavbarComponent from "../Registro/navBarRegistro"
import { Redirect } from 'react-router-dom'
import {
  Card, Button, CardTitle,
  Form, FormGroup, Input,
  Container
} from 'reactstrap'
import '../../../css/LoginComponent.css'
import logo2 from '../../../imagenes/logoUrbazapp.PNG'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

function Register(props) {
    const [viewPassword, setViewPassword] = React.useState(false)

    const changeView = () =>{
        setViewPassword(!viewPassword)
    }

    const auth = parseInt(localStorage.getItem('auth'), 10)
    const role = localStorage.getItem('role')

    if (auth && (role == '2' || role == '3')) {
        return <Redirect to='/admin/dashboard/report' />
    } else if (auth && (role == '0' || role == '1')) {
        return <Redirect to='/' />
    } else {
        return (
            <div id="cont_general">
              
                    <div id="seccionForm">
                        <div className="img_urbi">
                        <div className='fotoLogoL img-fluid'>
                             <img src={logo2} />
                        </div>
                        <div className='cajaLogo'>
                            <span className="Urbaz-partL">Urbaz</span><span className="app-partL">App</span>
                        </div>
                        </div>
                        <div className="panelDatos">
                            <Container className="container_reg">
                                <Card body id="tarjeta" className="trj">
                                    <div id="logo_resp">
                                        <img src={logo2} />
                                    </div>

                                    <div>

                                        <div className="Login-title">
                                                <h3> Iniciar Sesión </h3>
                                        </div>

                                        <div className="Login-content">
                                            <div id="info">
                                                <Form>
                                                    <FormGroup className="has-success">
                                                        <Input id="username" name="usuario" placeholder="Usuario" />
                                                    </FormGroup>

                                                    <FormGroup className="has-success input_pass">
                                                        <div className="input-group">
                                                            {
                                                            viewPassword? 
                                                            <Input id="passwordLog" type="text" name="contrasena" placeholder="Contraseña" />
                                                            :    
                                                                                                                
                                                            <Input id="passwordLogin" type="password" name="contrasena" placeholder="Contraseña" />
                                                            }
                                                                <div className="btn_eyeLogin" onClick={changeView}>
                                                                    {viewPassword?
                                                                        <VisibilityIcon style={{color:"red"}}/>
                                                                    :
                                                                        <VisibilityOffIcon/>
                                                                    }
                                                                </div>
                                                        </div>
                                                        


                                                    </FormGroup>
                                                    <div id="FeedbackLogin" className="feedback"></div>
                                                    <div id="cont_button">
                                                        <Button onClick={props.login} id="btn-round">
                                                            Iniciar Sesióncd 
                                                        </Button>
                                                    </div>
                                                </Form>

                                            </div>
                                        </div>

                                        <div id="registrate">
                                            <p><a href="/recovery">He olvidado mi contraseña</a></p>
                                            <p>¿No tiene una cuenta? <span className="regis"><a href="">Regístrese</a></span></p>
                                        </div>
                                    </div>
                                </Card>
                            </Container>

                        </div>
                    </div>
                 
            </div>





        );
    }


}

export default Register

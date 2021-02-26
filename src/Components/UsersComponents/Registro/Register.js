
import React, { Component } from 'react'
import '../../../css/register.css';
import NavbarComponent from "./navBarRegistro";
import PaymentInputs from "../Carrito/PaymentComponent";
import StepComponent from "./StepComponent";
import {Redirect} from 'react-router-dom';
import { Card, CardTitle, CardText, 
        Container} from 'reactstrap';
import logo2 from "../../../imagenes/banner_reg_ofi.png";


function Register(props) {
    const edades= getEdades();

    const [checkTarjeta, setCheckTarjeta] = React.useState(false);
    
    const handleChecked = (event) => {
        setCheckTarjeta({checkTarjeta: event.target.checked });
        //addPaymentComponent();
    };
    const auth = parseInt(localStorage.getItem("auth"), 10)
    const role= localStorage.getItem("role");
        
        
    if( auth && (role=="2" || role=="3")){ 
        return  <Redirect to='/admin/dashboard/report'/> 
    }
    else if(auth && (role=="0" || role=="1")){
        return  <Redirect to='/'/> 
    }
    else{      

        

        
        return (
            <div id="cont_general">

                <div className="cabecera">
                    <NavbarComponent/>
                </div>

                <div id="cont_secForm">
                    <div id="seccionForm">
                        <div className="img_urbi col-md-5">
                            <img src={logo2} />
                        </div>
                        <div className="panelDatos col-md-7">
                            <Container className="container_reg">       
                                <Card body id="tarjeta" className="trj">
                                    <CardTitle>
                                    <h4> ¡Registrate en UrbazApp!</h4>
                                      <p>  Todo lo que buscas más cerca que nunca </p>
                                      <div id="feedbackvacios"></div>
                                    </CardTitle>
                                    <CardText>
                                        <form>
                                            <StepComponent 
                                            signUp={props.signUp}
                                            usernames = {props.usernames}
                                            validarCedula={props.validarCedula}
                                            validarTelefono={props.validarTelefono}
                                            validarCorreo = {props.validarCorreo}
                                            validarVacios = {props.validarvacios}
                                            handleModal={props.handleModal}/>
                                        </form>
                                    </CardText>
                                </Card>
                            </Container>

                        </div>
                    </div>
                </div>
            </div>

        
       


    );
    }
    

}
function getEdades(){
    let ages = []
    for(let i=12; i<100; i++){
      ages.push(i)
    }
    return ages
}

export default Register;
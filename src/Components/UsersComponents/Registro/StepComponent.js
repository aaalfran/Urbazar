import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import EncryptPassword from "../Login/EncryptPassword";
import {Input, Label, FormGroup, FormFeedback, FormText} from "reactstrap";
import PaymentComponent from "../Carrito/PaymentComponent";
import axios from 'axios';
import ModalComponent from "./ModalComponent";


class HorizontalNonLinearStepper extends Component{
  constructor(props){
    super(props)
    this.state = {
      activeStep: 0,
      user_check: false,
      password_check: false,
      password2_check: false,
      codigo_check: false,
      form:{
        nombres: "",
        apellidos: "",
        genero:"",
        edad:0,
        identificacion: "",
        telefono: "",
        correo: "",
        username: "",
        password: "",
        password2: "",
        nro_tarjeta: "",
        fecha_tarjeta: "",
        cvc_tarjeta: "",
        codigoF: ""


      }
    }
    
    

    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleStep = this.handleStep.bind(this);
    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.signUp = this.signUp.bind(this);
    this.validarUSername = this.validarUSername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handlePasswordCheck = this.handlePasswordCheck.bind(this);
    this.validarCodigo = this.validarCodigo.bind(this);

    
  }
  
  steps = this.getSteps();
  
  

 

  getEdades(){
    let ages = []
    for(let i=12; i<100; i++){
      
      ages.push(i.toString())
    }
    return ages
  }

  getSteps() {
    return ['Datos personales', 'Información de usuario'];
  }
  
  GetStepContent(step) {
    
  
    switch (step) {
      case 0:
        const edades = this.getEdades();
        return (
            <div className="cont_formulario">
              <FormGroup className="groupLabels">
                  <Input 
                    className="first_child" 
                    id="nombres" name="nombres" 
                    onChange={this.handleChangeForm} 
                    placeholder="Nombres"
                    value={this.state.form.nombres}/>

                  <Input 
                    className="second_child" 
                    id="apellidos" 
                    name="apellidos" 
                    onChange={this.handleChangeForm} 
                    placeholder="Apellidos" 
                    value={this.state.form.apellidos}/>

              </FormGroup>
              <FormGroup className="groupLabels">
                  <Input className="first_child" type="select" value="Género" name="genero" onChange={this.handleChangeForm} value={this.state.form.genero}>
                    <option value="" hidden selected>Género</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Otro">Otro</option>
                  </Input>
                    
              
              <Input className="second_child" type="select" name="edad" onChange={this.handleChangeForm} value={this.state.form.edad}>
                  <option value="" hidden selected>Edad</option>
                    {edades.map(edad=>(
                      <option> {edad} </option>
                    ))}
                  </Input>
              </FormGroup>
              
              <FormGroup>
                <Input 
                  className="col-md-12" 
                  id="identificacion" 
                  name="identificacion" 
                  placeholder="Identificación" 
                  onChange={this.handleChangeForm}
                  value={this.state.form.identificacion}/>
                <div id="FormFeedbackId" className="feedback"></div>

              </FormGroup>
              <FormGroup>
                <Input 
                  className="col-md-12" 
                  id="telefono" 
                  name="telefono" 
                  placeholder="Teléfono" 
                  onChange={this.handleChangeForm} 
                  value={this.state.form.telefono}/>
                  <div id="FormFeedbackTlf" className="feedback"></div>

              </FormGroup>
              <FormGroup>
                  <Input 
                    className="col-md-12" 
                    type="email"
                    id="correo" 
                    name="correo" 
                    placeholder="Correo" 
                    onChange={this.handleChangeForm}
                    value={this.state.form.correo}/>
                    <div id="FormFeedbackMail" className="feedback"></div>

              </FormGroup>
            </div>
        );
      case 1:
        return (
          <div className="cont_formulario">
              <FormGroup>
                  <Input 
                  id="username" 
                  name="username" 
                  onChange={this.handleChangeForm} 
                  onBlur={this.validarUSername}
                  placeholder="Nombre de usuario"
                  value={this.state.username}/>
                  <div id="FormFeedbackUser" className="feedback"></div>
                  
              </FormGroup>
              <FormGroup className="groupLabels">
                <div className="first_child" >
                  <Input 
                  id="password" 
                  type="password"
                  name="password" 
                  onChange={this.handleChangeForm} 
                  onBlur={this.handlePassword}
                  placeholder="Contraseña"
                  value={this.state.form.password}/>
                  <div id="FormFeedbackPassword" className="feedback"></div>
                </div>

                <div className="second_child"  >
                  <Input 
                  id="password2" 
                  type="password"
                  name="password2"
                  placeholder="Confirmar contraseña"
                  onChange={this.handleChangeForm} 
                  onBlur={this.handlePasswordCheck}
                  value={this.state.form.password2} />
                  <div id="FormFeedbackPassword2" className="feedback"></div>
                </div>

              </FormGroup>
              <FormGroup className="metodo" check>              
                <PaymentComponent/>
              </FormGroup>
                    
              <FormGroup>
                <Input 
                  className="col-md-12" 
                  id="codigoF" 
                  name="codigoF" 
                  onChange={this.handleChangeForm} 
                  onBlur={this.validarCodigo}
                  value={this.state.form.codigoF}
                  placeholder="Código familiar" />

                <FormText>Tu administrador de etapa debe proporcionarte este código</FormText>
                <div id="FormFeedbackCodigo" className="feedback"></div>
              </FormGroup>
              
            </div>
  
        );
      
      default:
        return 'Unknown step';
    }
  }
  
  
  
  
  totalSteps(){
    return this.steps.length;
  };


  isLastStep(){
    return this.state.activeStep === this.totalSteps() - 1;
  };


  async handleChangeForm(e){
    await this.setState({
      form:{
        ...this.state.form, [e.target.name]: e.target.value
      }
    })
    console.log(this.state.form)
  }


  handleNext(){
    
   if( this.props.validarVacios() && (this.props.validarCedula() && this.props.validarTelefono() && this.props.validarCorreo())){
      const newActiveStep = this.state.activeStep + 1;
      this.setState({activeStep: newActiveStep});

    }

  };

  handleBack(){
    let newstate = this.state.activeStep - 1
    this.setState({activeStep: newstate});
  };

  handleStep(step){
    this.setState({activeStep: step});
  };

  handleUserCheck(){
    this.setState({user_check: !this.state.user_check})
  }

  validarUSername(e){
    let user =  e.target.value;
    let usernames = this.props.usernames;
    let feed = document.getElementById("FormFeedbackUser");
    let user_id = document.getElementById("username");
    let disp=true;
    
    

    for(let i=0; i<usernames.length; i++){
      if(usernames[i].username===user){
        feed.innerHTML = ("Nombre de usuario no disponible");
        user_id.style.border="1px solid red";     
        
        disp=false

      }
    }
    if(disp){
      if(user.length<=3){
        feed.innerHTML = ("El usuario debe contener al menos 4 letras");
        user_id.style.border="1px solid red";     
        
      }
      else{
        feed.innerHTML = ("Usuario disponible");
        user_id.style.border="1px solid green";    
        this.handleUserCheck()
      }

    }
    
  }

  handlePassword(e){
    let pass = e.target.value;
    let input_pass = document.getElementById("password");
    let feed = document.getElementById("FormFeedbackPassword");
    let message="";
    let color="red";

    let regEx2 = /(?=.*[A-Z])/;
    let regEx3= /(?=\w*\d)/;
    let regEx4= /\S{8,16}$/;

    
    if(!regEx4.test(pass))
      message= "Mínimo 8 caracteres "
    
    else if(!regEx2.test(pass))
      message= "Incluya 1 letra mayúscula"
    
    else if(!regEx3.test(pass))
      message= "Incluya 1 digito"
    
    else{
      message= "Contraseña válida"
      color="green"
      this.setState({password_check: !this.state.password_check})
    }
    feed.innerHTML = (message);
    input_pass.style.border="1px solid "+ color;

  }

  handlePasswordCheck(){
    let message=""
    let color=""
    let feed = document.getElementById("FormFeedbackPassword2");
    let input_pass2 = document.getElementById("password2");

    if(this.state.form.password != this.state.form.password2){
      message="Las contraseñas no coinciden";
      color="red";

    }else{
       color="green"
       this.setState({password2_check: true})
    }
    
    feed.innerHTML = (message);
    input_pass2.style.border="1px solid "+ color;

    


  }

  validarCodigo(){
    let feed = document.getElementById("FormFeedbackCodigo");
    let divcodigo = document.getElementById("codigoF");
    let codigoF = this.state.form.codigoF;
    let url = "http://localhost:3000/familias?filter[where][apellido]=" + this.state.form.apellidos;
    axios.get(url)
    .then(response => {
      console.log(response)
      return response.data[0]})
    .then( res=> {
      if(res.clave===codigoF){
        feed.innerHTML = "";
        divcodigo.style.border="1px solid green"
        this.setState({codigo_check: true})
      }else{
        feed.innerHTML = "Código inválido";
        divcodigo.style.border="1px solid red"

      }
      
    })
    .catch(e=> {
      feed.innerHTML = "Familia no registrada";
      divcodigo.style.border="1px solid red";
    })



  }
  


  async signUp(){
    var divVacios = document.getElementById("feedbackvacios");
    
   

    let pass_encrypt = await EncryptPassword(this.state.form.password);


    let data = { 
        nombre: this.state.form.nombres +" " +this.state.form.apellidos,
        
        identificacion: this.state.form.identificacion,
        edad: parseInt(this.state.form.edad, 10),
        telefono: this.state.form.telefono,
        correo: this.state.form.correo,
        username: this.state.form.username,
        contrasena: pass_encrypt,
        genero: this.state.form.genero,
        role: 0        
    }
    
    console.log(data);
    if(this.props.validarVacios() && this.state.user_check && this.state.password_check && this.state.password2_check && this.state.codigo_check){
      axios.post("http://localhost:3000/personas", data)
          .then(response => response.data)
          .then( res=> console.log(res))
      this.props.handleModal()
    }else{
      divVacios.innerHTML = ("Rectifique los campos indicados");
      divVacios.style.backgroundColor="#FFC4CC";
      divVacios.style.color="white";

    }
  }

  




  

  render(){
    return (
      
      <div> 
        <ModalComponent 
                    handleModal={this.handleModal}
                    estado={this.state.liveDemo}/>
        <div>
          
            <div className="cont_formulario">
              <div >{this.GetStepContent(this.state.activeStep)}</div>
              
                
            </div>
            </div>
            {this.isLastStep() ? (
              <div id="buttonsControl">
                <Button disabled={this.state.activeStep === 0} onClick={this.handleBack}> 
                  Atrás
                </Button>
                <Button
                  id="next"
                  onClick={this.signUp}>
                  
                
                  ¡Unirme!
                </Button>
                </div>
          ) : (
            <div id="buttonsControl">
                <Button disabled={this.state.activeStep === 0} onClick={this.handleBack}> 
                  Atrás
                </Button>
                <Button
                  id="next"
                  variant="contained"
                  onClick={this.handleNext}>
                  
                
                  Siguiente
                </Button>
              </div>
          )}
      </div>
    );
  }
}

export default HorizontalNonLinearStepper;
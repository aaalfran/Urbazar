import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import EncryptPassword from '../Login/EncryptPassword'
import { Input, FormGroup, FormText } from 'reactstrap'
import CardDateExpiration from './CardDateExpiration'
import axios from 'axios'
import ModalComponent from './ModalComponent'
import data from '../../../enviroment'
// import { Link } from 'react-router-dom'
// import styled from 'styled-components'
/*
const Enlace = styled(Link)`
    color:#02023D;
    padding-left:1px;
`
*/

class HorizontalNonLinearStepper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeStep: 0,
      user_check: false,
      password_check: false,
      password2_check: false,
      codigo_check: false,
      familia_id: 0,
      idPersona: 0,
      etapa_id: 0,
      form: {
        nombres: '',
        apellidos: '',
        genero: '',
        edad: 0,
        identificacion: '',
        telefono: '',
        correo: '',
        username: '',
        password: '',
        password2: '',
        // nro_tarjeta: '',
        // fecha_tarjeta: '',
        // cvc_tarjeta: '',
        codigoF: ''
      }
    }

    this.handleNextOne = this.handleNextOne.bind(this)
    this.handleNextTwo = this.handleNextTwo.bind(this)
    this.signUp = this.signUp.bind(this)
    this.validarUSername = this.validarUSername.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handlePasswordCheck = this.handlePasswordCheck.bind(this)
    this.validarCodigo = this.validarCodigo.bind(this)
    this.handleChangeForm = this.handleChangeForm.bind(this)
  }

  steps = this.getSteps();

  getEdades() {
    const ages = []
    for (let i = 12; i < 100; i++) {
      ages.push(i.toString())
    }
    return ages
  }

  getSteps() {
    return ['Datos personales', 'Información de usuario', 'Tarjeta de Crédito']
  }

  GetStepContent(step) {
    const edades = this.getEdades()
    switch (step) {
      case 0:
        return (
            <div className="cont_formulario">
                <div id="mensajeTarjeta">Ingrese su Información personal</div>
              <FormGroup className="groupLabels">
                  <FormGroup>
                    <Input
                      className="first_child"
                      id="nombres" name="nombres"
                      onChange={this.handleChangeForm}
                      placeholder="Nombres"
                      value={this.state.form.nombres}/>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      className="second_child"
                      id="apellidos"
                      name="apellidos"
                      onChange={this.handleChangeForm}
                      placeholder="Apellidos"
                      value={this.state.form.apellidos}/>
                  </FormGroup>
              </FormGroup>
              <FormGroup className="groupLabels">
                  <FormGroup>
                    <Input id="genero" className="first_child" type="select" name="genero" onChange={this.handleChangeForm} value={this.state.form.genero}>
                    <option value="" hidden>Género</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Otro">Otro</option>
                  </Input>
                  </FormGroup>
                  <FormGroup>
                    <Input className="second_child" type="select" name="edad" onChange={this.handleChangeForm} value={this.state.form.edad}>
                    <option value="" hidden>Edad</option>
                      {edades.map(edad => (
                        <option key={edad}> {edad} </option>
                      ))}
                    </Input>
                  </FormGroup>
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
        )
      case 1:
        return (
          <div className="cont_formulario">
            <div id="mensajeTarjeta">Ingrese sus datos de registro</div>
              <FormGroup>
                  <Input
                  id="usernameRegister"
                  name="username"
                  onChange={this.handleChangeForm}
                  onBlur={this.validarUSername}
                  placeholder="Nombre de usuario"
                  value={this.state.form.username}/>
                  <div id="FormFeedbackUser" className="feedback"></div>
              </FormGroup>
              <FormGroup className="groupLabels">
                <div className="first_child" >
                  <FormGroup>
                    <Input
                    id="password2"
                    type="password"
                    name="password"
                    onChange={this.handleChangeForm}
                    onBlur={this.handlePassword}
                    placeholder="Contraseña"
                    value={this.state.form.password}/>
                    <div id="FormFeedbackPassword" className="feedback"></div>
                  </FormGroup>
                  <FormGroup>
                  <Input
                  id="password2"
                  type="password"
                  name="password2"
                  placeholder="Confirmar contraseña"
                  onChange={this.handleChangeForm}
                  onBlur={this.handlePasswordCheck}
                  value={this.state.form.password2} />
                  <div id="FormFeedbackPassword2" className="feedback"></div>
                  </FormGroup>
                </div>
              </FormGroup>

              <FormGroup className="metodo" check>

               </FormGroup>

              <FormGroup>
                <Input
                  id="codigoF"
                  name="codigoF"
                  onChange={this.handleChangeForm}
                  onBlur={this.validarCodigo}
                  value={this.state.form.codigoF}
                  placeholder="Código familiar" />
                <FormText><span className="text-white">Tu administrador de etapa debe proporcionarte este código</span></FormText>
                <div id="FormFeedbackCodigo" className="feedback"></div>
              </FormGroup>
            </div>
        )
      case 2:
        return (<div>
          <div className="cont_formulario">
          <div id="mensajeTarjeta">Ingrese infomación de su tarjeta de Crédito (Opcional)</div>
          <FormGroup>
                  <Input id = "titularTarjetaRegister" name = "titularTarjetaRegister" onChange = { this.handleChangeForm }placeholder = "Nombre del titular"/>
                  <div id = "FormFeedTitularTarjerta" className="feedback"></div>
            </FormGroup>
          <FormGroup>
                  <Input id="numeroTarjetaRegister" name="numeroTarjetaRegister" onChange={this.handleChangeForm} maxLength="16" placeholder="Número de tarjeta"/>
                  <div id="FormFeedNumeroTarjerta" className="feedback"></div>
            </FormGroup>
            <p>Fecha de expiración</p>
            <div id="grupoRegistro">
            <FormGroup>
              <CardDateExpiration></CardDateExpiration>
            </FormGroup>
            <FormGroup>
                  <Input maxLength="4" id="cvcRegister" name="cvcRegister" onChange={this.handleChangeForm} placeholder="CVC"/>
                  <div id="FormFeedNumeroTarjerta" className="feedback"></div>
            </FormGroup>
            </div>
           </div>
        </div>)

      default:
        return 'Unknown step'
    }
  }

  totalSteps() {
    return this.steps.length
  };

  isLastStep() {
    return this.state.activeStep === this.totalSteps() - 1
  };

  handleChangeForm(e) {
    this.setState({
      form: {
        ...this.state.form, [e.target.name]: e.target.value
      }
    })
  }

  handleNextOne() {
    if (this.props.validarVacios() && (this.props.validarCedula() && this.props.validarTelefono() && this.props.validarCorreo())) {
      const newActiveStep = this.state.activeStep + 1
      this.setState({ activeStep: newActiveStep })
    }
  };

  handleNextTwo() {
    if (this.props.validarVacios() && this.state.password_check && this.state.password2_check) {
      const newActiveStep = this.state.activeStep + 1
      this.setState({ activeStep: newActiveStep })
    }
  }

  handleBack() {
    window.location.reload(true)
  };

  handleStep(step) {
    this.setState({ activeStep: step })
  };

  validarUSername(e) {
    const user = e.target.value
    const usernames = this.props.usernames
    const feed = document.getElementById('FormFeedbackUser')
    const user_id = document.getElementById('usernameRegister')
    let disp = true

    for (let i = 0; i < usernames.length; i++) {
      if (usernames[i].username === user) {
        feed.innerHTML = ('Nombre de usuario no disponible')
        user_id.style.border = '1px solid red'

        disp = false
      }
    }
    if (disp) {
      if (user.length <= 3) {
        feed.innerHTML = ('El usuario debe contener al menos 4 letras')
        user_id.style.border = '1px solid red'
        this.setState({ user_check: false })
      } else {
        feed.innerHTML = ('Usuario disponible')
        user_id.style.border = '1px solid green'
        feed.style.color = 'green'
        this.setState({ user_check: true })
      }
    }
  }

  handlePassword(e) {
    const pass = e.target.value
    const input_pass = document.getElementById('password2')
    const feed = document.getElementById('FormFeedbackPassword')
    let message = ''
    let color = 'red'

    const regEx2 = /(?=.*[A-Z])/
    const regEx3 = /(?=\w*\d)/
    const regEx4 = /\S{8,16}$/

    if (!regEx4.test(pass)) { message = 'Mínimo 8 caracteres ' } else if (!regEx2.test(pass)) { message = 'Incluya 1 letra mayúscula' } else if (!regEx3.test(pass)) { message = 'Incluya 1 digito' } else {
      message = 'Contraseña válida'
      color = 'green'
      feed.style.color = color
      this.setState({ password_check: true })
    }
    feed.innerHTML = (message)
    input_pass.style.border = '1px solid ' + color
  }

  handlePasswordCheck() {
    let message = ''
    let color = ''
    const feed = document.getElementById('FormFeedbackPassword2')
    const input_pass2 = document.getElementById('password2')

    if (this.state.form.password !== this.state.form.password2) {
      message = 'Las contraseñas no coinciden'
      color = 'red'
      this.setState({ password2_check: false })
    } else {
      color = 'green'
      feed.style.color = color
      this.setState({ password2_check: true })
    }

    feed.innerHTML = (message)
    input_pass2.style.border = '1px solid ' + color
  }

  validarCodigo() {
    const feed = document.getElementById('FormFeedbackCodigo')
    const divcodigo = document.getElementById('codigoF')
    const codigoF = this.state.form.codigoF
    const url = `${data.url}/familias?filter[where][clave]=` + codigoF
    axios.get(url)
      .then(response => {
        return response.data
      })
      .then(res => {
        if (res.length > 0) {
          this.setState({ familia_id: res[0].id })
          this.setState({ etapa_id: res[0].idEtapa })

          feed.innerHTML = ''
          feed.style.color = 'green'
          divcodigo.style.border = '1px solid green'
          this.setState({ codigo_check: true })
        } else {
          feed.innerHTML = 'Código inválido'
          divcodigo.style.border = '1px solid red'
          this.setState({ codigo_check: false })
        }
      })
      .catch(e => {
        feed.innerHTML = 'Familia no registrada'
        divcodigo.style.border = '1px solid red'
        this.setState({ codigo_check: false })
      })
  }

  async signUp() {
    // const divVacios = document.getElementById('feedbackvacios')

    const pass_encrypt = await EncryptPassword(this.state.form.password)

    const info = {
      nombre: this.state.form.nombres + ' ' + this.state.form.apellidos,
      identificacion: this.state.form.identificacion,
      edad: parseInt(this.state.form.edad, 10),
      telefono: this.state.form.telefono,
      correo: this.state.form.correo,
      username: this.state.form.username,
      contrasena: pass_encrypt,
      genero: this.state.form.genero,
      role: 0,
      vendedorTipo: 0,
      activo: 1,
      id_etapa: this.state.etapa_id
    }

    if (this.state.user_check && this.state.password_check && this.state.password2_check && this.state.codigo_check) {
      axios.post(`${data.url}/personas`, info).then(() => {
        axios.get(`${data.url}/personas`).then((res) => {
          const persona = res.data.filter((persona) => persona.username === info.username)
          this.setState({ idPersona: persona[0].id })
          const data_cliente = {
            idPersona: this.state.idPersona,
            idFamilia: this.state.familia_id,
            subscripcion: 0
          }
          axios.post(`${data.url}/clientes`, data_cliente).then(() => {
            axios.get(`${data.url}/clientes`).then((res) => {
              console.log('Res antes de crear carrito')
              console.log(res)
              const cliente = res.data.filter((cliente) => cliente.idPersona === this.state.idPersona)
              console.log('array filtrado')
              console.log(cliente)
              axios.post(`${data.url}/carrito`, { id: cliente[0].id, idUsuario: cliente[0].id })
            })
          })
        })
      })
        .catch(e => console.log('Hubo un error', e))
      this.props.handleModal()
    } else {
      // divVacios.innerHTML = ('Rectifique los campos indicados')
      // divVacios.style.backgroundColor = '#FFC4CC'
      // divVacios.style.color = 'white'
    }
  }

  render() {
    return (

      <div id="HOLA">
        <ModalComponent
                    handleModal={this.handleModal}
                    estado={this.state.liveDemo}/>
        <div>

            <div className="cont_formulario">
              <div >{this.GetStepContent(this.state.activeStep)}</div>

            </div>
            </div>
            {this.isLastStep()
              ? (
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
                )
              : (
            <div id="buttonsControl">
                <Button disabled={this.state.activeStep === 0} onClick={this.handleBack}>
                  Atrás
                </Button>
                <Button
                  id="next"
                  variant="contained"

                  onClick={this.state.activeStep === 0 ? this.handleNextOne : this.handleNextTwo}
                  >
                  Siguiente
                </Button>

              </div>

                )}
      </div>
    )
  }
}

export default HorizontalNonLinearStepper

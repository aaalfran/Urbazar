import NavbarComponent from '../navBar/navbarComponent'
import logoUrbazapp from '../../LandingPage/images/logoUrbazapp.png'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import NavBarLanding from '../../LandingPage/components/navBarLanding/NavBarLanding'
import './RecoveryComponent.css'
import { useState } from 'react'
import validator from 'validator'
import { Button, FormGroup } from 'reactstrap'

function Recovery() {
  var parametros = {
    correo: ''
  }

  const [input, setInput] = useState('')

  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value

    if (validator.isEmail(email)) {
      setEmailError('')
    } else {
      setEmailError('Ingrese un correo valido')
    }
  }

  function sendEmail(e) {
    e.preventDefault()
    parametros.correo = input

    emailjs
      .send(
        'service_ww5512d',
        'template_ja4eqf7',
        parametros,
        'user_KDuxs3qSHhiZiepVEuClQ'
      )
      .then(
        (result) => {
          console.log(result.text)
          console.log(input)
          alert('El correo con la instrucciones ha sido enviado', result.text)
        },
        (error) => {
          console.log(error.text)
          alert('Error al enviar el correo', error.text)
        }
      )
  }

  return (
    <div id="general">
      <div id="nav-bar">
        <NavBarLanding></NavBarLanding>
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
          <input
            value={input}
            onInput={(e) => setInput(e.target.value)}
            onChange={(e) => validateEmail(e)}
            type="email"
            id="email"
            name="email"
            placeholder="Correo"
          />
          <br />
          <span
            style={{
              fontWeight: 'bold',
              color: 'red'
            }}
          >
            {emailError}
          </span>
        </FormGroup>
        <div id="btn-contenedor">
          <Button onClick={sendEmail} id="btn-recuperar">
            Recuperar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Recovery

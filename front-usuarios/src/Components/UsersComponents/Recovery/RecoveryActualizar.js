import logoUrbazapp from '../../LandingPage/images/logoUrbazapp.png'
import React from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import {
  Card,
  Button,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Container
} from 'reactstrap'
import NavBarLanding from '../../LandingPage/components/navBarLanding/NavBarLanding'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator'
import './RecoveryActualizar.css'

function RecoveryCorreoEnviado() {
  const [viewPassword, setViewPassword] = React.useState(false)

  const changeView = () => {
    setViewPassword(!viewPassword)
  }

  const [errorMessage, setErrorMessage] = useState('')

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
      })
    ) {
      setErrorMessage('Proteccion: Fuerte')
    } else {
      setErrorMessage('Proteccion: Debil')
    }
  }

  function ayudaPassword() {
    alert(
      'Una clave fuerte tiene al menos 8 caracteres, 1 mayuscula, 1 numero y 1 alfanumerico'
    )
  }

  function actualizado() {
    alert('Su clave fue actualizada exitosamente')
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
          <h6>Ingresar nueva contraseña</h6>
        </div>
        <FormGroup id="input-password">
          <div className="input-group-pass">
            {viewPassword ? (
              <Input
                onChange={(e) => validate(e.target.value)}
                id="password"
                type="text"
                name="contrasena"
                placeholder="Contraseña"
              />
            ) : (
              <Input
                onChange={(e) => validate(e.target.value)}
                id="password"
                type="password"
                name="contrasena"
                placeholder="Contraseña"
              />
            )}
            <div className="btn_eye" onClick={changeView}>
              {viewPassword ? (
                <VisibilityIcon style={{ color: 'red' }} />
              ) : (
                <VisibilityOffIcon />
              )}
            </div>
          </div>
          <div id="mensaje">
            <span
              style={{
                fontWeight: 'bold',
                color: 'red'
              }}
            >
              {errorMessage}
            </span>
            <Button onClick={ayudaPassword} id="btn-ayuda">
              ?
            </Button>
          </div>
        </FormGroup>
        <div id="btn-contenedor">
          <Link to={'/login'}>
            <Button onClick={actualizado} id="btn-recuperar">
              Actualizar
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RecoveryCorreoEnviado

import { defineFeature, loadFeature } from 'jest-cucumber'

const feature = loadFeature('C:/Users/Walter/Desktop/UrbazarFork/Urbazar/front-usuarios/src/Components/UsersComponents/__test__/cucumberTesting/features/login.feature')

defineFeature(feature, test => {
  test('Iniciar sesion con usuario registrado', ({ given, when, and, then }) => {
    given('la persona tiene un usuario registrado', () => {

    })

    when('la persona ingresa sus credenciales:', (table) => {

    })

    and('la persona hace click en Iniciar Sesion', () => {

    })

    then('la persona inicia sesion', () => {

    })

    and('es redirigida a la pagina principal', () => {

    })
  })

  test('Iniciar sesion con usuario no registrado', ({ given, when, and, then }) => {
    given('la persona no tiene usuario registrado', () => {

    })

    when('la persona ingresa sus credenciales:', (table) => {

    })

    and('la persona hace click en Iniciar Sesion', () => {

    })

    then('el sistema muestra un error', () => {

    })
  })
})

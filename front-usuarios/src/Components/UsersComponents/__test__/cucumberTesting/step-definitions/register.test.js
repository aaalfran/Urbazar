import { defineFeature, loadFeature } from 'jest-cucumber'

const feature = loadFeature('C:/Users/Walter/Desktop/UrbazarFork/Urbazar/front-usuarios/src/Components/UsersComponents/__test__/cucumberTesting/features/register.feature')

defineFeature(feature, test => {
  test('registro exitoso con datos validos y sin tarjeta', ({ given, when, and, then }) => {
    given('el usuario ingresa datos validos:', (table) => {

    })

    when('el usuario da click en omitir ingreso de tarjeta', () => {

    })

    and('el usuario da click en boton registrar', () => {

    })

    then('aparece un mensaje de registro exitoso', () => {

    })
  })

  test('registro exitoso con datos validos y con tarjeta', ({ given, when, and, then }) => {
    given('el usuario ingresa datos validos:', (table) => {

    })

    when('el usuario da click en boton registrar', () => {

    })

    then('aparece un mensaje de registro exitoso', () => {

    })
  })
})

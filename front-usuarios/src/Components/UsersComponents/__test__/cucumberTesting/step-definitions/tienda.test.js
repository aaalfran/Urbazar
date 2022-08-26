import { defineFeature, loadFeature } from 'jest-cucumber'

const feature = loadFeature('C:/Users/Walter/Desktop/UrbazarFork/Urbazar/front-usuarios/src/Components/UsersComponents/__test__/cucumberTesting/features/tienda.feature')

defineFeature(feature, test => {
  test('El usuario agrega producto con stock al carrito', ({ given, when, and, then }) => {
    given('productos en la tienda:', (table) => {

    })

    when('El usuario escoge un producto:', (table) => {

    })

    and(/^el usuario escoge una cantidad: (\d+)$/, (arg0) => {

    })

    and('el usuario da click al boton agregar carrito', () => {

    })

    then('el producto es agregado al carrito del usuario', () => {

    })

    and('el stock del producto agregado disminuye en la cantidad escogida', () => {

    })
  })

  test('El usuario agrega producto sin stock al carrito', ({ given, when, and, then }) => {
    given('productos en la tienda:', (table) => {

    })

    when('El usuario escoge un producto:', (table) => {

    })

    and(/^el usuario escoge una cantidad: (\d+)$/, (arg0) => {

    })

    and('el usuario da click al boton agregar carrito', () => {

    })

    then('el producto no es agregado al carrito del usuario', () => {

    })

    and('se presenta un mensaje de que no hay stock del producto', () => {

    })
  })
})

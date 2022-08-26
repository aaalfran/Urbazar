Feature: Tienda

    Scenario: El usuario agrega producto con stock al carrito
        Given productos en la tienda:
            | nombre  | stock | precio |
            | zapatos | 30    | 10     |
            | camisa  | 0     | 15     |
            | alcohol | 200   | 3      |
        When El usuario escoge un producto:
            | nombre  | stock | precio |
            | zapatos | 30    | 10     |
        And el usuario escoge una cantidad: 5
        And el usuario da click al boton agregar carrito
        Then el producto es agregado al carrito del usuario
        And el stock del producto agregado disminuye en la cantidad escogida

    Scenario: El usuario agrega producto sin stock al carrito
        Given productos en la tienda:
            | nombre  | stock | precio |
            | zapatos | 30    | 10     |
            | camisa  | 0     | 15     |
            | alcohol | 200   | 3      |
        When El usuario escoge un producto:
            | nombre | stock | precio |
            | camisa | 0     | 15     |
        And el usuario escoge una cantidad: 2
        And el usuario da click al boton agregar carrito
        Then el producto no es agregado al carrito del usuario
        And se presenta un mensaje de que no hay stock del producto



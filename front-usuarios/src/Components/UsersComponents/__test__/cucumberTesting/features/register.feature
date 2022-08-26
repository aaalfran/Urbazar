Feature: registro

    Scenario: registro exitoso con datos validos y sin tarjeta
        Given el usuario ingresa datos validos:
            | nombres      | apellidos      | genero    | edad | identificacion | telefono   | correo            | usuario | clave    | codigo |
            | Eduardo Jose | Gallegos Perez | Masculino | 25   | 0934521343     | 0976453621 | edperez@gmail.com | edperez | clAve123 | 1637   |
        When el usuario da click en omitir ingreso de tarjeta
        And el usuario da click en boton registrar
        Then aparece un mensaje de registro exitoso

    Scenario: registro exitoso con datos validos y con tarjeta
        Given el usuario ingresa datos validos:
            | nombres      | apellidos      | genero    | edad | identificacion | telefono   | correo            | usuario | clave    | codigo |
            | Eduardo Jose | Gallegos Perez | Masculino | 25   | 0934521343     | 0976453621 | edperez@gmail.com | edperez | clAve123 | 1637   |
        When el usuario da click en boton registrar
        Then aparece un mensaje de registro exitoso


Feature: Login

    Scenario: Iniciar sesion con usuario registrado
        Given la persona tiene un usuario registrado
        When la persona ingresa sus credenciales:
            | usuario | clave       |
            | pepe    | Mayorga1234 |
        And la persona hace click en Iniciar Sesion
        Then la persona inicia sesion
        And es redirigida a la pagina principal

    Scenario: Iniciar sesion con usuario no registrado
        Given la persona no tiene usuario registrado
        When la persona ingresa sus credenciales:
            | usuario  | clave     |
            | natroram | miClave12 |
        And la persona hace click en Iniciar Sesion
        Then el sistema muestra un error


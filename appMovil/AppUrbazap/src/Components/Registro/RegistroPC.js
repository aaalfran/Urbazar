import axios from 'axios';
import data from '../../../enviroment';
//import BcryptReactNative from 'bcrypt-react-native'


export function validarCodigo(codigoF){
    let url = `http://${data.url}/familias?filter[where][clave]=` + codigoF;

    axios.get(url)
    .then(response => {
      return response.data})
    .then( res=> {
      if(res.length>0 ){
        console.log(res)
        setRetorno(true)
      }
      
    }) 
    .catch(e=> {
      console.log("Familia no registrada");
    })



  }

  export function validarCedula (cedula) {
    if (cedula.length == 10) {
      // Obtenemos el digito de la region que sonlos dos primeros digitos
      const digito_region = cedula.substring(0, 2)

      // Pregunto si la region existe ecuador se divide en 24 regiones
      if (digito_region >= 1 && digito_region <= 24) {
        // Extraigo el ultimo digito
        const ultimo_digito = cedula.substring(9, 10)

        // Agrupo todos los pares y los sumo
        const pares = parseInt(cedula.substring(1, 2)) + parseInt(cedula.substring(3, 4)) + parseInt(cedula.substring(5, 6)) + parseInt(cedula.substring(7, 8))

        // Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
        let numero1 = (cedula.substring(0, 1) * 2)
        if (numero1 > 9) { numero1 = (numero1 - 9) }

        let numero3 = (cedula.substring(2, 3) * 2)
        if (numero3 > 9) { numero3 = (numero3 - 9) }

        let numero5 = (cedula.substring(4, 5) * 2)
        if (numero5 > 9) { numero5 = (numero5 - 9) }

        let numero7 = (cedula.substring(6, 7) * 2)
        if (numero7 > 9) { numero7 = (numero7 - 9) }

        let numero9 = (cedula.substring(8, 9) * 2)
        if (numero9 > 9) { numero9 = (numero9 - 9) }

        const impares = numero1 + numero3 + numero5 + numero7 + numero9

        // Suma total
        const suma_total = (pares + impares)

        // extraemos el primero digito
        const primer_digito_suma = String(suma_total).substring(0, 1)

        // Obtenemos la decena inmediata
        const decena = (parseInt(primer_digito_suma) + 1) * 10

        // Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
        let digito_validador = decena - suma_total

        // Si el digito validador es = a 10 toma el valor de 0
        if (digito_validador == 10) { digito_validador = 0 }

        // Validamos que el digito validador sea igual al de la cedula
        if (digito_validador == ultimo_digito) {
          return true
          //Aquí es válida
        } else {
          return false
        }
      } else {
        // imprimimos en consola si la region no pertenece
        return false
      }
    } else {
      // imprimimos en consola si la cedula tiene mas o menos de 10 digitos
      return false
    }
  }


  export function validarTelefono (numeroTelefono) {

    const expresionRegular1 = /^([0-9]+){9}$/// <--- con esto vamos a validar el numero
    const expresionRegular2 = /\s/// <--- con esto vamos a validar que no tenga espacios en blanco
    
    const isnumber = expresionRegular1.test(numeroTelefono) 
    const contieneEspacios = expresionRegular2.test(numeroTelefono)

    return isnumber && !contieneEspacios 

    
  }

  export function validarCorreo (correo) {
    const expresionRegular = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
  
    return expresionRegular.test(correo)
  }
  
export function validarSimilitudContrasenias(password, password2){
  return password === password2
  
}

export function validarContrasenia(pass){

    let regEx2 = /(?=.*[A-Z])/;
    let regEx3= /(?=\w*\d)/;
    let regEx4= /\S{8,16}$/;
    let message=""
    
    if(!regEx4.test(pass))
      message= "Mínimo 8 caracteres "
    
    else if(!regEx2.test(pass))
      message= "Incluya 1 letra mayúscula"
    
    else if(!regEx3.test(pass))
      message= "Incluya 1 digito"
    
    else{
      message= "Contraseña válida"
    }
    return message
    

}

  /*
export async function EncryptPassword(password){
  const salt =  await BcryptReactNative.getSalt(10);
  return  await BcryptReactNative.hash( salt, password);
}*/

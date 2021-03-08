import React, {Component} from 'react';
import Register from "./Register";
import ModalComponent from "./ModalComponent";
import axios from 'axios';
import EncryptPassword from "../Login/EncryptPassword";

class RegisterPC extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            liveDemo: false,
            usernames: []
        }
        this.handleModal = this.handleModal.bind(this)
        this.signUp = this.signUp.bind(this)
        this.validarvacios = this.validarvacios.bind(this)
        this.cargarUsernames = this.cargarUsernames.bind(this)

        this.cargarUsernames();
        
    }

    async handleModal(){
        await this.setState({liveDemo:!this.state.liveDemo});
    }

    validarCedula() {
        var input_id = document.getElementById("identificacion")
        var cedula = input_id.value;
        var feed = document.getElementById("FormFeedbackId");
        if(cedula.length == 10){
            
          //Obtenemos el digito de la region que sonlos dos primeros digitos
          var digito_region = cedula.substring(0,2);
          
          //Pregunto si la region existe ecuador se divide en 24 regiones
          if( digito_region >= 1 && digito_region <=24 ){
            
            // Extraigo el ultimo digito
            var ultimo_digito   = cedula.substring(9,10);
    
            //Agrupo todos los pares y los sumo
            var pares = parseInt(cedula.substring(1,2)) + parseInt(cedula.substring(3,4)) + parseInt(cedula.substring(5,6)) + parseInt(cedula.substring(7,8));
    
            //Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
            var numero1 = (cedula.substring(0,1)*2);
            if( numero1 > 9 ){ var numero1 = (numero1 - 9); }
    
            var numero3 = (cedula.substring(2,3)*2);
            if( numero3 > 9 ){ var numero3 = (numero3 - 9); }
    
            var numero5 = (cedula.substring(4,5)*2);
            if( numero5 > 9 ){ var numero5 = (numero5 - 9); }
    
            var numero7 = (cedula.substring(6,7)*2);
            if( numero7 > 9 ){ var numero7 = (numero7 - 9); }
    
            var numero9 = (cedula.substring(8,9)*2);
            if( numero9 > 9 ){ var numero9 = (numero9 - 9); }
    
            var impares = numero1 + numero3 + numero5 + numero7 + numero9;
    
            //Suma total
            var suma_total = (pares + impares);
    
            //extraemos el primero digito
            var primer_digito_suma = String(suma_total).substring(0,1);
    
            //Obtenemos la decena inmediata
            var decena = (parseInt(primer_digito_suma) + 1)  * 10;
    
            //Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
            var digito_validador = decena - suma_total;
    
            //Si el digito validador es = a 10 toma el valor de 0
            if(digito_validador == 10)
              var digito_validador = 0;
            
            //Validamos que el digito validador sea igual al de la cedula
            if(digito_validador == ultimo_digito){
              feed.innerHTML = ("");
              input_id.style.border="1px solid #ced4da";
              return true;
              
            }else{
                feed.innerHTML = ("Cedula inválida");
              input_id.style.border="1px solid red";
              return false;
          
            }
            
          }else{
            // imprimimos en consola si la region no pertenece
            feed.innerHTML = ("Cedula inválida");
            input_id.style.border="1px solid red";
            return false;
          
          }
       }else{
          //imprimimos en consola si la cedula tiene mas o menos de 10 digitos
          feed.innerHTML = ("Cedula inválida");
          input_id.style.border="1px solid red";
          return false;
          
       }    
    
    }
    
    validarTelefono(){
        var telefono = document.getElementById("telefono");
        var numeroTelefono = telefono.value;
        
        var expresionRegular1=/^([0-9]+){9}$/;//<--- con esto vamos a validar el numero
        var expresionRegular2=/\s/;//<--- con esto vamos a validar que no tenga espacios en blanco
        var feed = document.getElementById("FormFeedbackTlf")
        

        if( !(expresionRegular1.test(numeroTelefono) || expresionRegular2.test(numeroTelefono))){
            
            feed.innerHTML = ("Número telefónico inválido");
            telefono.style.border="1px solid red";
            return false;
        }else{
            
            document.getElementById("FormFeedbackTlf").innerHTML = ("");
            telefono.style.border="1px solid  #ced4da";
            return true;

        }
    }

    validarCorreo(){
        var divcorreo = document.getElementById("correo");
        var correo = divcorreo.value
        var expresionRegular = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        var feed = document.getElementById("FormFeedbackMail");

        
        if( !expresionRegular.test(correo)){
            
            feed.innerHTML = ("Correo electrónico inválido");
            divcorreo.style.border="1px solid red";
            return false;
        }else{
            
            feed.innerHTML = ("");
            divcorreo.style.border="1px solid  #ced4da";
            return true;

        }

    }

    colourBorders(node){
        let flag= true;
        for(let i=0; i< node.length; i++){
            let subnode= node[i];
            if(subnode.value===""){                
                subnode.style.border="1px solid red";
                flag = false;

            }else{
                subnode.style.border="1px solid #ced4da";
            }
        }
        return flag;

    }


    validarvacios(){
        var inputs = document.getElementsByTagName("input");
        var selects = document.getElementsByTagName("select");
        var divVacios = document.getElementById("feedbackvacios");
        
        
        let flag1 = this.colourBorders(inputs)
        let flag2 = this.colourBorders(selects)

        if(flag1 && flag2){ 
            divVacios.innerHTML = ("");
            return true;
            
        }
        else{
            divVacios.innerHTML = ("Todos los campos son requeridos");
            divVacios.style.backgroundColor="#FFC4CC";
            divVacios.style.color="white";
            return false;

        }

    }

    cargarUsernames(){
        axios.get("http://localhost:3000/personas?filter[fields][username]=true")
            .then(response => response.data)
            .then( res=> {
                this.setState({usernames: res})
            })
            .catch(e=>{
                return e
            })

    }




   

    async signUp(){
        let nombreV = document.getElementById("nombre").value;
        let idV = document.getElementById("id").value;
        let edadV = document.getElementById("edad").value;
        let telefonoV = document.getElementById("telefono").value;
        let correoV = document.getElementById("correo").value;
        let usernameV = document.getElementById("username").value;
        let contrasenaV = document.getElementById("contrasena").value;
        let codigoFV = document.getElementById("codigoF").value;

       

        let pass_encrypt = await EncryptPassword(contrasenaV);

        

        let data = {
            nombre: nombreV,
            id: parseInt(idV, 10),
            edad: 10,
            telefono: telefonoV,
            correo: correoV,
            username: usernameV,
            contrasena: pass_encrypt,
        }
        
        console.log(data)

        axios.post("http://localhost:3000/personas", data)
            .then(response => response.data)
            .then( res=> console.log(res))
        
        await this.setState({liveDemo:!this.state.liveDemo});


    }


    

    
    render(){
        
        return( 
            <>
                <Register 
                    handleModal={this.handleModal}
                    usernames = {this.state.usernames}
                    signUp = {this.signUp}
                    validarCedula = {this.validarCedula}
                    validarTelefono = {this.validarTelefono}
                    validarCorreo= {this.validarCorreo}
                    validarvacios= {this.validarvacios}
                    /> 
                
                <ModalComponent 
                    handleModal={this.handleModal}
                    estado={this.state.liveDemo}/>
             </>
        );
    }
}


  
export default RegisterPC;
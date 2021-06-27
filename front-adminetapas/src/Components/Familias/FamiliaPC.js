import React, {Component} from 'react';
import FamiliaPV from "./FamiliaPV";
import axios from 'axios';
import crypto from "crypto";
//var crypto = require("crypto");

class FamiliaPC extends Component{
    constructor(props){
        super(props);
        this.state = {
            etapas: []
        }

        
    }

    generateCode(){
        let textarea = document.getElementById("codigoF");
        textarea.textContent = crypto.randomBytes(5).toString('hex');
    }

    addFamily(){
        let apellidoComp = document.getElementById("apellidos")
        let etapaComp = document.getElementById("select_et")
        let codigoFComp = document.getElementById("codigoF")

        let data = {
            idEtapa: parseInt(etapaComp.value, 10),
            apellido: apellidoComp.value,
            clave: codigoFComp.value,
        }

        console.log(data)

        axios.post("http://134.209.215.193:3000/familias", data)
            .catch(e=> console.log(e))
        
        apellidoComp.value="";
        etapaComp.value="";
        codigoFComp.value="";
        document.location.href="/familias"
        
    }

    render(){      
        return(
            <FamiliaPV 
                generateCode = {this.generateCode} 
                addFamily = {this.addFamily}/>
        );
    }

}

export default FamiliaPC;
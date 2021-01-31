import {useEffect, useState} from 'react';

export default function UsePersonas(username, password){
    const [personas, setPErsonas] = useState([])

    useEffect(() => {
                fetch("http://localhost:3000/personas")
        .then(response => response.json())
        .then(data => {
            setPersonas(data)})
        .catch(error=> console.log( "Hubo un error "+error))
    }, [] )
    
    personas.map(persona=>{
        if(persona.username==username && persona.contrasena==password){
            return true;
        }
    })
    return false;
      
}
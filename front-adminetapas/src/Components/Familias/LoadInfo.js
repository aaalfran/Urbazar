import {useEffect, useState} from 'react';

export default function UseEtapas(ruta){
    const [etapas, setEtapas] = useState([])

    useEffect(() => {
                fetch(ruta)
        .then(response => response.json())
        .then(data => {
            setEtapas(data)})
        .catch(error=> console.log( "Hubo un error "+error))
    }, [] )
    
    return etapas;
    
      
}
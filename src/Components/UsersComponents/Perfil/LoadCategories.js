import {useEffect, useState} from 'react';

export default function UseCategories(){
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
                fetch("http://localhost:3000/categorias")
        .then(response => response.json())
        .then(data => {
            setCategorias(data)})
        .catch(error=> console.log( "Hubo un error "+error))
    }, [] )
    
    return categorias
    
      
}
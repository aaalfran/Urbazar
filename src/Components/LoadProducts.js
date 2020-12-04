
import React, {useEffect, useState} from 'react';
import Producto from './Producto';

export default function UseTweets(){
    const [tweets, setTweet] = useState([])

    useEffect(() => {
                fetch('http://localhost:4000/api/datos')
        .then(response => response.json())
        .then(data => {
            setTweet(data)})
        .catch(error=> console.log( "Hubo un error "+error))
    }, [] )
    
    return (
        <>
        {tweets.map(producto => (
            <Producto
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              foto_src={producto.imagen}
            />
       ))}
       </>
    );
      
}

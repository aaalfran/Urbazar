
import React, {useEffect, useState} from 'react';


export default function UseTweets(){
    const [tweets, setTweet] = useState([])

    useEffect(() => {
        
        fetch('http://localhost:4000/api/datos')
        .then(response => response.json())
        .then(data => 
        {
            setTweet(data)
        })
        .catch(error=> console.log( "Hubo un error "+error))
    }, [] )
    return (
        <>
            HOLA Veamos si funciona
            <div>
                {tweets.map(item =>(
                    <tr>
                    <td> {item.Nombre} </td>
                    </tr>
                ))}
             </div>
            </>
    );
}

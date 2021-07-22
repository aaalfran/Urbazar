import React , { useEffect, useState } from 'react'

export default function Requests(ruta){
    const [information, setInformation] = useState([])
    useEffect(() => {
        fetch(ruta)
          .then(response => response.json())
          .then(data => {
            setInformation(data)
          })
          .catch(error => console.log('Hubo un error ' + error))
      }, [])
      return information;
}
import React, {useState, useEffect, useMemo} from 'react';
import axios from 'axios';
const UsuarioContext = React.createContext();

export function UsuarioProvider(props){
    const [usuario, setUsuario] = useState(null);


    async function login(data){
        axios.post(`http://134.209.215.193:3000/login`, data)
        .then(response => {
          if (response.status == 200) {
            return response.data
          }
        })
        .then(res => {
            setUsuario(res.data)
          
        })

        .catch((err) => {
         // feed.innerHTML = 'Usuario o clave incorrectos'

         // feed.style.color = 'red'
          console.log(err)
          console.log("Errorrrrrr, muerta, muerta muertica")
        })
    }

    function logOut(){
        setUsuario(null);
    }

    const value = useMemo(()=>{
        return ({
            usuario,
            login,
            logOut
        })
    }, [usuario])

    return <UsuarioContext.Provider value={value} {...props} />
}

export function useUsuario(){
    const context = React.useContext(UsuarioContext)
    if(!context){
        throw new Error("useUsuario debe estar dentro del proveedor UsuarioContext")
    }
    return context;
}
import React, {useState, useEffect, useMemo} from 'react';
import axios from 'axios';
import data from '../../enviroment';
const UsuarioContext = React.createContext();

export function UsuarioProvider(props){
    const [usuario, setUsuario] = useState(null);
    let url = data.number;
    async function login(data){
        axios.post(`http://${url}/login`, data)
        .then(response => {
          if (response.status == 200) {
            return response.data
          }
        })
        .then(res => {
            setUsuario(res.data)
          
        })

        .catch((err) => {
          console.log(err)
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
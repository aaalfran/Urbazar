import React, {useState, useEffect, useMemo} from 'react';
import data from '../../enviroment';
const UsuarioContext = React.createContext();

export function UsuarioProvider(props){
    const [usuario, setUsuario] = useState(null);
    let url = data.number;


    async function login(data){
        if(data.usuario !== 'utest' && data.password !== 'utest123') {
            alert("Usuario o clave incorrecta");
        } else {
            setUsuario({usuario: 'utest', password: 'utest123', id: 6});
        }        
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
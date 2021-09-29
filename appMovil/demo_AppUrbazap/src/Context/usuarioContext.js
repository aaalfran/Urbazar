import React, {useState, useEffect, useMemo, useContext} from 'react';
import data from '../../enviroment';
const UsuarioContext = React.createContext();

export const UsuarioProvider = (props) => {
    const [usuario, setUsuario] = useState(null);
    const [carrito, setCarrito] = useState([]);
    let url = data.number;


    async function login(data){
        if(data.usuario !== 'utest' && data.password !== 'utest123') {
            alert("Usuario o clave incorrecta");
        } else {
            setUsuario({usuario: 'utest', password: 'utest123', id: 6 });
        }        
    }

    const agregarProducto = (producto) => {
        setCarrito((c) => [...c, producto] );
    }

    const borrarProducto = (item) => {
        const new_carrito = carrito.filter( p => p.producto.id !== item.producto.id)
        setCarrito(new_carrito);
    }

    const borrarCarrito = () => {
        setCarrito([]);
    }

    function logOut(){
        setUsuario(null);
    }

    const value = useMemo(()=>{
        return ({
            usuario,
            carrito,
            login,
            logOut,
            agregarProducto,
            borrarCarrito,
            borrarProducto,
        })
    }, [usuario, carrito])

    return <UsuarioContext.Provider value={value} {...props} />
}

export const useUsuario = () => {
    const context = useContext(UsuarioContext)
    if(!context){
        throw new Error("useUsuario debe estar dentro del proveedor UsuarioContext")
    }
    return context;
}

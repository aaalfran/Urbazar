import React, {useState, useEffect, useMemo, useContext} from 'react';
import { set } from 'react-native-reanimated';
import data from '../../enviroment';
const UsuarioContext = React.createContext();

export const UsuarioProvider = (props) => {
    const [usuario, setUsuario] = useState(null);
    const [carrito, setCarrito] = useState([
        {
          "cantidad": 1,
          "key": 136,
          "producto":{
            "ID_Categoria": "1",
            "activo": 1,
            "descripcion": "camisa de vestir",
            "id": 2,
            "idVendedor": 2,
            "nombre": "camisa ",
            "pedidoAnticipado": 1,
            "precio": 20,
            "promedioPuntuacion": 4,
            "source": "https://http2.mlstatic.com/D_NQ_NP_914407-MEC46107098824_052021-O.jpg",
            "stock": 7,
          },
          "total": 20,
        },
    {
          "cantidad": 1,
          "key": 3,
          "producto":{
            "ID_Categoria": "1",
            "activo": 1,
            "descripcion": "camisa de vestir",
            "id": 2,
            "idVendedor": 2,
            "nombre": "camisa ",
            "pedidoAnticipado": 1,
            "precio": 20,
            "promedioPuntuacion": 4,
            "source": "https://http2.mlstatic.com/D_NQ_NP_914407-MEC46107098824_052021-O.jpg",
            "stock": 7,
          },
          "total": 20,
        },
    {
          "cantidad": 2,
          "key": 636,
          "producto":{
            "ID_Categoria": "2",
            "activo": 1,
            "descripcion": "computadora lenovo",
            "id": 3,
            "idVendedor": 4,
            "nombre": "computadora ",
            "pedidoAnticipado": 1,
            "precio": 500,
            "promedioPuntuacion": 5,
            "source": "https://www.idcmayoristas.com/wp-content/uploads/2020/04/002589.jpg",
            "stock": 100,
          },
          "total": 1000,
        },
    {
          "cantidad": 1,
          "key": 983,
          "producto":{
            "ID_Categoria": "2",
            "activo": 1,
            "descripcion": "celular phone 10 ",
            "id": 4,
            "idVendedor": 6,
            "nombre": "iphone",
            "pedidoAnticipado": 1,
            "precio": 5,
            "promedioPuntuacion": 5,
            "source": "https://images-na.ssl-images-amazon.com/images/I/61ceSVoz1nL._AC_SX385_.jpg",
            "stock": 20,
          },
          "total": 5,
        },
      ]
)
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

        console.log(carrito.length);
    }

    const borrarProducto = (producto) => {
        const new_carrito = carrito.filter( p => p.producto.id !== producto.id)
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

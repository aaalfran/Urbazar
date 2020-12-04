import React, {useEffect, useState} from 'react';


function useLoadResource(){
    const [productos, setProductos] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/api/allproducts")
    .then(response => response.json())
    .then(data => {
        setProductos(data)})
    .catch(error=> console.log( "Hubo un error "+error))
    }, [] )
    return(
        <div  id="content">
            <table id="table_products" className="col-md-12">     
                {/*Cabecera */}   
                <tr> 
                    <th>Foto</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Categoria</th>
                </tr>

                {/*Cuerpo*/}
                {productos.map(producto => (
                    <tr>     
                        <td><img width="30px" src={producto.imagen}></img> </td>
                    <td> {producto.nombre} </td>
                    <td> {producto.precio} </td>
                        <td> {producto.categoria} </td>
                        </tr>            
                
            ))}
            </table>
        </div>
    );

}

export default useLoadResource;
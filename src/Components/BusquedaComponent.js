import React, {useEffect, useState} from 'react';
import Producto from './Producto';
import { Card, CardImg, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

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
        <div id="catalogo">
        
            {productos.map(producto => (
                <Card className="target">
                <CardImg className="target_img" top  src={producto.imagen} alt={producto.nombre} />
                <CardBody>
                    <CardTitle id="name_product" >{producto.nombre}</CardTitle>
                <               CardSubtitle className='mb-2 text-muted'>${producto.precio}</CardSubtitle>
                </CardBody>
                </Card>
           
       ))}
        </div>
    );
}

export default useLoadResource;
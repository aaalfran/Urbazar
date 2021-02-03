import React, { useState } from 'react'
import axios from 'axios';
import {Row,Col,Container} from 'reactstrap';
import '../../../css/Detalle.css'
import CarritoComponent, {listaIdProductos} from '../Carrito/CarritoComponent';


let CarritoDetalle = ({src,nombre,descripcion,precio,cantidad}) =>{
    const [borrado,setBorrado] = useState(false);
    let borrarElemento = () =>{
        setBorrado(true)

        console.log('hola')
        console.log(listaIdProductos);
        for ( let [clave, valor] of listaIdProductos.entries()) {
            // valor[1] contiene el id del detalle-carrito
            let url_del_detalle = '/detalle-carrito/'
            axios.delete(url_del_detalle.concat(valor[1]))
            .then(response => response.data)
            .then((res) => {
                console.log(res);
            }); 
        }
        const jsonCarro = JSON.parse(localStorage.getItem("carrito"));
        var productLista = jsonCarro.carrito;
        var listaNueva = []
        for (var i = 0; i < productLista.length; i++) {
            let n = productLista[i].nombre;
            
            if(n != nombre){
                listaNueva.push(productLista[i])
            }

        }
        let jsonNuevo = {carrito:listaNueva}
        localStorage.setItem("carrito",JSON.stringify(jsonNuevo));
        let items = parseInt(localStorage.getItem("contador_items"));
        localStorage.setItem("contador_items", items-1)
        let val_actual = document.getElementById("cont_icon_carrito").getElementsByTagName("p")[0];
        val_actual.textContent = items-1;

    }
    if(borrado){
        return(<span></span>);
    }
    else{
        return(
            <Container className="productoContenedor">
                <div className="w-100 text-right borrarDiv"><span className="pr-5 borrar" onClick={borrarElemento}>X</span></div>
                <Row className="align-items-center px-5">
                    <Col sm="10">
                        <div className="producto media" id="tarjeta1">
                            <div className="foto_producto align-self-center mr-3">
                                <img src={src} alt={nombre}/>
                            </div>
                            <div className="descripcion">
                                <div>
                                    <h5>{nombre}</h5>
                                </div>
                                <div className="">
                                    <div>
                                        <p>
                                            {descripcion}
                                        </p>
                                    </div>
        
                                </div>
                                <div>
                                    <strong>Vendedor:</strong> prueba<br/>
                                    Cantidad: {cantidad}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm="2">
                        <div className="valor">
                            <h3> ${precio} </h3>
                        </div>
                    </Col>
        
                </Row>    
            </Container>
        
        
        );
    }
}

export default CarritoDetalle;
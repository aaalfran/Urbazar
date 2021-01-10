import React, { Component } from 'react'
import {Row,Col,Container} from 'reactstrap';
let CarritoDetalle = ({src,nombre,descripcion,precio,cantidad}) =>{
    return(
    <Container className="productoContenedor">
        <Row className="align-items-center px-5">
            <Col sm="10">
                <div className="producto media" id="tarjeta1">
                    <div className="foto_producto align-self-center mr-3">
                        <img src={src} />
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

export default CarritoDetalle;
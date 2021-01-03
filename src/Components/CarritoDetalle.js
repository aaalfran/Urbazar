import React, { Component } from 'react'

let CarritoDetalle = ({src,nombre,descripcion,precio,cantidad}) =>{
    return(    
    <div className="producto media" id="tarjeta1">
        <div className="foto_producto align-self-center mr-3">
            <img src={src} />
        </div>
        <div className="descripcion">
            <div>
                <h5>{nombre}</h5>
            </div>
            <div className="detail_body">
                <div>
                    <p>
                        {descripcion}
                    </p>
                </div>
                <div className="valor">
                <h3> {precio} </h3>
                </div>
            </div>
            <div>
                <strong>Vendedor:</strong> prueba<br/>
                Cantidad: {cantidad}
            </div>
        </div>
    </div>
);
}

export default CarritoDetalle;
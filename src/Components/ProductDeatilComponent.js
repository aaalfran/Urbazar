
import cupcakes from "../imagenes/cupcakes.jpg";


import React from "react";


import {Container} from 'reactstrap';

import '../css/product.css'
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import NavbarComponent from "./navbarComponent";

function ProductComponent() {
    return (
        <>
    <NavbarComponent />
    <Container>   

        
        <div className="row justify-content-center">
            <div className="col-sm-6 col-12" id="imgContainer">
                <div className="card mb-3" id="imgCard">
                    <div className="card-body">
                      <h5 className="card-title">Cupcake de Vainilla</h5>
                    </div>
                    <div id="card-body-img">
                        <img src={cupcakes} className="card-img-bottom" alt="Cupcakes"/>
                    </div>
                  </div>
            </div>
            <div className="col-sm-6 col-12" id="productoVendedor">
                <div className="container" id="productoUpRight">
                    <div className="row justify-content">
                        <div className="col-12">
                            <h5>Vendedor</h5>
                        </div>
                        <div className="col-6">
                            <p>Andrea Rodriguez</p> 
                        </div>
                        <div className="col-6 text-right">
                            <p>
                                Calificación {" "}
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star mr-auto'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star mr-auto'></i>
                                </p>
                        </div>
                        <div className="col-12" id="productoDescripcion"> 
                            <p>
                                Cupcakes de vainilla 100% veganos sin glúten 120g, con glaseado de coco y grageas de colores.
                                Cupcakes de vainilla 100% veganos sin glúten 120g, con glaseado de coco y grageas de colores.
                            </p>
                            
                            
                        </div>
                        
                        <div className="col-6">
                            <h6>Distancia</h6>
                        </div>
                        <div className="col-6">
                            <p>6 Etapas</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-12" id="productoPreFactura">
                <div className="container" id="productoTwoLeft">
                    <div className="row justify-content">
                        <div className="col-6">
                            <p>Precio</p>
                        </div>
                        <div className="col-6 text-right">
                            <p>$1.50</p>
                        </div>
                        <div className="col-6">
                            <p>Cantidad</p>
                        </div>
                        <div className="col-6 text-right">
                            <p>-2+</p>
                        </div>
                        <div className="col-6" id="totlabel">
                            <p>Total</p>
                        </div>
                        <div className="col-6 text-right" id = "valtotlabel">
                            <p>$3.00</p>
                        </div>
                        <div className="col-12 text-center">
                            <button type="button" id="btnAgregarCarrito" className="btn btn-primary"><i className='fas fa-shopping-cart fa-lg'></i>{" "}Agregar a carrito</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-12" id="productoComentarios">
                <div className="container" id="productoTwoRight">
                    <div className="row justify-content">
                        <div className="col-12">
                            <h5>Comentarios</h5>
                            
                        </div>
                        <div className="col-6">
                            <p><i className='fas fa-twitter mr-auto'></i>
                            {" "}Muy ricos </p>
                        </div>
                        <div className="col-6">
                            <p>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            </p>
                        </div>
                        <div className="col-12" id="productoTxtComentarios"> 
                            <p>
                                Quedaron muy suaves, a mis hijas les gustaron.Quedaron muy suaves, a mis hijas les gustaron.Quedaron muy suaves, a mis hijas les gustaron.Quedaron muy suaves, a mis hijas les gustaron.Quedaron muy suaves, a mis hijas les gustaron.Quedaron muy suaves, a mis hijas les gustaron.
                            </p>

                        </div>
                        <div className="col-6">
                            <p>
                            <i className='fas fa-facebook mr-auto'></i>
                            {" "}Un poco caros </p>
                        </div>
                        <div className="col-6">
                            <p>
                                <i className='far fa-star mr-auto'></i>
                                <i className='far fa-star mr-auto'></i>
                            </p>
                        </div>
                        <div className="col-12" id="productoTxtComentarios"> 
                            <p>
                                La verdad que hubiese preferido hacerlos yo.
                            </p>

                        </div>
                        
                    </div>
                </div>
            </div>

          </div>
  
    </Container>
        </>

    );

  }
  
  export default ProductComponent;
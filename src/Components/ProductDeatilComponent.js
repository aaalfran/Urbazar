
import cupcakes from "../imagenes/cupcakes.jpg";


import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'


import {Container} from 'reactstrap';

import '../css/product.css'

function ProductComponent() {
    return (
     
    <Container>   

        
        <div class="row justify-content-center">
            <div class="col-sm-6 col-12" id="imgContainer">
                <div class="card mb-3" id="imgCard">
                    <div class="card-body">
                      <h5 class="card-title">Cupcake de Vainilla</h5>
                    </div>
                    <div id="card-body-img">
                        <img src={cupcakes} class="card-img-bottom" alt="Cupcakes"/>
                    </div>
                  </div>
            </div>
            <div class="col-sm-6 col-12" id="productoVendedor">
                <div class="container" id="productoUpRight">
                    <div class="row justify-content">
                        <div class="col-12">
                            <h5>Vendedor</h5>
                        </div>
                        <div class="col-6">
                            <p>Andrea Rodriguez</p> 
                        </div>
                        <div class="col-6 text-right">
                            <p>
                                Calificación {" "}
                                <FontAwesomeIcon icon={faStar} id= "iconEstrella" spin/>
                                <FontAwesomeIcon icon={faStar} id= "iconEstrella" spin/>
                                <FontAwesomeIcon icon={faStar} id= "iconEstrella" spin/>
                                <FontAwesomeIcon icon={faStar} id= "iconEstrella" spin/>
                                </p>
                        </div>
                        <div class="col-12" id="productoDescripcion"> 
                            <p>
                                Cupcakes de vainilla 100% veganos sin glúten 120g, con glaseado de coco y grageas de colores.
                                Cupcakes de vainilla 100% veganos sin glúten 120g, con glaseado de coco y grageas de colores.
                            </p>
                            
                            
                        </div>
                        
                        <div class="col-6">
                            <h6>Distancia</h6>
                        </div>
                        <div class="col-6">
                            <p>6 Etapas</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-12" id="productoPreFactura">
                <div class="container" id="productoTwoLeft">
                    <div class="row justify-content">
                        <div class="col-6">
                            <p>Precio</p>
                        </div>
                        <div class="col-6 text-right">
                            <p>$1.50</p>
                        </div>
                        <div class="col-6">
                            <p>Cantidad</p>
                        </div>
                        <div class="col-6 text-right">
                            <p>-2+</p>
                        </div>
                        <div class="col-6" id="totlabel">
                            <p>Total</p>
                        </div>
                        <div class="col-6 text-right" id = "valtotlabel">
                            <p>$3.00</p>
                        </div>
                        <div class="col-12 text-center">
                            <button type="button" id="btnAgregarCarrito" class="btn btn-primary"><FontAwesomeIcon icon={faShoppingCart} id= "iconEstrella" /> {" "}Agregar a carrito</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-12" id="productoComentarios">
                <div class="container" id="productoTwoRight">
                    <div class="row justify-content">
                        <div class="col-12">
                            <h5>Comentarios</h5>
                            
                        </div>
                        <div class="col-6">
                            <p><FontAwesomeIcon icon={faTwitter} id= "iconEstrella"/>
                            {" "}Muy ricos </p>
                        </div>
                        <div class="col-6">
                            <p>
                                <FontAwesomeIcon icon={faStar} id= "iconEstrella"/>
                                <FontAwesomeIcon icon={faStar} id= "iconEstrella"/>
                                <FontAwesomeIcon icon={faStar} id= "iconEstrella"/>
                                <FontAwesomeIcon icon={faStar} id= "iconEstrella"/>
                                <FontAwesomeIcon icon={faStar} id= "iconEstrella"/>
                                </p>
                        </div>
                        <div class="col-12" id="productoTxtComentarios"> 
                            <p>
                                Quedaron muy suaves, a mis hijas les gustaron.Quedaron muy suaves, a mis hijas les gustaron.Quedaron muy suaves, a mis hijas les gustaron.Quedaron muy suaves, a mis hijas les gustaron.Quedaron muy suaves, a mis hijas les gustaron.Quedaron muy suaves, a mis hijas les gustaron.
                            </p>

                        </div>
                        <div class="col-6">
                            <p>
                            <FontAwesomeIcon icon={faFacebook} id= "iconEstrella"/>
                            {" "}Un poco caros </p>
                        </div>
                        <div class="col-6">
                            <p>
                                <FontAwesomeIcon icon={faStar} id= "iconEstrella" />
                                <FontAwesomeIcon icon={faStar} id= "iconEstrella" />
                                <FontAwesomeIcon icon={faStar} id= "iconEstrella" />
                                </p>
                        </div>
                        <div class="col-12" id="productoTxtComentarios"> 
                            <p>
                                La verdad que hubiese preferido hacerlos yo.
                            </p>

                        </div>
                        
                    </div>
                </div>
            </div>

          </div>
  
    </Container>


    );

  }
  
  export default ProductComponent;
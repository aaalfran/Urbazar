import React, { Component } from 'react'
import '../css/CarritoComponent.css'
import logo2 from "../logo.jpg";
import blusa from "../imagenes/producto2.jpg";
import cupcake from "../imagenes/producto1.jpg";
import celular from "../imagenes/producto3.jpg";
import zapatos from "../imagenes/producto4.jpg";
import visa from "../imagenes/visa.png";
import mastercard from "../imagenes/mastercard.png";
import paypal from "../imagenes/paypal.png";
import { Label, Input, Button} from 'reactstrap';

function CarritoComponent(){
        return (
            <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                </head>
            <body>
                <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="/">
                    <img src={logo2} width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy"/>
                    <h3 class="d-inline-block">UrbazApp</h3>
                </a>
                </nav>
                <div id="main">
                    <section id="productos_detail" className="col-md-8">
                        <div id="tarjeta1" class="producto media">
                            <div class="foto_producto align-self-center mr-3">
                                <img src={blusa} />
                            </div>
                            <div class="descripcion">
                                <div>
                                    <h5>Blusa de algodón</h5>
                                </div>
                                <div class="detail_body">
                                    <div>
                                        <p>
                                            Blusa 100% algodón tela importada. Estampados de diferentes colores. Talla S, M y L.
                                        </p>
                                    </div>
                                    <div class="valor">
                                       <h3> $5 </h3>
                                    </div>
                                </div>
                                <div>
                                    <strong>Vendedor:</strong> Xavier Montaño<br/>
                                    Cantidad: 1
                                </div>
                            </div>
                        </div>

                        <div id="tarjeta2" class="producto media">
                            <div class="foto_producto align-self-center mr-3">
                                <img src={cupcake} />
                            </div>
                            <div class="descripcion">
                                <div>
                                    <h5>Cupcakes de vainilla</h5>
                                </div>
                                <div class="detail_body">
                                    <div>
                                        <p>
                                            Cupcakes recién horneados sabor a Vainilla. A la venta la caja de 12 unidades.
                                        </p>
                                    </div>
                                    <div class="valor">
                                       <h3> $2.50 </h3>
                                    </div>
                                </div>
                                <div>
                                <strong>Vendedor:</strong> Carolina Cabeza<br/>
                                    Cantidad: 2
                                </div>
                            </div>
                        </div>


                        <div id="tarjeta3" class="producto media">
                            <div class="foto_producto align-self-center mr-3">
                                <img src={celular} />
                            </div>
                            <div class="descripcion">
                                <div>
                                    <h5>Samsung J5 pro</h5>
                                </div>
                                <div class="detail_body">
                                    <div>
                                        <p>
                                        Samsung J5 pro 2019. Excelentes condiciones. Almacenamiento de 32G 250px
                                        </p>
                                    </div>
                                    <div class="valor">
                                       <h3> $195 </h3>
                                    </div>
                                </div>
                                <div>
                                <strong>Vendedor:</strong> Carlos Zapata<br/>
                                    Cantidad: 2
                                </div>
                            </div>
                        </div>

                        <div id="tarjeta4" class="producto media">
                            <div class="foto_producto align-self-center mr-3">
                                <img src={zapatos} />
                            </div>
                            <div class="descripcion">
                                <div>
                                    <h5>Zapatos Nike runs</h5>
                                </div>
                                <div class="detail_body">
                                    <div>
                                        <p>
                                            Zapatos americanos marca Nike, excelentes condiciones. Tallas 40 y 42.
                                        </p>
                                    </div>
                                    <div class="valor">
                                       <h3> $52.00 </h3>
                                    </div>
                                </div>
                                <div>
                                <strong>Vendedor:</strong> Diana Peralta<br/>
                                    Cantidad: 1
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="info_detail" className="col-md-4"> 
                        <div id="contenedor_info">
                            <div id="title_detail">
                               <h3> Resumen de pedido </h3>
                            </div>
                            <div class="Cuenta">
                                <div id="lista_pedidos" >
                                    <ol>
                                        <li>  Blusa de algodón </li>
                                        <li>  Cupcakes de vainilla </li>
                                        <li>  Samsung J5 pro </li>
                                        <li>  Zapatos Nike run  </li>
                                        <strong><li>  Total a pagar  </li></strong>
                                    </ol>                                
                                </div>   
                                <div id="precios">
                                <ul>
                                        <li>5.00  </li>
                                        <li>2.50  </li>
                                        <li>195.00  </li>
                                        <li>52.00  </li>
                                        <strong><li>  257.50  </li></strong>
                                    </ul>          
                                </div>                             
                            </div>
                            <div id="total">
                                    <p> Total a pagar: 257.50</p>
                            </div>
                            <div id="Pago">                                
                                 Método de pago 
                                <div id="metodo_selection">
                                    <div className="form-check-radio">
                                        <Label className="form-check-label">
                                        <Input type="radio" name="exampleRadios" id="exampleRadios2" value="option2" defaultChecked/>
                                        <img src={visa} width="20" height="20" class="d-inline-block align-top" />Visa
                                        <span className="form-check-sign"></span>
                                        </Label>
                                    </div>

                                    <div className="form-check-radio">
                                        <Label className="form-check-label">
                                        <Input type="radio" name="exampleRadios" id="exampleRadios2" value="option2" defaultChecked/>
                                        <img src={mastercard} width="20" height="20" class="d-inline-block align-top" />Mastercard
                                        <span className="form-check-sign"></span>
                                        </Label>
                                    </div>
                                    <div className="form-check-radio">
                                        <Label className="form-check-label">
                                        <Input type="radio" name="exampleRadios" id="exampleRadios3" value="option1" />
                                        <img src={paypal} width="20" height="20" class="d-inline-block align-top" />Paypal
                                        <span className="form-check-sign"></span>
                                        </Label>
                                    </div>
                                    </div>
                            </div>
                            <div id="time_send">
                                <Label> Tiempo estimado de recibo: 2 días</Label>
                                <div id="btn_continue">
                                    <Button> Confirmar </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </body>
            </html>
        );
    
}

export default CarritoComponent

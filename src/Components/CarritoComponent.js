import React, { Component } from 'react'

import ConfirmationComponent from './ConfirmationComponent';
import '../css/CarritoComponent.css'
import NavbarComponent from './navbarComponent';
import blusa from "../imagenes/producto2.jpg";
import cupcake from "../imagenes/producto1.jpg";
import celular from "../imagenes/producto3.jpg";
import zapatos from "../imagenes/producto4.jpg";
import visa from "../imagenes/visa.png";
import mastercard from "../imagenes/mastercard.png";
import paypal from "../imagenes/paypal.png";
import { Label, Input, Button, Modal} from 'reactstrap';

function CarritoComponent(){
    const [liveDemo, setLiveDemo] = React.useState(false);
        return (
            <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                <script type="text/script" src="./Practica.js"></script>
            </head>
            <body>

                <NavbarComponent/>

                <div id="main">
                    <section id="productos_detail" className="col-md-8">
                    

                        <div className="producto media" id="tarjeta1">
                            <div className="foto_producto align-self-center mr-3">
                                <img src={blusa} />
                            </div>
                            <div className="descripcion">
                                <div>
                                    <h5>Blusa de algodón</h5>
                                </div>
                                <div className="detail_body">
                                    <div>
                                        <p>
                                            Blusa 100% algodón tela importada. Estampados de diferentes colores. Talla S, M y L.
                                        </p>
                                    </div>
                                    <div className="valor">
                                       <h3> $5 </h3>
                                    </div>
                                </div>
                                <div>
                                    <strong>Vendedor:</strong> Xavier Montaño<br/>
                                    Cantidad: 1
                                </div>
                            </div>
                        </div>

                        <div id="tarjeta2" className="producto media">
                            <div className="foto_producto align-self-center mr-3">
                                <img src={cupcake} />
                            </div>
                            <div className="descripcion">
                                <div>
                                    <h5>Cupcakes de vainilla</h5>
                                </div>
                                <div className="detail_body">
                                    <div>
                                        <p>
                                            Cupcakes recién horneados sabor a Vainilla. A la venta la caja de 12 unidades.
                                        </p>
                                    </div>
                                    <div className="valor">
                                       <h3> $2.50 </h3>
                                    </div>
                                </div>
                                <div>
                                <strong>Vendedor:</strong> Carolina Cabeza<br/>
                                    Cantidad: 2
                                </div>
                            </div>
                        </div>
                        <div id="tarjeta3" className="producto media">
                            <div className="foto_producto align-self-center mr-3">
                                <img src={celular} />
                            </div>
                            <div className="descripcion">
                                <div>
                                    <h5>Samsung J5 pro</h5>
                                </div>
                                <div className="detail_body">
                                    <div>
                                        <p>
                                        Samsung J5 pro 2019. Excelentes condiciones. Almacenamiento de 32G 250px
                                        </p>
                                    </div>
                                    <div className="valor">
                                       <h3> $195 </h3>
                                    </div>
                                </div>
                                <div>
                                <strong>Vendedor:</strong> Carlos Zapata<br/>
                                    Cantidad: 2
                                </div>
                            </div>
                        </div>

                        <div id="tarjeta4" className="producto media">
                            <div className="foto_producto align-self-center mr-3">
                                <img src={zapatos} />
                            </div>
                            <div className="descripcion">
                                <div>
                                    <h5>Zapatos Nike runs</h5>
                                </div>
                                <div className="detail_body">
                                    <div>
                                        <p>
                                            Zapatos americanos marca Nike, excelentes condiciones. Tallas 40 y 42.
                                        </p>
                                    </div>
                                    <div className="valor">
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
                               <h3> Resumen </h3>
                            </div>
                            <div className="Cuenta">
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
                            <div id="Pago">                                
                                 Método de pago 
                                <div id="metodo_selection">
                                    <div className="form-check-radio">
                                        <Label className="form-check-label">
                                        <Input type="radio" name="exampleRadios" id="exampleRadios2" value="option2" defaultChecked/>
                                        <img src={visa} width="20" height="20" className="d-inline-block align-top" />Visa
                                        <span className="form-check-sign"></span>
                                        </Label>
                                    </div>

                                    <div className="form-check-radio">
                                        <Label className="form-check-label">
                                        <Input type="radio" name="exampleRadios" id="exampleRadios2" value="option2" defaultChecked/>
                                        <img src={mastercard} width="20" height="20" className="d-inline-block align-top" />Mastercard
                                        <span className="form-check-sign"></span>
                                        </Label>
                                    </div>
                                    <div className="form-check-radio">
                                        <Label className="form-check-label">
                                        <Input type="radio" name="exampleRadios" id="exampleRadios3" value="option1" />
                                        <img src={paypal} width="20" height="20" className="d-inline-block align-top" />Paypal
                                        <span className="form-check-sign"></span>
                                        </Label>
                                    </div>
                                    </div>
                            </div>
                            <div id="time_send">
                                <Label> Tiempo estimado de recibo: 2 días</Label>
                                <div id="btn_continue">
                                    <Button type="button" onClick={() => setLiveDemo(true)}> Confirmar </Button>
                                </div>
                            
                                <Modal isOpen={liveDemo} toggle={() => setLiveDemo(false)}>
                                    <div className="modal-header">
                                    <h5 className="modal-title" id="ConfirmationModel">
                                        Confirmación de compra
                                    </h5>
                                    <button
                                        aria-label="Close"
                                        className="close"
                                        data-dismiss="modal"
                                        type="button"
                                        onClick={() => setLiveDemo(false)}
                                    >
                                        <span aria-hidden={true}>×</span>
                                    </button>
                                    </div>
                                    <div className="modal-body">
                                    <p>Se descontará de su cuenta el saldo de $257.50<br/>
                                        ¿Está seguro que desea realizar esta compra?
                                    </p>
                                    </div>
                                    <div className="modal-footer">
                                    <div className="left-side">
                                        <Button
                                        className="btn-link"
                                        color="default"
                                        data-dismiss="modal"
                                        type="button"
                                        onClick={() => setLiveDemo(false)}
                                        >
                                        Cancelar
                                        </Button>
                                    </div>
                                    <div className="divider" />
                                    <div className="right-side">
                                        <Button
                                        className="btn-link"
                                        type="button"
                                        id="btn_confModal"
                                        onClick={() => setLiveDemo(false)}
                                        >
                                        Aceptar
                                        </Button>
                                    </div>
                                    </div>
                                </Modal>
                                
                            </div>
                        </div>
                    </section>
                </div>

           
            </body>
            </html>
        );
    
}

export default CarritoComponent

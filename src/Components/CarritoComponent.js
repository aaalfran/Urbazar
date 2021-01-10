import React, { Component} from 'react'


import '../css/CarritoComponent.css'
import NavbarComponent from './navbarComponent';
import visa from "../imagenes/visa.png";
import mastercard from "../imagenes/mastercard.png";
import paypal from "../imagenes/paypal.png";
import { Label, Input, Button, Modal} from 'reactstrap';
import CarritoDetalle from "./CarritoDetalle"




let Productos = () =>{

    if(localStorage.getItem("carrito")){
        const jsonCarro = JSON.parse(localStorage.getItem("carrito"));
        var productLista = jsonCarro.carrito;
        var listaComponent = []
        
       
        for (var i = 0; i < productLista.length; i++) {
            let nombre = productLista[i].nombre;
            let precio = productLista[i].precio;
            let imagen = productLista[i].imagen;
            let desc = productLista[i].descripcion;
            let cant = productLista[i].cantidad;
            listaComponent.push(<CarritoDetalle nombre ={nombre} precio ={precio} src={imagen}
                descripcion={desc} cantidad={cant} />)
        }
        console.log("hola")
        return(<div>{listaComponent}</div>)
    }
    else{
        return(<h1 className="vacioCarrito">Carrito Vacío</h1>);

    
    }
}

let Resumen = () =>{

    let listaLi = []
    

    if(localStorage.getItem("carrito")){
        const jsonCarro = JSON.parse(localStorage.getItem("carrito"));
        var productLista = jsonCarro.carrito;
        let precioTotal = 0;
        for (var i = 0; i < productLista.length; i++) {
            let nombre = productLista[i].nombre;
            let precio = parseFloat(productLista[i].precio) * productLista[i].cantidad;
            precioTotal = precioTotal + precio;
            listaLi.push(<tr>
                <td>{nombre}</td>
                <td>${precio}</td>
            </tr>)
        }
        localStorage.setItem("precio",precioTotal)
        return(

        <table className="w-100">
            <tr>
                <th>Productos</th>
                <th>Precio</th>
            </tr>
            {listaLi}
            <tr>
                <td colSpan="2"><strong>Precio Total: ${precioTotal}</strong></td>
            </tr>
        </table>
        );
    }
    else{
        return(<p></p>)
    }
}



const CarritoComponent = () => {
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
                        <Productos />
                        
                    </section>
                    <section id="info_detail" className="col-md-4"> 
                        <div id="contenedor_info">
                            <div id="title_detail">
                               <h3> Resumen </h3>
                            </div>
                            <div>
                                <Resumen />                            
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
                                    <p>Se descontará de su cuenta el saldo de ${localStorage.getItem("precio")}<br/>
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
                                        onClick={() => {
                                            setLiveDemo(false);
                                            localStorage.setItem("carrito","")
                                            localStorage.setItem("precio",0)
                                            
                                        }
                                        
                                        }
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
 
export default CarritoComponent;


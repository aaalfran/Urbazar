import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../../../css/CarritoComponent.css';
import NavbarComponent, {cantidadProd} from '../navBar/navbarComponent';
import { Label, Input, Button, Modal, FormGroup} from 'reactstrap';
import CarritoDetalle from "./CarritoDetalle";
import PaymentInputs from "./PaymentComponent";

export let listaIdProductos = new Map(); // clave: id, valor: [cantidad, id detalle-carrito]
let listaNomProductos = new Map(); // clave: id, valor: [nombre, precio]
let conjuntoIdProductos = new Set();

let cantProductos = 0;

 const Productos = () =>{
    
    let listaInicial = [];
    const [listaComponent, setListaComponent] = useState(listaInicial);
    let url = window.location.href;
    let temp = url.split('/');
    let idCarrito = temp[4].toString();
    
    useEffect(() => {
        axios.get('http://localhost:3000/detalle-carrito/')
        .then(response => response.data)
        .then( (res)=> {
            for(let i=0; i<res.length; i++){
                if(res[i].idCarrito == idCarrito){
                    listaIdProductos.set(res[i].idProducto,
                         [res[i].cantidad, res[i].idDetalle]);
                    if(conjuntoIdProductos.size == 0) {
                        cantProductos++;
                    }     
                    
                }
            }
            console.log(cantProductos);
            if(cantProductos > 0){
                // se consultan todos los productos de la db
                for (let [clave, valor] of listaIdProductos.entries()){       
                    let url_productos = 'http://localhost:3000/productos/';
                    axios.get(url_productos.concat(clave))
                    .then(response => response.data)
                    .then( (res)=> {
                        let nombre = res.nombre;
                        let precio = res.precio;
                        let imagen = res.source;
                        let desc = res.descripcion;
                        let cant = valor[0];  
                        if(!conjuntoIdProductos.has(clave)){
                            listaNomProductos.set(clave, [res.nombre, res.precio]);
                            conjuntoIdProductos.add(clave);
                            setListaComponent(listaComponent => [...listaComponent, <CarritoDetalle nombre ={nombre} precio ={precio} src={imagen}
                            descripcion={desc} cantidad={cant} />]);
                            
                        }    
                    });
                }
                //return(<div>{listaComponent}</div>)
            }
            else{
                //return(<h1 className="vacioCarrito">Carrito Vacío</h1>); 
            };
        });

    })
    if (cantProductos > 0) {
        return(<div>{listaComponent}</div>);
    } else {
        return(<h1 className="vacioCarrito">Carrito Vacío</h1>); 
    }  
  
}

let Resumen = () =>{

    let listaLi = []
    let precioTotal = 0;

        console.log('longitud')
        console.log(conjuntoIdProductos.length)
        if(conjuntoIdProductos.length != 0){
            //const jsonCarro = JSON.parse(localStorage.getItem("carrito"));
            //var productLista = jsonCarro.carrito;
            console.log(listaIdProductos.entries());
            for (let [clave, valor] of listaIdProductos.entries()) {
                let nombre = listaNomProductos.get(clave)[0];
                let precio = parseFloat(valor[0]) * listaNomProductos.get(clave)[1];
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

/* 
    if(conjuntoIdProductos.length != 0) {
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
 */


const CarritoComponent = (props) => {
    conjuntoIdProductos.clear();
    const [liveDemo, setLiveDemo] = React.useState(false);
   {/* if(!props.auth){ 
        console.log(props.auth);
        return <Redirect to='/login'/>  
      }
    else{*/}
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
                            </div>
                            <div id="metodo_selection">
                                    <PaymentInputs/>                                    
                            </div>
                            <div id="record_method">
                                <FormGroup check>
                                    <Label check>
                                    <Input type="checkbox" />{' '}
                                    Guardar Tarjeta
                                    </Label>
                                </FormGroup>
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
                                            // se eliminan todos los detalle-carrito
                                            for ( let [clave, valor] of listaIdProductos.entries()) {
                                                // valor[1] contiene el id del detalle-carrito
                                                let url_del_detalle = '/detalle-carrito/'
                                                axios.delete(url_del_detalle.concat(valor[1]))
                                                .then(response => response.data)
                                                .then((res) => {
                                                    console.log(res);
                                                }); 
                                            }
                                            listaIdProductos.clear();    
                                            setLiveDemo(false);
                                            /* localStorage.setItem("carrito","")
                                            localStorage.setItem("precio",0)
                                            localStorage.setItem("contador_items", 0) */
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






import React, {createElement, useState} from "react";
import {Container} from 'reactstrap';
import {LoadStars, LoadComentarios} from './LoadResourcesProducts';
import {UncontrolledCarousel} from 'reactstrap';
import '../css/product.css'
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import NavbarComponent from "./navbarComponent";
import ListaProductos from './ListaProductos';

function ProductComponent() {

    let carrito = [];
    console.log(carrito)
    
    let lista_productos = ListaProductos("http://localhost:4000/api/allproducts"); 

    let url2 = window.location.href;
    let temp = url2.split('/');
    let id_producto = temp[4].toString();

    let producto_selec = '';
    lista_productos.map(producto => (producto.id === id_producto ? producto_selec = producto : console.log('no hay')));
    const seleccionarProducto = id => {
        const producto = lista_productos.filter(producto => producto.id === id);
        let p = producto[0]
        p.cantidad = 1
        
        if(localStorage.getItem("carrito")){
            let inCarrito = false;
            let data = JSON.parse(localStorage.getItem("carrito"))
            for(let j of data.carrito){
                if(p.id == j.id){
                    j.cantidad = j.cantidad + 1;
                    inCarrito = true;
                    break;
                }
            }
            if(!inCarrito){
                data.carrito.push(p)
            }
            
            localStorage.setItem("carrito",JSON.stringify(data))
        }
        else{
            
            localStorage.setItem("carrito",JSON.stringify({"carrito":[p]}))
        }
        

        
    }

    return (
        <>
    <NavbarComponent />
    <Container className='cont_detail'>   

        <div className="row justify-content-center">
            <div className="col-sm-6 col-12" id="imgContainer">
                <div className="card mb-3" id="imgCard">
                    <div className="card-body">
                      <h5 className="card-title name_product">{producto_selec.nombre}</h5>
                    </div>
                    <div id="card-body-img">
                        {/*<UncontrolledCarousel items={producto_selec.imagen} className="card-img-bottom image"/>*/}
                        <img src={producto_selec.imagen} className="card-img-bottom image" />
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
                                Calificación: 
                                <div id='estrellas_val'>
                                   <LoadStars estrellas={producto_selec.valoracion}/>
                                </div>
                                </p>
                        </div>
                        <div className="col-12" id="productoDescripcion"> 
                            <p>{producto_selec.descripcion}</p>                            
                        </div>
                        
                        <div className="col-6">
                            <h6>Distancia</h6>
                        </div>
                        <div className="col-6">
                            <p>{producto_selec.id} Etapas</p>
                        </div>
                        <div className="col-12" id="cont_comentarios">
                            <h5>Comentarios</h5>
                            <div data-list="[producto_selec.comentarios]" id="comentarios">
                            </div>
                           {/*} <script> 
                                {
                                    document.addEventListener('DOMContentLoaded', function() {
                                        var div_com = document.getElementById("comentarios");
                                        var array = div_com.dataset.list;
                                        let ul = document.createElement("ul");
                                        let comns = producto_selec.comentarios;
                                        for (let c of array){
                                            let li = document.createElement("li");
                                            li.textContent= c;
                                            ul.appendChild(li)
                                        }
                                        div_com.appendChild(ul)
                                })
                                }
                            </script>*/}
                           {/*<LoadComentarios comentarios={producto_selec.comentarios} />*/}
                            <ul>
                                {producto_selec.comentarios}
                            </ul>
                            
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
                            <p>$ {producto_selec.precio}</p>
                        </div>
                        <div className="col-6">
                            <p>Cantidad</p>
                        </div>
                        <div className="col-6 text-right">
                            <p>-1+</p>
                        </div>
                        <div className="col-6" id="totlabel">
                            <p>Total</p>
                        </div>
                        <div className="col-6 text-right" id = "valtotlabel">
                            <p>$ {producto_selec.precio}</p>
                        </div>
                        <div className="col-12 text-center">
                            <button type="button" id="btnAgregarCarrito" className="btn btn-primary"
                            onClick = { () => seleccionarProducto(id_producto)}><i className='fas fa-shopping-cart fa-lg'></i>{" "}Agregar a carrito</button>
                        </div>
                    </div>
                </div>
            </div>
            

          </div>
    </Container>
        </>

    );

  }

  
/* function anadirComentarios (array, elem){
    console.log(array);
    let contenedor = document.getElementById(elem); 
    let temp;
    for (let i = 0; i < array.length; i++){
        temp = document.createElement('p');
        temp.innerHTML = array[i];
        //contenedor.appendChild(temp);
    }
    
} */


  export default ProductComponent;
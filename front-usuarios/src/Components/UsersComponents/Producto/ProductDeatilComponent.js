
import {Redirect} from 'react-router-dom';
import React, {useEffect, useState} from "react";
import {Container} from 'reactstrap';
import {LoadStars} from './LoadResourcesProducts';
import '../../../css/product.css';
import "../../../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import NavbarComponent from "../navBar/navbarComponent";
import ListaProductos from './ListaProductos';
import axios from 'axios';
import { Avatar, Grid, Paper } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductComponent() {
    const [calificaciones,setCalificaciones] = useState("");
    const [load,setLoad] = useState(false)
    const [cantidad, setCantidad] = React.useState(1);

    let lista_productos = ListaProductos("http://localhost:3000/productos"); 
    let url2 = window.location.href;
    let temp = url2.split('/');
    let id_producto = temp[4].toString();

    
    let producto_selec = {};
    lista_productos.map(producto => {
        if(producto.id == id_producto){
            producto_selec = producto
        }
    });
   
    let comentarios = ListaProductos("http://localhost:3000/calificaciones?filter[where][idProducto]="+id_producto)
    let sources = ListaProductos("http://localhost:3000/sourcesproductos?filter[where][id_producto]="+id_producto)
    
    let settings={
        arrows:true,
        dots:true,
        infinite:true,
        swipeToSlide:true,
        speed: 300,
        slidesToShow: 1,        
        slidesToScroll: 1,
        cssEase: "linear",
        
    }

    

    const seleccionarProducto = id => {
        let listaIdProductos = new Map(); // clave: id, valor: [cantidad, id detalle-carrito]
        /* crear post para detail-carrito, 
        pero antes preguntar si el producto ya existe,
        si el producto ya existe, hacer un update de la cantidad de productos
        el id del detail-producto debe ser 'id_usuario + cant_productos' 
        */
       let producto = {}
       for(let prod of lista_productos){
           // encontrar el producto en lista
           if(prod.id == id){
               producto = prod;
           }
       }
       let p = producto
       p.cantidad = 1
       //obtener idCarrito
       axios.get('/carrito', {"where": {"idUsuario": localStorage.getItem('userId')}})
        .then(respuesta => respuesta.data)
        .then(res => {
            console.log(res);
        });

/*        axios.get('http://localhost:3000/detalle-carrito/')
       .then(response => response.data)
       .then( (res)=> {
           console.log(res)
           for(let i=0; i<res.length; i++){
               if(res[i].idCarrito == idCarrito){
                   listaIdProductos.set(res[i].idProducto,
                        [res[i].cantidad, res[i].idDetalle]);
                   cantProductos++;
                   //let temp = cantProductos;
                   //setCantProductos(temp++);
               }
           }
        }
       ); */

        if(localStorage.getItem("carrito")){
            let inCarrito = false;
            let data = JSON.parse(localStorage.getItem("carrito"))
            for(let j of data.carrito){
                //verifica si ya existe en carrito
                if(p.id == j.id){
                    j.cantidad = j.cantidad + 1;
                    inCarrito = true;

/*                     axios.put('/detalle-carrito/{id}', {
                        "where": {
                          "username":"john",
                          "email":"a@b.com"
                        }
                      }) */

                    break;
                }
            }
            if(!inCarrito){
                data.carrito.push(p)
                let items = parseInt(localStorage.getItem("contador_items"));
                localStorage.setItem("contador_items", items+1)
                let val_actual = document.getElementById("cont_icon_carrito").getElementsByTagName("p")[0];
                val_actual.textContent = items+1;
            }
            
            localStorage.setItem("carrito",JSON.stringify(data))
        }
        else{
            localStorage.setItem("carrito",JSON.stringify({"carrito":[p]}))
            let items = parseInt(localStorage.getItem("contador_items"));
            localStorage.setItem("contador_items", items+1)
            let val_actual = document.getElementById("cont_icon_carrito").getElementsByTagName("p")[0];
            val_actual.textContent = items+1;
        }
        

        
    }


    const aumentar = () => {
        setCantidad(cantidad+1);
    };

    const disminuir = () => {
        if(cantidad>1){
            setCantidad(cantidad-1);
        }
    };

    const auth = parseInt(localStorage.getItem("auth"), 10)
    const role= localStorage.getItem("role");
    
    
    if( auth && (role=="0" || role=="1")){       

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
                           
                            <Slider {...settings} className="Slide_img">
                                {   
                                    sources.map(fuentes =>(
                                        <img src={fuentes.source} className="card-img-bottom image" />
                                    )     )
                                         
                                }
                            </Slider>
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
                                        
                                       <LoadStars estrellas={producto_selec.promedioPuntuacion}/>
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
                               
                                
                                    {console.log(comentarios)}
                                    {comentarios.map(comenta=>(
                                            <div style={{ padding: 14 }} className="commentsBox">
                                            
                                                <Grid style={{ margin: "10px" }} item>
                                                <Avatar alt="Remy Sharp" src={"https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"} />
                                                </Grid>
                                                <Grid justifyContent="left" item xs zeroMinWidth>
                                                <h6 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h6>
                                                <p style={{ textAlign: "left" }}>
                                                    {comenta.comentario}
                                                </p>
                                                </Grid>
                                                                                  

                                            </div> 
                                    ))}
                                
                                
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
                            <div className="col-6 text-center">
                                <p>$ {producto_selec.precio}</p>
                            </div>
                            <div className="col-6">
                                <p>Cantidad</p>
                            </div>
                            <div className="col-6 text-center cantProductoBox">
                                <Button  onClick={aumentar} color="primary">+</Button>
                                <p> {cantidad} </p>
                                <Button  onClick={disminuir} color="primary">-</Button>
                            </div>
                            <div className="col-6" id="totlabel">
                                <p>Total</p>
                            </div>
                            <div className="col-6 text-center" id = "valtotlabel">
                                <p>$ {producto_selec.precio * cantidad}</p>
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
  else if(auth && (role=="2" || role=="3")){
    return  <Redirect to='/admin/dashboard/report'/> 
    }
    else return  <Redirect to='/login'/> 

  


}
  export default ProductComponent;
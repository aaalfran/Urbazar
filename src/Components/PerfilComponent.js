import React from "react";
import NavbarComponent from "./navbarComponent";
import Bryan from "../imagenes/bryan.jpeg";
import {LoadStars, LoadComentarios} from './LoadResourcesProducts';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import ProductInfo from "./ProductInfo";
import cupcakes from "../imagenes/cupcakes.jpg";
import camisa from "../imagenes/producto2.jpg";
import comida from "../imagenes/producto3.jpg";
import producto from "../imagenes/producto1.jpg";

import "../css/perfil.css";

function PerfilComponent(){
    return(
        <html>
            <head>
                <title> Perfil_UrbazApp </title>
            </head>
            <body>
                <NavbarComponent/>

                <div class="container emp-profile">
                <form method="post">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="profile-img">
                                <img src={Bryan} alt=""/>
                                <div class="file btn btn-lg btn-primary">
                                    Change Photo
                                    <input type="file" name="file"/>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="profile-head">
                                        <h3>
                                            ¡Bienvenido Walter Lopez!
                                        </h3>
                                        <h6>
                                        <FormControlLabel control={<Switch  name="modo_vendedor" />} label="Modo vendedor"/>
                                        </h6>
                                        
                                
                            </div>
                        

                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">General</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Configuración</a>
                                    </li>
                                </ul>
                            <div class="tab-content profile-tab" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Nombre</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>Walter López</p>
                                                </div>
                                            </div>
                                            
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Teléfono</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>0962762971</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Correo</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>bplaza@espol.edu.ec</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Familia</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>Lopez Plaza</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Ubicación</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>Ciudadela Joya Etapa 2</p>
                                                </div>
                                            </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Método de pago</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>Tarjeta xy <i class="fas fa-pencil-alt"></i></p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Modo</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>Comprador </p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Plan</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>Básico - comprador</p>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Estado</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>Activo</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Puntuación</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p> <LoadStars estrellas={"0"}/> </p>
                                                </div>
                                            </div>
                                
                                </div>
                            </div>
                        </div>


                    </div>
                    <div class="row">
                    </div>
                        
                </form> 
            <div className="container_actividad">
                <div id="title_cont">
                    <h6>Actividad reciente</h6>
                </div>
                <div className="mr-auto cont_productos">
                    <div id="panel_busqueda">
                        <form className='mr-auto search_form col-md-6'>
                            <TextField className="col-12"  placeholder="Buscar..."/>
                            <button type='submit'><i className='fas fa-search mr-auto'></i></button>
                        </form>
                        <form noValidate className="col-md-3">
                            <TextField id="fecha" type="date" defaultValue="2020-01-25" className="panel_fecha"  InputLabelProps={{shrink: true, }}/>
                        </form>
                        <FormControl className="activitie col-md-3">
                            <Select native inputProps={{ name: 'activitie', id: 'actividad-select', }} >
                            <option value={10}>Compras</option>
                            <option disabled="true" value={20}>Ventas</option>
                            </Select>
                        </FormControl>

                    </div>
                    <div id="container_productos">
                        <ProductInfo nombre ="Cupcake" precio ="2.00" src={cupcakes}
                              cantidad="1" vendedor="Karla Duran"/>
                        <ProductInfo nombre ="Blusa" precio ="2.00" src={camisa}
                              cantidad="2" vendedor="Daniel Aguiño"/>
                        <ProductInfo nombre ="Celular" precio ="2.00" src={comida}
                              cantidad="1" vendedor="Karla Duran"/>
                        <ProductInfo nombre ="Cupcake" precio ="2.00" src={producto}
                             cantidad="1" vendedor="Bianca Quiñonez"/>
                    </div>

                </div>
            </div> 

            </div>
                
            </body>
        </html>
    )
}

export default PerfilComponent;
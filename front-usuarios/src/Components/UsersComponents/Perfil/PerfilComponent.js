import React, {useState} from "react";
import NavbarComponent from "../navBar/navbarComponent";
import Bryan from "../../../imagenes/bryan.jpeg";
import {LoadStars} from '../Producto/LoadResourcesProducts';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Redirect} from 'react-router-dom';
import LoadDatos from "./LoadDatosUsuario";
import LoadCategories from './LoadCategories';
import "../../../css/perfil.css";
import LoadProductos from './LoadProductos';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import VendedorCompra from "./VendedorCompra";
const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'scroll',
      
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      
    },
  }));

function PerfilComponent(props){

    let [vendedor,setVendedor] = useState(false);
    let [switchV,setSwitchV] = useState(false);
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    const auth = parseInt(localStorage.getItem("auth"), 10)
    const role= localStorage.getItem("role");
    
    
    if( auth && (role=="0" || role=="1")){ 
    


        let info = LoadDatos("http://localhost:3000/personas/"+ localStorage.getItem("userId"));
        let categorias = LoadCategories();
        
        return(
            <>
                <NavbarComponent/>


                <div className="emp-profile">

                <Modal
                className={classes.modal}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}>
                    <Fade in={open}>
                    <div className={classes.paper + " rounded w-75 modalResponsive"}>
                        <h2 id="transition-modal-title">Modo Vendedor</h2>
                        <p id="transition-modal-description">¿Quieres activar las funcionalidades de un vendedor?</p>
                        <VendedorCompra setVendedor={setVendedor}  setOpen={setOpen}></VendedorCompra>
                    </div>
                    </Fade>
                </Modal>
                

                <form method="post">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src={Bryan} alt=""/>
                                <div className="file btn btn-lg btn-primary">
                                    Cambiar foto
                                    <input type="file" name="file"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                        <h3>
                                            ¡Bienvenido {info.nombre}!
                                        </h3>
                                        <h6>
                                        <FormControlLabel control={<Switch name="modo_vendedor" checked={switchV}/> } label="Modo vendedor"
                                        onClick={(e) => {
                                        if(!vendedor){
                                            setOpen(!open)
                                        }else{
                                            setSwitchV(!switchV)
                                        }
                                        
                                        }}/>
                                        </h6>
                                        
                                
                            </div>
                        

                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">General</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Configuración</a>
                                    </li>
                                </ul>
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Nombre</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{info.nombre}</p>
                                                </div>
                                            </div>
                                            
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Teléfono</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{info.telefono}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Correo</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{info.correo}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Familia</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>Lopez Plaza</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Ubicación</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>Ciudadela Joya Etapa 2</p>
                                                </div>
                                            </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Método de pago</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>Tarjeta xy <i class="fas fa-pencil-alt"></i></p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Modo</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>Comprador </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Plan</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>Básico - comprador</p>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Estado</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>Activo</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Puntuación</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p> <LoadStars estrellas={"0"}/> </p>
                                                </div>
                                            </div>
                                
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="row">
                    </div>
                        
                </form> 
            <div className="container_actividad">
                <div id="title_cont">
                    <h6>Actividad reciente</h6>
                </div>
                <div className="mr-auto cont_productos">
                    <div id="panel_busqueda">
                       {/* <form className='mr-auto search_form col-md-6'>
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
                        </FormControl>*/}
                        <p>Categoría: </p>
                         <FormControl className="activitie col-md-3">
                                <Select native inputProps={{ name: 'activitie', id: 'actividad-select', }}  onChange= {props.handleChange} >

                                {
                                categorias.map(categoria=>(
                                    <option name='activitie' value={categoria.id}>{categoria.nombre}</option>
                                ))
                                }
                                
                                </Select>
                        </FormControl>
                            
                    </div>
                    <div id="container_productos">
                        <p id="info_vacio">Seleccione una categoría</p>
                    </div>

                </div>
            </div> 

            </div>
                <script src={LoadProductos}></script>
            
        </>
    );
    }
    else if(auth && (role=="2" || role=="3")){
        return  <Redirect to='/admin/dashboard/report'/> 
    }
    else return  <Redirect to='/login'/> 
    
}

export default PerfilComponent;
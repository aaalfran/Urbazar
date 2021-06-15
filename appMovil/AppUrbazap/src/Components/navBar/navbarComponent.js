import React, { useState} from 'react';
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import axios from 'axios';
import '../../css/MainComponent.css';
export let idCarritoDef;
export let cantidadProd = 0;

const NavbarComponent = (props) => {
    /*const [isOpen, setIsOpen] = useState(false);
    const [cantProductos, setCantProductos] = useState(0);
    const [idCarrito, setIdCarrito] = useState(0);
    const toggle = () => setIsOpen(true);*/

    /*axios.get('http://localhost:3000/carrito')
    .then(response => response.data)
    .then( (res)=> {
        for(let i=0; i<res.length; i++){
            if(res[i].idUsuario === localStorage.getItem('userId')){
              setIdCarrito(res[i].id);
            }
        }
    })*/

    /*idCarritoDef = idCarrito;
    let cantidad = 0;*/
 
    /*axios.get(`http://localhost:3000/detalle-carrito/${idCarritoDef}`)
    .then(response => response.data)
    .then( (res2)=> {

        for(let i=0; i<res2.length; i++){
            if(res2[i].idCarrito === idCarrito){
              cantidad++;
            }
        }
          setCantProductos(cantidad);
          cantidadProd = cantProductos;
      } 
    );    */

    return (  
     <>   
        <Navbar color='faded' dark className='navbar'>
        <NavbarToggler className="toggler mr-2 custom-toggler"/>
        {/* menu toggler */}
        

        <NavbarBrand data-intro="¡Bienvenido a UrbazApp! Demos un tour" href='/' className='logo'>UrbazApp</NavbarBrand>
        <NavbarBrand href='/' className='logo2'>UApp</NavbarBrand>

        <form className='mr-auto search_form' action={`http://${window.location.host}/buscador`}>
          <input id="myInput" data-intro="Busca productos de tu interés" type='text' placeholder='Buscar...' name='search' required/>
          <button type='submit'><i className='fas fa-search mr-auto'></i></button>
        </form>

        
        

        <button type='button' className='button_nav boton_notificacion'><i className='fas fa-bell fa-lg'></i></button>
       
      </Navbar>

    </>
    );
}
 
export default NavbarComponent;
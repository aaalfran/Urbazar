import React, { useState } from 'react';
import housing from '../imagenes/housing.png'
import home from '../imagenes/home.png'
import money from '../imagenes/bolsa-de-dinero.png'
import { Navbar, NavbarToggler, NavbarBrand} from 'reactstrap';
import '../css/aboutusComponent.css'

function AboutUSComponent(){    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <html>
       
        <meta name="author" content="Beescript"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

        <body>
        <Navbar color='faded' dark className='navbar'>
            <NavbarToggler onClick={toggle} className="toggler mr-2 custom-toggler"/>
            {/* hacer el menu del toggler */}
            <NavbarBrand href='/' className='logo'>UrbazApp</NavbarBrand>
            <NavbarBrand href='/' className='logo2'>UApp</NavbarBrand>

            <form className='mr-auto search_form'>
                <input type='text' placeholder='Buscar...' name='search'/>
                <button type='submit'><i className='fas fa-search mr-auto'></i></button>
            </form>

            <p id='p_bienvenido'>Bienvenido!</p>
            <p id='nombre_user'>Walther López</p>

            <button type='button' className='button_nav'><i className='fas fa-bell fa-lg'></i></button>
            <button type='button' className='button_nav'><i className='fas fa-shopping-cart fa-lg'></i> </button>

            </Navbar>
            <header id="about_title">
                <h1>¿Qué hacemos? </h1>
            </header>
            <div id="contenedor_ideas">
                <div class="ideas odd">
                    <div className="imagen_descp">
                        <img src={housing} alt="house" width="700px" height="300px"/>
                    </div>
                    <div className="content">
                        <p>
                        Con <strong>UrbazApp </strong> ahora es posible el comercio entre urbanizaciones.
                        Encuentra todo lo que necesitas cerca de ti, pídelo y espera en casa.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        </p>
                    </div>
                </div>

                <div class="ideas even">
                    <div className="content">
                        <p>
                        ¡Comprar sin salir de casa nunca había sido tan fácil y seguro! <br/>
                        Con UrbazApp puedes tener la seguridad de contactarte con proveedores honestos y
                        confiables que entregarán tu pedido en las mejores condiciones.<br/> ¡Tu comunidad te cuida!
                        
                        
                        </p>
                    </div>
                    <div className="imagen_descp">
                        <img src={home} alt="house" width="700px" height="200px"/>
                    </div>
                </div>

                <div class="ideas odd">
                    <div className="imagen_descp">
                    <img src={money} alt="house" width="700px" height="200px"/>
                    </div>
                    <div className="content">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        </p>
                    </div>
                </div>
            </div>
            </body>
        </html>
    );
}

export default AboutUSComponent

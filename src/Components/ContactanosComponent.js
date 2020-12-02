import React, { useState } from 'react';
import Datetime from 'react-datetime';

import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
        Card, CardTitle, CardBody } from 'reactstrap';

import '../css/ContactanosComponent.css'
import "react-datetime/css/react-datetime.css";

function ContactanosComponent(){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
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
            <div id="header">
                ¡En UrbazApp nos importan tus comentarios!
            </div>
            <div className="registro">
                <Card id="contact_form">
                    <CardTitle id="titulo">Contáctanos</CardTitle>
                    <CardBody>
                    <form>
                        <div className="form-double">
                            <div className="col-md-6 nombre">
                                <label for="nombres">Nombres</label>
                                <input type="text" class="form-control" id="nombres" name="nombres" required/>
                            </div>
                            <div className="col-md-6 apellido">
                                <label for="apellidos">Apellidos</label>
                                <input type="text" class="form-control" id="apellidos" name="apellidos" required/>
                            </div>
                        </div>
                        <div className="form-double">
                            <div className="col-md-6 nombre">
                                <label for="nombres">Ciudad de origen</label>
                                <input type="text" class="form-control" id="nombres" name="nombres" required/>
                            </div>
                            <div className="col-md-6 form-group">
                            <label for="Fecha de nacimiento">Fecha de nacimiento</label>
                                <Datetime
                                    timeFormat={false}
                                    inputProps={{placeholder:""}}
                                    />
                            </div>
                        </div>
                        <div className="form-double">
                            <div className="col-md-6">
                                <label for="urbanizacion">Urbanización</label>
                                <select class="form-control">
                                    <option>---</option>
                                    <option>Las joyas</option>
                                    <option>Los ceibod</option>
                                    <option>Villa bonita</option>
                                    <option>Ciudad Celeste</option>
                                </select>

                            </div>
                            <div className="col-md-6">
                                <label for="etapa">Etapa</label>
                                <select class="form-control">
                                    <option>---</option>
                                    <option>Primera</option>
                                    <option>Segunda</option>
                                    <option>Tercera</option>
                                    <option>Cuarta</option>
                                </select>

                                </div>

                        </div>

                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp"/>
                            <small id="emailHelp" class="form-text text-muted">Asegurate de ingresar un email válido al que podamos contactarte.</small>
                        </div>
                        <div id="message" class="form-group">
                            <label for="mensaje">Mensaje</label>
                            <textarea type="text" class="form-control" id="mensaje" placeholder="Dejanos tu mensaje..."/>
                        </div> 
                        <div id="send_button">
                            <button type="submit" class="btn btn-primary">Enviar</button>
                        </div>                       
                        </form>
                    </CardBody>
                </Card>
            </div>

            




       </body>
        </html>
    );
}

export default ContactanosComponent
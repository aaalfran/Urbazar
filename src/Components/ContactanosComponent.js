import React, { useState } from 'react';
import Datetime from 'react-datetime';
import 'intro.js/introjs.css';
import NavbarComponent from './navbarComponent';
import { Card, CardTitle, CardBody } from 'reactstrap';
import introJs from 'intro.js';

import '../css/ContactanosComponent.css'
import "react-datetime/css/react-datetime.css";



function ContactanosComponent(){        
    introJs().start();
      
    return (
        <html>       
            <meta name="author" content="Beescript"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intro.js/3.1.0/introjs-rtl.min.css" integrity="sha512-CBhAm6vyK8E1WXomkztwQZ4Lq9mHE1PjWWXOICo5S5/deArabmCDoytC4+on0xxMdGhWJHBRTQdozFwZb9saYw==" crossorigin="anonymous" />
       <body>
            <NavbarComponent/>
            <div id="header">
                ¡En UrbazApp nos importan tus comentarios!
            </div>
            <div className="registro">
                <Card id="contact_form">
                    <CardTitle id="titulo">Contáctanos</CardTitle>
                    <CardBody>
                    <form>
                        <div data-intro='Hello step one!' className="form-double">
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
                            <button type="submit" data-intro='Hello step one!' class="btn btn-primary">Enviar</button>
                        </div>                       
                        </form>
                    </CardBody>
                </Card>
            </div>

            



        <script src="..\javascript\contacts.js"> </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/intro.js/3.1.0/intro.min.js" integrity="sha512-8HbqTH7QzK30vhgVF/hTJ4loXwV85UU9vjI4nK04AfdOFzl8zG7b3LLAEHDmvIM8I0rvserMXmQx4Hw+kRknjw==" crossorigin="anonymous"></script>
       </body>
        </html>
    );
}

export default ContactanosComponent
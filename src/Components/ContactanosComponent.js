import React from 'react';
import NavbarComponent from './navbarComponent';
import { Card, CardTitle, CardBody } from 'reactstrap';
import '../css/ContactanosComponent.css';
import "react-datetime/css/react-datetime.css";



function ContactanosComponent (){        
 
    return (
        <html>      
            <head>
            <meta name="author" content="Beescript"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
           
            </head> 
       <body>
            <NavbarComponent/>
            <div id="header">
                ¡En UrbazApp nos importan tus comentarios!
            </div>
            <div className="registro">
                <Card id="contact_form">
                    <CardTitle id="titulo">Contáctanos</CardTitle>
                    <CardBody>
                    <form action="http://localhost:4000/api/contactanos" method="post" >
                        <div className="col-md-12 form-double">
                            <div className="col-md-4 nombre">
                                <label for="nombres">Nombre</label>
                                <input type="text" className="form-control" id="nombres" name="nombres" required/>
                            </div>

                            <div className="col-md-4">
                                <label for="urbanizacion">Urbanización</label>
                                <select name="urbanizacion" className="form-control">
                                    <option>---</option>
                                    <option>Las joyas</option>
                                    <option>Los ceibos</option>
                                    <option>Villa bonita</option>
                                    <option>Ciudad Celeste</option>
                                </select>

                            </div>
                            <div className="col-md-4">
                                <label for="etapa">Etapa</label>
                                <select name="etapa" className="form-control">
                                    <option>---</option>
                                    <option>Primera</option>
                                    <option>Segunda</option>
                                    <option>Tercera</option>
                                    <option>Cuarta</option>
                                </select>

                                </div>

                        </div>

                        <div className="form-group">
                            <label for="email">Email address</label>
                            <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                            <small id="emailHelp" className="form-text text-muted">Asegurate de ingresar un email válido al que podamos contactarte.</small>
                        </div>

                        
                        <div className="form-group">
                            <label for="asunto">Asunto</label>
                            <input type="text" name="asunto" className="form-control" id="asunto"/>
                        </div>

                        <div id="message" className="form-group">
                            <label for="mensaje">Mensaje</label>
                            <textarea type="text" className="form-control" name="mensaje" id="mensaje" placeholder="Dejanos tu mensaje..."/>
                        </div> 
                        <div id="send_button">
                            <button type="submit"  className="btn">Enviar</button>
                        </div>                       
                        </form>
                    </CardBody>
                </Card>
            </div>

            
        
       </body>
        </html>
    );
    
}

export default ContactanosComponent; 
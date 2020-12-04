import Datetime from 'react-datetime';
import NavbarComponent from './navbarComponent';
import { Card, CardTitle, CardBody } from 'reactstrap';
import '../css/ContactanosComponent.css';
import "react-datetime/css/react-datetime.css";



function ContactanosComponent(){        
 
      
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
                    <form>
                        <div data-intro='Hello step one!' className="form-double">
                            <div className="col-md-6 nombre">
                                <label for="nombres">Nombres</label>
                                <input type="text" className="form-control" id="nombres" name="nombres" required/>
                            </div>
                            <div className="col-md-6 apellido">
                                <label for="apellidos">Apellidos</label>
                                <input type="text" className="form-control" id="apellidos" name="apellidos" required/>
                            </div>
                        </div>
                        <div className="form-double">
                            <div className="col-md-6 nombre">
                                <label for="nombres">Ciudad de origen</label>
                                <input type="text" className="form-control" id="nombres" name="nombres" required/>
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
                                <select className="form-control">
                                    <option>---</option>
                                    <option>Las joyas</option>
                                    <option>Los ceibos</option>
                                    <option>Villa bonita</option>
                                    <option>Ciudad Celeste</option>
                                </select>

                            </div>
                            <div className="col-md-6">
                                <label for="etapa">Etapa</label>
                                <select className="form-control">
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
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                            <small id="emailHelp" className="form-text text-muted">Asegurate de ingresar un email válido al que podamos contactarte.</small>
                        </div>
                        <div id="message" className="form-group">
                            <label for="mensaje">Mensaje</label>
                            <textarea type="text" className="form-control" id="mensaje" placeholder="Dejanos tu mensaje..."/>
                        </div> 
                        <div id="send_button">
                            <button type="submit" data-intro='Hello step one!' className="btn btn-primary">Enviar</button>
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
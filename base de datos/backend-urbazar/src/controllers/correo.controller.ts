// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';
import {RestBindings, post, Request, requestBody} from '@loopback/rest';
const nodemailer = require('nodemailer');
import {inject} from '@loopback/core';

export class CorreoController {

  constructor(@inject(RestBindings.Http.REQUEST) private request: Request){}
  @post('/api/contactanos')
  async correo(
    
    @requestBody({
      content:{
        'application/x-www-form-urlencoded': {
          type:'object',
          schema:{
            properties:{
              nombres: {type: 'string'},
              email: {type: 'string'},
              urbanizacion: {type: 'string'},
              etapa: {type: 'string'},
              asunto: {type: 'string'},
              mensaje: {type: 'string'}
            },
          },

        },
      },
    })  request:Request,
  ){
    nodemailer.createTestAccount(()=> {
      const htmlEmail = `
      <h4> Un nuevo cliente intenta contactarte </h4>
      <ul> 
          <li>Nombre: ${this.request.body.nombres}</li>
          <li>Email: ${this.request.body.email}</li>
          <li>Urbanización: ${this.request.body.urbanizacion} </li>
          <li>Etapa: ${this.request.body.etapa} </li>
      </ul>
      <p> <strong> Asunto: </strong>  ${this.request.body.asunto}  </p> 
      <h4> Mensaje </h4>
      <p> ${this.request.body.mensaje}</p> `;
      let transporter = nodemailer.createTransport({
          host:"smtp.gmail.com",
          port:587,
          secure: false,
          auth: {
              user: 'urbazapp@gmail.com',
              pass: 'urbazApp25'
          }
      });
  let mailOptions = {
      from: "Remitente",
      to: "belinaza@espol.edu.ec", //Aquí se debería cambiar por el mail del administrador del sistema.
      subject: "Formulario de contacto",
      text: this.request.body.nombres,
      html: htmlEmail
  };
  transporter.sendMail(mailOptions, ()=> {
      console.log("Correo enviado")
      
  });
      
  });
 
  }
}

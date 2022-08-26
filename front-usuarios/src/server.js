const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const app = express()

app.listen(4000, () => {
  console.log('Servidor escuchando en el puerto 4000')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())

app.post('/api/contactanos', async (req, res) => {
  // eslint-disable-next-line node/handle-callback-err
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
        <h4> Un nuevo cliente intenta contactarte </h4>
        <ul> 
            <li>Nombre: ${req.body.nombres}</li>
            <li>Email: ${req.body.email}</li>
            <li>Urbanización: ${req.body.urbanizacion} </li>
            <li>Etapa: ${req.body.etapa} </li>
        </ul>
        <p> <strong> Asunto: </strong>  ${req.body.asunto}  </p> 
        <h4> Mensaje </h4>
        <p> ${req.body.mensaje}</p> `
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'urbazapp@gmail.com',
        pass: 'urbazApp25'
      }
    })
    const mailOptions = {
      from: 'Remitente',
      to: 'belinaza@espol.edu.ec', // Aquí se debería cambiar por el mail del administrador del sistema.
      subject: 'Formulario de contacto',
      text: req.body.mensaje,
      html: htmlEmail
    }
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err)
      }
      res.redirect('http://localhost:8080/contactanos')
    })
  })
})

app.get('/api/productos', async (req, res) => {
  try {
    const data = require('./datos/Productos.json')
    res.json(data)
  } catch {
    console.log('Error')
  }
})

app.get('/api/productos2', async (req, res) => {
  try {
    const data = require('./datos/Productos2.json')
    res.json(data)
  } catch {
    console.log('Error')
  }
})

app.get('/api/productos3', async (req, res) => {
  try {
    const data = require('./datos/Productos3.json')
    res.json(data)
  } catch {
    console.log('Error')
  }
})

app.get('/api/productos4', async (req, res) => {
  try {
    const data = require('./datos/Productos4.json')
    res.json(data)
  } catch {
    console.log('Error')
  }
})

app.get('/api/elprincipito', async (req, res) => {
  try {
    const data = require('./datos/elprincipito.json')
    res.json(data)
  } catch {
    console.log('Error')
  }
})

app.get('/api/allproducts', async (req, res) => {
  try {
    const data = require('./datos/ProductosAll.json')
    res.json(data)
  } catch {
    console.log('Error')
  }
})

app.get('/api/customers', async (req, res) => {
  try {
    const data = require('./datos/Customerss.json')
    res.json(data)
  } catch {
    console.log('Error')
  }
})

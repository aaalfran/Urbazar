const bodyParser = require("body-parser");
const express = require('express');
const cors = require('cors');
const app = express()

app.listen(4000)

        //static files

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.get('/api/datos', async(req, res)=>{
    try{     
        const data = require("./datos/prueba3.json")
        res.json(data)
    }    
     
    catch{
        console.log("Error")
    }
    
})
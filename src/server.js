const bodyParser = require("body-parser");
const express = require('express');
const cors = require('cors');
const app = express()

app.listen(4000)

        //static files

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.get('/api/productos', async(req, res)=>{
    try{     
        const data = require("./datos/Productos.json")
        res.json(data)
    }        
    catch{
        console.log("Error")
    }
    
})

app.get('/api/productos2', async(req, res)=>{
    try{     
        const data = require("./datos/Productos2.json")
        res.json(data)
    }        
    catch{
        console.log("Error")
    }
    
})

app.get('/api/productos3', async(req, res)=>{
    try{     
        const data = require("./datos/Productos3.json")
        res.json(data)
    }        
    catch{
        console.log("Error")
    }
    
})

app.get('/api/productos4', async(req, res)=>{
    try{     
        const data = require("./datos/Productos4.json")
        res.json(data)
    }        
    catch{
        console.log("Error")
    }
    
})

app.get('/api/elprincipito', async(req, res)=>{
    try{     
        const data = require("./datos/elprincipito.json")
        res.json(data)
    }        
    catch{
        console.log("Error")
    }
    
})

app.get('/api/allproducts', async(req, res)=>{
    try{     
        const data = require("./datos/ProductosAll.json")
        res.json(data)
    }        
    catch{
        console.log("Error")
    }
    
})

app.get('/api/customers', async(req, res)=>{
    try{     
        const data = require("./datos/Customerss.json")
        res.json(data)
    }        
    catch{
        console.log("Error")
    }
    
})
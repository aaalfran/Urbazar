import React, { Fragment, Component } from 'react';
import axios from "axios";
import data from '../../../enviroment'


const SaveImage = (selectedFile,clientId, categoria,nombre,precio,descripcion,stock) => {

    var bodyFormData = new FormData();
    bodyFormData.append('file',selectedFile)
    axios.post(`http://${data.number}/upload`,bodyFormData,{
        headers: {
            'content-type': 'multipart/form-data',
        }
    }).then( res => {
        console.log(res.data)
        console.log(clientId,categoria,nombre,precio,descripcion,stock)
        console.log("hecho primer post")
        let urlimg = `http://${data.number}/products/${res.data.filename}`
        axios.post(`http://${data.number}/productos`,{
            "idVendedor" : clientId,
            "ID_Categoria" : `${categoria}`,
            "nombre": nombre,
            "precio" : parseInt(precio),
            "activo" : 1,
            "descripcion" : descripcion,
            "stock" : parseInt(stock),
            "promedioPuntuacion": 0,
            "pedidoAnticipado": 0,
            "source" : urlimg,
        }).then( res => {
            let response = res.data;
            console.log(response)
            console.log("hecho segundo post")
            axios.post(`http://${data.number}/sourcesproductos`,{
                "id_producto" : response.id,
                "source" : response.source
            }).then(res => {
                console.log("Fin xd")
                
            })
            .catch(error => console.log('Segundo nivel ' + error))
        })
        .catch(error => console.log('Segundo nivel ' + error))
    })
        .catch(error => console.log('Hubo un error ' + error))
}



export default SaveImage
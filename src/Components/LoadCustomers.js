import React, {useEffect, useState} from 'react';

function LoadCustomers(){
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/api/customers")
    .then(response => response.json())
    .then(data => {
        setCustomers(data)})
    .catch(error=> console.log( "Hubo un error "+error))
    }, [] )
    return(
        <div  id="content">
            <table id="table_products" className="col-md-12">     
                {/*Cabecera */}   
                <tr> 
                    <th>Foto</th>
                    <th>Identificación</th>
                    <th>Nombre</th>
                    <th>Etapa</th>
                </tr>

                {/*Cuerpo*/}
                {customers.map(customer => (
                    <tr>     
                        <td><img width="30px" src={customer.foto}></img> </td>
                    <td> {customer.id} </td>
                    <td> {customer.nombre} </td>
                        <td> {customer.etapa} </td>
                        </tr>            
                
            ))}
            </table>
        </div>
    );

}

export default LoadCustomers
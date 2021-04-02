import React from 'react';
import { Container, Table } from 'reactstrap';
import {GraphMA} from '../../GraphMA';
import { Redirect} from 'react-router-dom';


const Ubicaciones = () => {
    let matrix = new GraphMA(false);
    matrix.addVertex("etapa1"); 
    matrix.addVertex("etapa21");
    matrix.addEdge("etapa1","etapa21",3)   
    var lista = []
    const listItems = matrix.vertexes.map((etapa) => {
        lista.push(<th>{etapa}</th>);
    })
    var listaFilas = []
    const listRows  = matrix.vertexes.map((etapa) => {
        listaFilas.push(<tr>
            <td><strong>{etapa}</strong></td>
            {matrix.vertexes.map((valor) => {
                return <td>{matrix.getEdge(valor,etapa)}</td>
            })}
        </tr>);
    })

    const auth = parseInt(localStorage.getItem("auth"), 10)
    const role= localStorage.getItem("role");
    
    
  
    if(auth && role=="3"){
        return (
            <Container className="mt-5">
                <h1 className="mb-3">Etapas de la urbanización: Villa Bonita</h1>
                <Table bordered className="bg-white text-center table-bordered">
                    <thead>
                        <th>Etapas</th>
                        {lista}
                    </thead>
                    <tbody>
                        {listaFilas}
                    </tbody>
                </Table>
            </Container>
        );
    }
    else{
        return <Redirect to="/login"/>
    }
}

export default Ubicaciones;

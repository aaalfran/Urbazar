import React from 'react';
import { Container, Table } from 'reactstrap';
import {GraphMA} from '../../GraphMA';
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
        lista.push(<tr>
            <td>{etapa}</td>
            {matrix.vertexes.map((valor) => {
                return <td>{matrix.getEdge(valor,etapa)}</td>
            })}
        </tr>);
    })
    return (
        <Container>
            <Table>
                <thead>
                    <th>Etapas</th>
                    {lista}
                </thead>
                <tbody>
                    
                </tbody>
            </Table>
        </Container>
    );
}

export default Ubicaciones;

import React,{useState} from 'react';
import { Container, Table,Form,FormGroup,Input ,Label} from 'reactstrap';
import {GraphMA} from '../../GraphMA';
import { Redirect} from 'react-router-dom';

const Ubicaciones = () => {
    let matrix = new GraphMA(false);
    matrix.addVertex("etapa1"); 
    matrix.addVertex("etapa21");
    matrix.addVertex("etapa3");
    matrix.addEdge("etapa1","etapa21",3)   
    matrix.addEdge("etapa1","etapa3",5)   
    const [lista,setLista] = useState([]);
    const [listaFilas,setListaFilas] = useState([]);
    const listItems = () => {
        let l = []
        matrix.vertexes.map((etapa) => {
            l.push(<th>{etapa}</th>);
        })
        return l;
    }
    
    const listRows  = ()=> {
        let l = []
        matrix.vertexes.map((etapa) => {
            l.push(<tr>
                <td><strong>{etapa}</strong></td>
                {matrix.vertexes.map((valor) => {
                    return <td>{matrix.getEdge(valor,etapa)}</td>
                })}
            </tr>);
        })
        return l;
    
    }
    const auth = parseInt(localStorage.getItem("auth"), 10)
    const role= localStorage.getItem("role");
    const [source,setSource] = useState("");
    const [dest,setDest] = useState("");
    const [valor,setValor] = useState("");
    if(auth && role=="3"){
        return (
            <Container className="mt-5 mb-5">
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
                <div className="d-flex justify-content-center">
                <button className="btnUapp" onClick={e => {
                            setLista(listItems());
                            setListaFilas(listRows());
                }}>Refresh</button>
                </div>
                <div className="mt-3 card card-body">
                    <h1>
                        Actualizar Matriz
                    </h1>
                        <FormGroup>
                            <Label for="source">Nombre Etapa Fuente</Label>
                            <Input name="source" id="source" type="text"
                            onChange={e => setSource(e.target.value)}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="dest">Nombre Etapa Destino</Label>
                            <Input name="dest" id="dest" type="text"
                            onChange={e => setDest(e.target.value)}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="valor">Valor</Label>
                            <Input name="valor" id="valor" type="text"
                            onChange={e => setValor(e.target.value)}></Input>
                        </FormGroup>
                        <div className="d-flex justify-content-center">
                        <button className="btnUapp" onClick={e => {
                             matrix.setEdge(source,dest,valor)
                            setLista(listItems());
                            setListaFilas(listRows());
                           
                        }}>Cambiar</button>
                        </div>

                </div>
            </Container>
        );
    }
    else{
        return <Redirect to="/"/>
    }
}

export default Ubicaciones;

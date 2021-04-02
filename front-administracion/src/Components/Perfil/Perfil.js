import { Card } from '@material-ui/core';
import React from 'react';
import { Container, Row ,Col, CardImg, CardBody,CardTitle,CardSubtitle,Button} from 'reactstrap';
import { Redirect} from 'react-router-dom';


const Perfil = () => {
    const auth = parseInt(localStorage.getItem("auth"), 10)
    const role= localStorage.getItem("role");
    
    
  
    if(auth && role=="3"){
        return (
            <Container className="mt-5">
                <Container>
                    <Row>
                        <Col sm="4">                  
                            <Card>
                                <div className="d-flex align-items-center justify-content-center mt-3">
                                <CardImg className="rounded-circle mx-auto px-auto w-75" src="https://via.placeholder.com/150" alt="perfil">
                                </CardImg>
                                </div>
                                <CardBody className="text-center">
                                <CardTitle tag="h5">@Usuario</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Urbanizacion la Joya</CardSubtitle>
                                <p class="card-text text-left">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btnUapp">Editar Perfil</button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="8">
                            <Card>
                                <CardBody>
                                    Contenido
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
    else{
        return <Redirect to="/"/>
    }
}

export default Perfil;

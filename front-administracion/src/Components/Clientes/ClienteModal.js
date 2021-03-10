import { Button, Modal, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import React from 'react';

const ClienteModal = ({open,toggle}) => {
    return (
        <Modal  isOpen={open} toggle={toggle}>
            <div className="modal-header">
                <h5 className="modal-title" id="ConfirmationModel">
                    Agregar Cliente
                                    </h5>
                <button
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                    onClick={toggle}
                    href="/login"
                >
                    <span aria-hidden={true}>×</span>
                </button>
            </div>
            <div className="modal-body col-md-10">
            <Form >
                <FormGroup row>
                    <Label for="nombre" sm={4} >Nombre</Label>
                    <Col sm={8}>    
                        <Input name="nombre" id="nombre_Etapa" placeholder="" />
                    </Col>
                    
                </FormGroup>

                <FormGroup row>
                    <Label for="nombre" sm={4} >Administrador</Label>
                    <Col sm={8}>  
                    <Input name="nombre_Admin" id="nombre_Admin" placeholder="" />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="nombre" sm={4} >Identificación</Label>
                    <Col sm={8}>  
                    <Input name="id_admin" id="id_admin" placeholder="" />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="nombre" sm={4} >Código Familiar</Label>
                    <Col sm={8}>  
                    <Input name="codigo" id="cant_personas" placeholder="" />
                    </Col>
                </FormGroup>


            </Form>
            </div>
            <div className="modal-footer">

                <Button
                    className="btn-registrar"
                    type="button"
                    id="btn_confModal"
                    href="/login"
                >
                    Registrar
                                </Button>

                                <Button
                    className="btn-cncl"
                    type="button"
                    id="btn_confModal"
                    href="/login"
                >
                    Cancelar
                                </Button>
            </div>
        </Modal>
    );
}

export default ClienteModal;

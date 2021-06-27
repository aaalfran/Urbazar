import { Button, Modal, Col, Form, FormGroup, Label, Input } from 'reactstrap'
import React from 'react'

function ModalComponent (props) {
  return (
        <Modal isOpen={props.estado} toggle={props.handleModal}>
            <div className="modal-header">
                <h5 className="modal-title" id="ConfirmationModel">
                    Agregar etapa
                                    </h5>
                <button
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                    onClick={props.handleModal}

                >
                    <span aria-hidden={true}>×</span>
                </button>
            </div>
            <div className="modal-body col-md-10">
            <Form >
                <FormGroup row>
                    <Label for="nombre_etapa" sm={4} >Nombre Etapa</Label>
                    <Col sm={8}>
                        <Input name="nombre_etapa" id="nombre_etapa" onChange={props.handleForm} placeholder="" />
                    </Col>

                </FormGroup>

                <FormGroup row>
                    <Label for="id_etapa" sm={4} >Identificador</Label>
                    <Col sm={8}>
                        <Input name="id_etapa" id="id_etapa" onChange={props.handleForm} placeholder="" />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="ubicacion" sm={4} >Ubicación</Label>
                    <Col sm={8}>
                    <Input name="ubicacion" id="ubicacion" onChange={props.handleForm} placeholder="" />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="nombre_admin" sm={4} >Administrador</Label>
                    <Col sm={8}>
                    <Input name="nombre_admin" id="nombre_admin" onChange={props.handleForm} placeholder="" />
                    </Col>
                </FormGroup>

            </Form>
            </div>
            <div className="modal-footer">

                <Button
                    className="btn-registrar"
                    type="button"
                    id="btn_confModal"
                    onClick={props.addEtapa}
                >
                    Registrar
                                </Button>

                                <Button
                    className="btn-cncl"
                    type="button"
                    id="btn_cncl"
                    onClick={props.handleModal}
                >
                    Cancelar
                                </Button>
            </div>
        </Modal>
  )
}

export default ModalComponent

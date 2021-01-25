import React, { useState } from 'react';
import "../css/perfil.css";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Input, FormGroup, Form } from 'reactstrap';

function ProductInfo({nombre, precio, src, cantidad, vendedor }){
  
    
      const [modal, setModal] = useState(false);
      const [unmountOnClose, setUnmountOnClose] = useState(true);
    
      const toggle = () => setModal(!modal);
      
    
    return(
        <>
           <div className="card-producti col-md-6" >
               <div className="card-image col-6" onClick={toggle}>
                    <img src={src}/>
                </div>

                <div className="card-content col-6">
                    <div id="card-title">
                        <h5>{nombre}</h5>
                    </div>
                    <div id="card-footer">
                        Vendedor: {vendedor}<br/>
                        Precio: {precio}<br/>
                        Cantidad: {cantidad}<br/>  
                        Estado: Vendido<br/>                      
                        Fecha: 07/04/2020<br/>

                    </div>
                </div>
                

           </div>
           <Modal isOpen={modal} toggle={toggle} className="modal" unmountOnClose={unmountOnClose}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
                <Input type="textarea" placeholder="Write something (data should remain in modal if unmountOnClose is set to false)" rows={5} />
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
       </Modal>
       </>
    )

}

export default ProductInfo;
import React, { useState } from 'react';
import "../../../css/perfil.css";
import { Button, Modal } from 'reactstrap';

function ProductInfo({nombre, precio, src, cantidad, vendedor }){
  
    
      const [modal, setModal] = useState(false);
      const [showInfo, setShowInfo] = React.useState(false);
    
      const toggle = () => setModal(!modal);
      
    
    return(
        <>
           <div className="card-producti col-md-6" >
               <div className="card-image col-6" >
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
                        {/*<Button color="secondary"> Calificar </Button>*/}
                    </div>
                </div>
                

           </div>
          <Modal isOpen={showInfo} toggle={() => setShowInfo(false)}>
                                    <div className="modal-header">
                                    <h5 className="modal-title" id="ConfirmationModel">
                                        Confirmación de compra
                                    </h5>
                                    <button
                                        aria-label="Close"
                                        className="close"
                                        data-dismiss="modal"
                                        type="button"
                                        onClick={() => setShowInfo(false)}
                                    >
                                        <span aria-hidden={true}>×</span>
                                    </button>
                                    </div>
                                    <div className="modal-body">
                                    <p>Se descontará de su cuenta el saldo de ${localStorage.getItem("precio")}<br/>
                                        ¿Está seguro que desea realizar esta compra?
                                    </p>
                                    </div>
                                    <div className="modal-footer">
                                    <div className="left-side">
                                        <Button
                                        className="btn-link"
                                        color="default"
                                        data-dismiss="modal"
                                        type="button"
                                        onClick={() => setShowInfo(false)}
                                        >
                                        Cancelar
                                        </Button>
                                    </div>
                                    <div className="divider" />
                                    <div className="right-side">
                                        <Button
                                        className="btn-link"
                                        type="button"
                                        id="btn_confModal"
                                        onClick={() => {
                                            setShowInfo(false);
                                            localStorage.setItem("carrito","")
                                            localStorage.setItem("precio",0)
                                            localStorage.setItem("contador_items", 0)
                                            
                                        }
                                        
                                        }
                                        >
                                        Aceptar
                                        </Button>
                                    </div>
                                    </div>
                                    </Modal>
       </>
    )

}

export default ProductInfo;
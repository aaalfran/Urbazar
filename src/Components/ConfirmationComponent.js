import React from "react";
// reactstrap components
import { Button, FormGroup, Input, Modal } from "reactstrap";

function ConfirmationComponent() {
  const [liveDemo, setLiveDemo] = React.useState(false);
  return(
    <>
      <Modal isOpen={liveDemo} toggle={() => setLiveDemo(false)}>
        <div className="modal-header">
          <h5 className="modal-title" id="ConfirmationModel">
           Confirmación de compra
          </h5>
          <button
           aria-label="Close"
                                        className="close"
                                        data-dismiss="modal"
                                        type="button"
                                        onClick={() => setLiveDemo(false)}
                                    >
                                        <span aria-hidden={true}>×</span>
                                    </button>
                                    </div>
                                    <div className="modal-body">
                                    <p>Se descontará de su cuenta el saldo de $257.50<br/>
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
                                        onClick={() => setLiveDemo(false)}
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
                                        onClick={() => setLiveDemo(false)}
                                        >
                                        Aceptar
                                        </Button>
                                    </div>
                                    </div>
                                </Modal>
                                
    </>
  );
}


export default ConfirmationComponent 
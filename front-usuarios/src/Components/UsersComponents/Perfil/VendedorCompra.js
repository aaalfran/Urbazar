import React from 'react';

const VendedorCompra = ({setVendedor,setOpen}) => {
    let handleClick = () =>{
        setVendedor(true);
        setOpen(false);
    }
    return (
        <div className="row filaCompra">
            <div className="col d-flex align-items-stretch justify-content-center my-3">
                <div className="card sombraCard">
                <div className="fondoCard d-flex justify-content-center "><i class="iconoCompra d-flex align-items-center" aria-hidden="true">Gratis</i></div>
                    <div className="card-body">
                        
                        <h5 className="card-title m-0">Plan Gratis</h5>
                        <p className="card-text "><small className="text-muted">$0.00 al mes</small></p>
                        <hr className="mt-0"></hr>
                        <ul className="p-0 listaCheck">
                            <li>Sed nec enim risus. Nunc.</li>
                            <li>Suspendisse laoreet lectus convallis justo.</li>
                            <li>Duis molestie, erat vitae viverra.</li>
                        </ul>
                                    
                    </div>
                    <button className="btn mb-2" onClick={(e) => {handleClick()}}>Comprar</button>
                </div>
            </div>
            <div className="col d-flex align-items-stretch justify-content-center my-3">
                <div className="card sombraCard">
                <div className="fondoCard d-flex justify-content-center "><i class="fa fa-user iconoCompra d-flex align-items-center" aria-hidden="true"></i></div>
                    <div className="card-body">
                        
                        <h5 className="card-title m-0">Plan Básico</h5>
                        <p className="card-text "><small className="text-muted">$5.00 al mes</small></p>
                        <hr className="mt-0"></hr>
                        <ul className="p-0 listaCheck">
                            <li>Sed nec enim risus. Nunc.</li>
                            <li>Suspendisse laoreet lectus convallis justo.</li>
                            <li>Duis molestie, erat vitae viverra.</li>
                        </ul>
                                    
                    </div>
                    <button className="btn mb-2" onClick={(e) => {handleClick()}}>Comprar</button>
                </div>
            </div>
            <div className="col d-flex align-items-stretch justify-content-center my-3">
                <div className="card sombraCard">
                <div className="fondoCard d-flex justify-content-center "><i class="fa fa-star iconoCompra d-flex align-items-center" aria-hidden="true"></i></div>
                    <div className="card-body ">
                        <h5 className="card-title m-0">Plan Premium</h5>
                        <p className="card-text "><small className="text-muted">$10.00 al mes</small></p>
                        <hr className="mt-0"></hr>
                        <ul className="p-0 listaCheck">
                            <li>Sed nec enim risus. Nunc.</li>
                            <li>Suspendisse laoreet lectus convallis justo.</li>
                            <li>Duis molestie, erat vitae viverra.</li>
                            <li>Sed nec enim risus. Nunc.</li>
                            <li>Suspendisse laoreet lectus convallis justo.</li>
                            <li>Duis molestie, erat vitae viverra.</li>
                        </ul>               
                    </div>
                    <button className="btn mb-2" onClick={(e) => {handleClick()}}>Comprar</button>
                </div>
            </div>
            <div className="col d-flex align-items-stretch justify-content-center my-3">
                <div className="card sombraCard">
                <div className="fondoCard d-flex justify-content-center "><i class="fa fa-building iconoCompra d-flex align-items-center" aria-hidden="true"></i></div>
                    <div className="card-body ">
                        <h5 className="card-title m-0">Plan Empresa</h5>
                        <p className="card-text "><small className="text-muted">$100.00 al mes</small></p>
                        <hr className="mt-0"></hr>
                        <ul className="p-0 listaCheck">
                            <li>Sed nec enim risus. Nunc.</li>
                            <li>Suspendisse laoreet lectus convallis justo.</li>
                            <li>Duis molestie, erat vitae viverra.</li>
                            <li>Sed nec enim risus. Nunc.</li>
                            <li>Suspendisse laoreet lectus convallis justo.</li>
                            <li>Duis molestie, erat vitae viverra.</li>
                        </ul>               
                    </div>
                    <button className="btn mb-2" onClick={(e) => {handleClick()}}>Comprar</button>
                </div>
            </div>
            
        </div>
    );
}

export default VendedorCompra;

import React from 'react';
import { Card, CardImg, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

const Producto = ({nombre, precio, foto_src}) => {
    
    /* const {nombre, foto, precio} = producto_card; */
    
    return (
        <a href='/'>
            <div className='slide_product'> 
                {/* importar card */}
                <Card>
                    <CardImg top width='100%' src={foto_src} alt={nombre} />
                    <CardBody>
                        <CardTitle tag='h5'>{nombre}</CardTitle>
        <               CardSubtitle tag='h6' className='mb-2 text-muted'>${precio}</CardSubtitle>
                    </CardBody>
                </Card>
            </div>
        </a>  
    );
}
 
export default Producto;
import React from 'react'
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap'

const Producto = ({ nombre, precio, foto_src, id, idVendedor }) => {
  return (
        <a href={`/productdetail/${id}/${idVendedor}`}>
        <div className='slide_product'>
            {/* importar card */}
            <div className="cont">
            <Card className="card-product-sld">
                <CardImg className="img" top width='100%' src={foto_src} alt={nombre} />
                <CardBody>
                    <CardTitle id="name_product" tag='h5'><span className="colora">{nombre}</span></CardTitle>
                    <CardSubtitle tag='h6' className='mb-2 text-muted'><span className="colorb">${precio}</span></CardSubtitle>
                </CardBody>
            </Card>
            </div>
        </div>

        </a>
  )
}

export default Producto

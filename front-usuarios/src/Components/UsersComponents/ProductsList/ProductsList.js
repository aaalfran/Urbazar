import React from 'react'

import ProductPreview from '../productPreview/ProductPreview'

function ProductsList({ products }) {
  return products
    ? products.map((product) => (
        <ProductPreview product={product} key={product.id} />
        // eslint-disable-next-line indent
      ))
    : ''
}

export default ProductsList

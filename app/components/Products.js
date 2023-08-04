import React from 'react'
import { Product } from './Product'

export const Products = ({products}) => {
  return (
    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
        {products.map((product, index) => <Product key={product._id} product={product} />)}
    </div>
  )
}

'use client'
import React from 'react'
import { Product } from './Product'
import ProductForm from './ProductForm'

export const Products = ({products}) => {
  const handleChildData = (data) => {
    console.log(data);
  };

  return (
    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products.map((product, index) => <Product key={product._id} product={product}  sendDataToParent={handleChildData} />,)}
    </div>
  )
}



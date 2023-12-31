import React from 'react'
import Image from 'next/image'
import { ShoppingCartIcon } from '@heroicons/react/solid'
import { Products } from './Products'

export const Product = ({product, sendDataToParent, deleteProduct }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-2 flex flex-col justify-center items-center">
    <div className="w-48 h-48 relative flex flex-col justify-center items-center">
      <Image src={product.image} layout="fill" objectFit="contain" alt="Picture of the author" />
    </div>
    <div className="px-6 py-4 text-center">
      <div className="font-bold text-xl mb-2">{product.name}</div>
      <p className="text-gray-700 text-base">{product.description}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <p className="text-gray-900 font-semibold">Price: {product.price}$</p>
    </div>
    <button onClick={sendDataToParent('gal')} className="bg-gray-600 text-white py-1 px-2 rounded-md hover:bg-blue-700 transition-colors duration-200 flex gap-2 ">
      Add to cart<ShoppingCartIcon className="w-6 h-6"/>
    </button>
    <button onClick={deleteProduct} className='felx mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline'>Delete</button>
    
  </div>
  )
}

'use client'
import React, { useState } from 'react';


const ProductForm = ({  NewProduct }) => {
  const [newProduct, setNewProduct] = useState({
    image: '',
    name: '',
    price: 0,
    description: '',
    _id: Date.now().toString(), // Generate a unique ID for the new product
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    NewProduct(newProduct)
    // setProducts([...products, newProduct]);
    setNewProduct({
      image: '',
      name: '',
      price: 0,
      description: '',
      _id: Date.now().toString(),
    });
    
  };

  return (
    <div className='"flex justify-center items-center min-h-screen bg-gray-100"'>
      <h2>Create a New Product</h2>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
            onSubmit={handleFormSubmit}>
        <label>
          Image URL:
          <input type="text" name="image" value={newProduct.image} onChange={handleInputChange} />
        </label>
        <label>
          Name:
          <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Product</button>
      
      </form>
    </div>
  );
};

export default ProductForm;

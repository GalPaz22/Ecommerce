'use client'
import React, { useState } from 'react';


const ProductForm = ({  NewProduct  }) => {
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
    <div>
      <h2>Create a New Product</h2>
      <form onSubmit={handleFormSubmit}>
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

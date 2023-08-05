'use client'
import Image from 'next/image'
import { Header } from './components/header/Header'
import Layout from './components/Layout'
import { Products } from './components/Products';
import ProductForm from './components/ProductForm';
import { useState } from 'react';





export default function Home() {
  const products = [
    {
      image: '/images/ALMA ADOM.webp',
      name: 'Red Wine',
      price: 20,
      description: 'Badass Wine',
      _id: 'FirstWine'
    },
    {
      image:'/images/WHITE.webp',
      name: 'White Wine',
      price: 25,
      description: 'Smooth and Crisp',
      _id: 'SecondWine'
    },
    {
      image: '/images/ROSE.webp',
      name: 'Rosé Wine',
      price: 18,
      description: 'Light and Refreshing',
      _id: 'ThirdWine'
    },
    {
      image: '/images/SPARKLING.webp',
      name: 'Sparkling Wine',
      price: 30,
      description: 'Bubbly and Joyful',
      _id: 'FourthWine'
    },
    {
      image: '/images/VIKI.jpg',
      name: 'Omelete Bread',
      price: 22,
      description: 'Big spoile inside a baguette',
      _id: 'FifthWine'
    }
  ];
  const [product, setProduct]= useState(products)
  const UpdateProducts=(data)=>{
    setProduct([...product, data]);
  console.log(product);}

  const deleteProduct = () => {
    setProduct(product.slice(0, product.length - 1));}
  return (
    <Layout>
      <main>
        <Products NewProduct={UpdateProducts} deleteProduct={deleteProduct} products={product}/>
       
      </main>
    </Layout>
  )
}

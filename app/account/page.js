'use client'
import { useState } from 'react'
import React from 'react'
import Layout from '../components/Layout'
import { Product } from '../components/Product'
import Image from 'next/image'
import { Products } from '../components/Products'
import ProductForm from '../components/ProductForm'
export default function account() {
  return (
   <Layout>
    <ProductForm />
  </Layout>
  )
}

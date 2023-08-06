'use client';
import React, { useState, useEffect } from 'react';
import Product from "@/components/Product/Product";
import Header from '@/components/Header/Header';


const getProductDetails = async (id) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      return response.json();
    } catch (error) {
      console.log(error);
    }
}

const ProductDetails = ({ params }) => {
  const { id } = params;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductDetails(id);
        setProduct(productData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className='h-screen text-center text-4xl'>Loading...</div>;
  }

  return (
    <Product productData={product} />
  );
};

export default ProductDetails;

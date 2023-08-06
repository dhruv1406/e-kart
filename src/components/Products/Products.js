// 'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Products = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.log(data);
      setProduct(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const addToCart = (item) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(item);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Item added to the cart.");
  };

  if (loading) {
    return <div className='h-screen text-4xl flex justify-center items-center'>Loading...</div>;
  }


  return (
    <section className=" body-font px-10 pb-20">
      <h1 className='text-center text-4xl font-bold py-5'>PRODUCTS</h1>
      <div className="px-5 py-15 mx-auto">
        <div className="grid grid-cols-4 gap-5">
          {product.map((item, index) => {
            return (
              <div className="bg-white py-4 px-8 w-80 h-100 rounded-lg shadow-2xl" key={index}>
                <Link href={`/products/${item.id}`} className="block relative h-48 cursor-pointer overflow-hidden" onClick={() => console.log(item.id)}> 
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt={item.title}
                    className="object-contain object-center w-48 h-48 mx-auto "
                  />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-md mb-1">
                    {item.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium truncate">
                    {item.title}
                  </h2>
                  <div className="flex justify-between pt-4">
                    <div className="mt-1 text-xl">&#8377;{item.price}</div>
                    <button className='bg-indigo-500 cursor-pointer rounded px-2 py-2 text-white hover:bg-indigo-400' onClick={()=>addToCart(item)} >Add to cart</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;

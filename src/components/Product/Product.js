'use client';
import React, { useEffect } from "react";

import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'
import Image from "next/image";

const Product = ({ productData, setCartItem }) => {
  
  useEffect(() => {
    const storedCartItem = JSON.parse(localStorage.getItem('cartItems'));
    if(storedCartItem){
      setCartItem(storedCartItem);
    }
  }, []);

  const { title, description, price, image, rating } = productData;
  const { rate, count } = rating;

  const addToCart = () => {
    const cartItem = { ...productData };
    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    if(existingCartItems.length > 0 ){
      const foundItem = existingCartItems.find((cartItem) => cartItem.id === productData.id);
      if(foundItem){
        alert("Item already added");
      }else{
        const updatedCartItems = [...existingCartItems, cartItem];
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        alert("Item added to cart.");
        setCartItem(updatedCartItems);
      }
    } else{
      const updatedCartItems = [cartItem];
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      alert("Item added to cart.");
    }
  };

  return (
    <>
    
    <section className="mx-20 h-screen pb-4">
      <div className="w-full h-screen flex justify-center items-center">
        <div className=" px-5 mx-auto">
          <div className="w-3/5 mx-auto flex flex-wrap shadow-2xl rounded-xl p-10">
            <div className="lg:w-1/2 flex justify-center items-center">
              <Image
                src={image}
                alt={title}
                width={200}
                height={200}
                className=" w-full h-60 object-contain object-center rounded"
                />
            </div>
            <div className="flex flex-col justify-center lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 line-clamp-3">
                {title}
              </h1>
              <div className="flex mb-4">
                <div className="flex">
                  <Rating style={{ maxWidth: 100}} value={rate} readOnly /><span className="pl-2 pr-1">{count}</span>
                  Reviews
                </div>
              </div>
              <p className="leading-relaxed text-lg line-clamp-4">{description}</p>
              <div className="flex justify-between pt-5">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${price}
                </span>
                
                  <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={addToCart}>
                    Add to cart
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Product;

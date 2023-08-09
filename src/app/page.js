"use client";
// import Footer from "@/components/Footer/Footer";
import { useState, useEffect } from "react";
import Header from "@/components/Header/Header";
import Products from "@/components/Products/Products";


export default function Home() {
  const [cartItem, setCartItem] = useState([]);
  useEffect(() => {
    const storedCartItem = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItem) {
      setCartItem(storedCartItem);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItem));
  }, [cartItem]);

  return (
    <>
      <Header cartItem={cartItem}/>
      <Products setCartItem={setCartItem}/>
    </>
  )
}

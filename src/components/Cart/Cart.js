"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Link from "next/link";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartItemsWithDefaultQuantity = existingCartItems.map((item) => ({
      ...item,
      quantity: 1,
    }));

    setCartItems(cartItemsWithDefaultQuantity);
    setLoading(false);
  }, []);

  useEffect(() => {
    calculatePrices();
  }, [cartItems]);

  const handleNumberChange = (event, itemId) => {
    const newQuantity = parseInt(event.target.value);
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const deleteFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const calculatePrices = () => {
    if (cartItems.length === 0) {
      setSubtotal(0);
      setShipping(0);
      setTotal(0);
      return;
    }

    const subTotal = cartItems.reduce(
      (subTotal, item) => subTotal + item.price * item.quantity,
      0
    );
    const shippingAmount = subTotal < 200 ? 4.99 : 9.98;
    const totalPrice = subTotal + shippingAmount;

    setSubtotal(subTotal);
    setShipping(shippingAmount);
    setTotal(totalPrice);
  };

  if (loading) {
    return (
      <div className="h-screen text-4xl flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gray-100 pt-12 pb-24 mb-10">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-7xl justify-center px-6 py-7 flex gap-10">
        <div className="rounded-lg md:w-2/3">
          {cartItems.length === 0 ? (
            <div className="text-center text-4xl font-bold">
              Cart is empty.
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="mb-6 rounded-lg bg-white gap-4 p-6 shadow-md flex"
              >
                <Link href={`/products/${item.id}`}>
                  <Image
                    src={item.image}
                    height={100}
                    width={100}
                    alt="product-image"
                    className="flex-1 object-contain w-40 h-40 rounded-lg"
                  />
                </Link>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                      {item.title}
                    </h2>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div className="flex-1 flex border-gray-100">
                      <select
                        value={item.quantity}
                        onChange={(e) => handleNumberChange(e, item.id)}
                        style={{ width: "50px" }}
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                    <div className="flex-1 flex justify-evenly">
                      <p className="text-lg">
                        &#8377;{item.price * item.quantity}
                      </p>
                      <RiDeleteBin6Line
                        className="mt-1 text-xl cursor-pointer hover:text-red-500"
                        onClick={() => deleteFromCart(item.id)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {/* <!-- Sub total --> */}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">&#8377;{subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">&#8377;{shipping.toFixed(2)}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">
                &#8377;{total.toFixed(2)}
              </p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

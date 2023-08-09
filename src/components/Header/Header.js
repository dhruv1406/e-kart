'use client'
import Link from "next/link";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import MiniCart from "../MiniCart/MiniCart";
import { useState } from "react";

const Header = ({cartItem}) => {
  const [showMiniCart, setShowMiniCart] = useState(false);
  // const [cartItems, setCartItems] = useState([]);

  const toggleMiniCart = () => {
    setShowMiniCart(!showMiniCart);
  }

  const getTotalPrice = () => {
    return cartItem.reduce((total, item) => total + item.price, 0);
  };


  return (
    <header className="w-screen z-[1] bg-white fixed top-0 left-0 py-5 shadow-lg">
      <nav className="flex justify-between items-center w-[90%] mx-auto">
        <div>
          <Link href={'/'}>
            <h1 className="text-3xl font-bold text-indigo-500">E-Kart</h1>
          </Link>
        </div>
        <div className="">
          <ul className="flex items-center gap-[4vw] text-lg cursor-pointer">
            <li>
              <a className="hover:text-gray-400">Home</a>
            </li>
            <li>
              <a className="hover:text-gray-400">Products</a>
            </li>
            <li>
              <a className="hover:text-gray-400">About</a>
            </li>
            <li>
              <a className="hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </div>
        <div>
        <div className="block relative overflow-hidden pr-4" onClick={toggleMiniCart}>
          <button className="text-3xl text-black px-2 py-2" >
            <AiOutlineShoppingCart/>
          </button>
            <span className="bg-red-400 text-base font-medium rounded-full inline-block absolute right-0 top-0 w-6 h-6 text-center">
              {cartItem.length}
            </span>
        </div>
        {showMiniCart && (
          <MiniCart
            isOpen={showMiniCart}
            cartItem={cartItem}
            getTotalPrice={getTotalPrice}
          />
        )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

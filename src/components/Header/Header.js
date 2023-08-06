import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="py-5 shadow-lg">
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
        <Link className="overflow-hidden " href={'/cart'}>
          <button className="bg-indigo-500 text-lg text-white px-5 py-2 rounded-full hover:bg-indigo-400">
            Cart
          </button>
        </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

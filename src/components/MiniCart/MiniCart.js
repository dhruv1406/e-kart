import React from 'react'
import Link from 'next/link';
const MiniCart = ({isOpen, cartItem, getTotalPrice}) => {
  console.log(cartItem);
  return (
    <div className={`h-[100%] w-[25%] bg-white text-center fixed top-[85px] shadow-lg ${isOpen ? "right-[0]" : ""}`}>
      <div className='p-5 h-[75vh] overflow-y-auto'>
          <h1 className='pt-5 pb-5 font-bold text-xl'>{cartItem.length} {(cartItem.length>0) ? "items" : "item"} in your Cart</h1>
          {cartItem.map((item, index) => (
            <div key={index} className='flex mt-[10px] mb-[10px] gap-[10px]'>
              <div className='flex-1'>
                <img src={item.image} alt={item.title} className='' />
              </div>
              <div className='flex-1 text-md'>{item.title}</div>
              <div className='flex-1'>&#8377;{item.price.toFixed(2)}</div>
            </div>
          ))}
      </div>
      <div className='text-xl mt-6 font-bold '>Total Price: &#8377;{getTotalPrice().toFixed(2)}</div>    
      <Link className='pt-3 text-lg underline text-indigo-400' href={'/cart'}>
        View and edit cart
      </Link>
    </div>
  )
}

export default MiniCart
import React from 'react'

const Footer = () => {
  return (
    <footer className='left-0 bottom-0 bg-black text-white px-20 py-12'>
        <div className='flex justify-start gap-28'>
            <div className='flex-1'>
              <h1 className='text-4xl font-bold'>E-Kart</h1>
              <p className='text-xl pt-3 w-30'>Dunia ka ek lauta free e-commerce site jahan sab free me milta hai. Aao aur loot lo.</p>
            </div>
            <div className='flex-1'>
              <h1 className='text-2xl font-bold'>Links</h1>
              <ul className='flex gap-8 pt-5 text-xl cursor-pointer'>
                <li className='hover:text-blue-500'>Home</li>
                <li className='hover:text-blue-500'>Products</li>
                <li className='hover:text-blue-500'>About us</li>
                <li className='hover:text-blue-500'>Contact</li>
              </ul>
            </div>
        </div>
        <div className='text-center pt-5'><span>&copy;</span> 2023, Dhrubajit Konwar</div>
    </footer>
  )
}

export default Footer
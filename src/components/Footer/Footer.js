import React from 'react'

const Footer = () => {
  return (
    <footer className='left-0 bottom-0 bg-black text-white px-20 py-5'>
        <div className='flex justify-start gap-28'>
            <div className='flex-1'>
              <h1 className='text-xl font-bold'>E-Kart</h1>
              <p className='text-md pt-2 w-30'>Dunia ka ek lauta free e-commerce site jahan sab free me milta hai. Aao aur loot lo.</p>
            </div>
            <div className='flex-1'>
              <h1 className='text-xl font-bold'>Links</h1>
              <ul className='flex gap-8 pt-2 text-md cursor-pointer'>
                <li className='hover:text-blue-500'>Home</li>
                <li className='hover:text-blue-500'>Products</li>
                <li className='hover:text-blue-500'>About us</li>
                <li className='hover:text-blue-500'>Contact</li>
              </ul>
            </div>
        </div>
        <div className='text-center text-md'><span>&copy;</span> 2023, Dhrubajit Konwar</div>
    </footer>
  )
}

export default Footer
import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
const [nav, setNav] = useState(false)

const handleNav = () => {
  setNav(!nav);
};

  return (
    <div className='flex justify-between items-center h-24 max-w-[1200px] mx-auto px-3 text-white'>
        <h1 className='w-full text-3xl font-bold text-[white]'>SOUNDGA.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Company</li>
            <li className='p-4'>Integrations</li>
            <li className='p-4'>Platform</li>
            <li className='p-4'>Pricing</li>
            <button className="rounded-full bg-[#98fb98] text-black font-bold py-0 px-4 ml-12 hover:bg-[#4DBB63] transition duration-300">Register</button>
        </ul>
        
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }
            
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#1e453e] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[white] m-4 p-4'>SOUNDGA.</h1>
        <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Integrations</li>
            <li className='p-4 border-b border-gray-600'>Platform</li>
            <li className='p-4 border-b border-gray-600'>Pricing</li>
            <button className="rounded-full bg-[#98fb98] text-black font-bold py-2 px-4 hover:bg-[#4DBB63] transition duration-300">Register</button>
        </ul>
        
        </div>
    </div>
  )
}

export default Navbar
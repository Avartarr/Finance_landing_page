import React from 'react';
import lady from '../assets/lady.png';


const Transaction = () => {
  return (
    <div className='bg-white'>
        <div className=' grid md:grid-cols-2 gap-8 md:pl-24 md:pr-5 lg:gap-2'>
            <div className='p-8 md:p-0 lg:ml-40 '>
                <img src={lady} alt="" />
            </div>
            <div className='p-8 md:p-2 lg:mr-40 lg:py-28'>
                <h1 className='font-bold text-4xl pb-5 lg:text-6xl lg:font-semibold'>Keep your transaction of any form of finance</h1>
                <p className='font-light mb-5'>Runway protects your money with a world class security system that helps detect fraud and prevents hacking. Safeguard your account with your screen lock, such as your fingerprint</p>
                <p className='font-light mb-5 '>Runway protects your money with a world class security system that helps detect fraud and prevents hacking. Safeguard your account with your screen lock.</p>
                <button className="bg-[#1e453e] text-white font-normal py-2 px-4 rounded-full">Get Started</button>
            </div>
        </div>
        <div className='p-4'>
            <h2 className='text-4xl font-semibold text-center pt-5 mb-16 lg:mb-52'>What Our Client Say</h2>
        </div>
        
    </div>
  )
}

export default Transaction
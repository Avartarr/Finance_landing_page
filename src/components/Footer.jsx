import React from 'react'
import client from '../assets/client.png';
import {
    AiFillTwitterCircle,
    AiFillFacebook,
    AiFillInstagram,
    AiFillGithub
  } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='text-white'>
        <div className='p-12 lg:px-64  mt-[-7rem] lg:mt-[-16rem]' >
            <img src={client} alt="" className='' />
        </div>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 lg:grid-cols-5 gap-8 md:px-28 text-center">
            <div className='p-4'>
                <h3 className='text-lg'>Solutions</h3>
                <p className='text-sm'>Marketing</p>
                <p className='text-sm'>Analytics</p>
                <p className='text-sm'>Commerce</p>
                <p className='text-sm'>Insights</p>
            </div>
            <div className='p-4'>
                <h3 className='text-lg'>Supports</h3>
                <p className='text-sm'>Pricing</p>
                <p className='text-sm'>Documentation</p>
                <p className='text-sm'>Guides</p>
                <p className='text-sm'>API Status</p>
            </div>
            <div className='p-4'>
                <h3 className='text-lg'>Company</h3>
                <p className='text-sm'>About</p>
                <p className='text-sm'>Blog</p>
                <p className='text-sm'>Jobs</p>
                <p className='text-sm'>APartners</p>
            </div>
            <div className='p-4'>
                <h3 className='text-lg'>Legal</h3>
                <p className='text-sm'>Claim</p>
                <p className='text-sm'>Privacy</p>
                <p className='text-sm'>Terms</p>
            </div>
           <div className='p-4'>
            <h3 className='text-lg'>Subscribe to our newsletter</h3>
            <p className='text-sm font-light'>The latest news article and resources sent to your inbox</p>
           </div>
          
        </div>
        <hr  />
           <div className='flex py-5 md:mx-48 lg:mx-96 lg:pl-32'>
            <div>
            <h1 className='font-bold px-3 mr-2 lg:mr-10 text-2xl'>SOUNDGA</h1>
            </div>
            <div>
            <p className='font-light text-xs px-5'>@2023 Nancy All Rights Reserved</p>
            </div>
            <div className='flex lg:ml-52'>
                <AiFillTwitterCircle size={25}  />
                <AiFillFacebook size={25}  />
                <AiFillInstagram  size={25} />
                <AiFillGithub size={25} />
            </div>
           </div>
    </div>
  )
}

export default Footer
'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const Footer = () => {

  const router = useRouter();

  return (
    <>
    <div className='w-full h-[270px] bg-neutral-700 flex'>
      <div className='flex-1 mt-10'>
        <button className='mt-6 ml-10 mx-5 px-1 bg-zinc-300 w-36 text-center'>
          <div className='flex'>
            <Image 
              src="/bangladesh-flag.svg"
              alt="bangladesh"
              width={24}
              height={24}
            />
            <h1 className="text-black ml-2 p-2 text-[13px] font-medium">Bangladesh</h1>
          </div>
        </button>
        <div className='text-white ml-10 mx-5 text-[13px] font-medium cursor-pointer'>
          <h1 onClick={() => router.push('/send-money')} className="mt-6">Send Money</h1>
          <h1 onClick={() => router.push('/receive-money-1')} className="mt-3">Receive Money</h1>
          <h1 className="mt-3">Money Transfer</h1>
        </div>
      </div>
      <div className='flex-1 mt-10 text-white ml-10 mx-5 text-xs'>
        <h1 className="mt-6 font-normal">Tools</h1>
        <div className='cursor-pointer font-medium'>
          <h1 className="mt-6">Track a Transfer</h1>
          <h1 className="mt-3">Find Location</h1>
        </div>
      </div>
      <div className='flex-1 text-white mt-10 text-whote ml-10 mx-5 text-xs'>
        <h1 className="mt-6 font-normal">Quick Links</h1>
        <div className='cursor-pointer font-medium'>
          <h1 className="mt-6">FAQ</h1>
          <h1 className="mt-3">Contact Us</h1>
          <h1 onClick={() => router.push('/about-us')} className="mt-3">About Us</h1>
        </div>
      </div>
      <div className='flex-1 mt-10 text-white  ml-10 mx-5 text-xs '>
        <h1 className="mt-6 font-normal">Tools</h1>
        <div className='cursor-pointer font-medium'>
          <h1 className="mt-6">Online Privacy Statement</h1>
          <h1 className="mt-3">Intellectual Property</h1>
          <h1 className="mt-3">Terms & Conditions Retail</h1>
        </div>
      </div>
    </div>
    <div>
      <div className='w-full h-[70px] bg-white flex text-center items-center'>
        <div className='flex space-x-20 text-blue-950 cursor-pointer text-sm font-semibold'>
          <h1 onClick={() => router.push('/')} className="ml-10">Home</h1>
          <h1 onClick={() => router.push('/about-us')}>About Us</h1>
          <h1>Contact Us</h1>
          <h1>Privacy Policy</h1>
        </div>
        <div className='flex-grow flex items-end justify-end space-x-3'>
          <Image 
            className='cursor-pointer'
            src='/facebook.svg'
            alt='facebook'
            width={24}
            height={24}
            onClick={() => router.push('https://www.facebook.com/')}
          />
          <Image 
            className='cursor-pointer'
            src='/twitter.svg'
            alt='twitter'
            width={24}
            height={24}
            onClick={() => router.push('https://twitter.com/')}
          />
          <Image 
            className='cursor-pointer'
            src='/youtube.svg'
            alt='youtube'
            width={24}
            height={24}
            style={{marginRight: '10%'}}
            onClick={() => router.push('https://www.youtube.com/')}
          />
        </div>
      </div>
    </div>
    </>    
  );
}

export default Footer;

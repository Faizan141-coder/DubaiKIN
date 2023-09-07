'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const NavbarAdmin = () => {
  
  return (
    <nav className="bg-white  " >      
      <div className="container mx-auto flex justify-between">
        <div className="w-full flex">
          <div className="flex p-3">
            <Image src="/jane.svg" className="rounded-full" width={30} height={30} alt={'Jane'} />
            <div className='ml-2 mt-[4px] w-[100px]'>
              <h1 className="inline text-left">JaneS.</h1>
            </div>
            <Image src="/downarrow1.svg" className="ml-28 mt-[2px]" width={14} height={14} alt={''} />
            <Image src="/search.svg" className="ml-10 mt-[2px]" width={20} height={20} alt={''} />
            <input type="search" name="" id="" placeholder='Quick Search'className='ml-4 outline-none'/>
          </div>
          <div className="w-full flex justify-end">
            <Image src="/notifications.svg" width={20} height={20} alt={''} />
          </div>
        </div>
      </div>
    </nav>
  )
};

export default NavbarAdmin;


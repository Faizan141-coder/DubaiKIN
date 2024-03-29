'use client'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {

  const router = useRouter()

  return (
    <>
    <Navbar />
    <div className='flex bg-orange-400'>
      <div className="w-full h-[600px] p-28">
        <div className="text-white text-3xl font-bold">Transfer Money Across<br/>World In Real Time<br/>With No charge</div>
        <div className="w-72 text-white text-sm font-normal mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
        <button className="w-44 h-8 bg-orange-400  rounded-3xl border border-white mt-5 hover:bg-white hover:text-orange-400 text-white transition ease-in">
          <h1 className="text-sm font-normal">Watch Video</h1>
        </button>
      </div>
      <div className="w-96 h-96 bg-white rounded mt-28 mr-28 p-5">
        <div className="text-black text-opacity-80 text-xl font-semibold">Send Money</div>
        <div className="text-black text-xs my-2 font-medium">Send Amount</div>
        <div className="flex items-center justify-between w-[88] h-8 bg-white rounded border border-black border-opacity-30">
          <div className="text-black text-opacity-70 text-xs font-medium ml-3">$122</div>
          <div className="text-black text-xs font-medium mr-3">USD</div>
        </div>
        <div className="text-black text-xs my-2 font-medium">Receiver Country</div>
        <div className="w-[88] h-8 bg-white rounded border border-black border-opacity-30">
        <div className='flex justify-between'>
          <div className="text-black text-opacity-70 text-xs font-medium mt-2 ml-3">Select Country</div>
          <Image 
            src='/downarrow.svg'
            className='mt-2 mr-2'
            alt='arrow-down'
            width={20}
            height={20}
          />
        </div>
        </div>
        <button onClick={() => router.push('/send-money-1')} className="w-80 flex h-8 bg-blue-950 rounded mt-10 justify-between">
          <h1 className="text-white text-sm font-semibold mt-1.5 ml-3">Continue Transaction</h1>
          <Image 
            src='/ph_arrow-right.svg'
            className='mt-1.5 mr-2'
            alt='arrow-right'
            width={20}
            height={20}
          />
        </button>
        <div className='text-center items-center mt-5'><span className="text-black text-opacity-70 text-xs font-medium">By clicking Continue. I am agree with</span><span className="text-black text-xs font-medium"> </span><span className="text-orange-400 cursor-pointer hover:text-orange-300 text-xs font-medium">Terms & Policy</span></div>        
      </div>
    </div>
    <Footer />
    </>
  )
}

export default page
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
      <div className="h-96 bg-white rounded mt-28 mr-28 p-5">
        <div className="text-black text-opacity-80 text-xl font-semibold">Send Money</div>
        <div className='flex space-x-3'>
            <div>
                <div className="text-black text-xs my-2 font-medium">Send the Amount</div>
                <div className="flex items-center justify-between h-8 bg-white rounded border border-black border-opacity-30">
                    <div className="text-black text-opacity-70 text-xs font-medium ml-3">$122</div>
                    <div className="text-black text-xs font-medium mr-3">USD</div>
                </div>
            </div> 
            <div>
                <div className="text-black text-xs my-2 font-medium">Transaction Fee</div>
                <div className="flex items-center justify-between h-8 bg-white rounded border border-black border-opacity-30">
                    <div className="text-black text-opacity-70 text-xs font-medium ml-3">$2.3</div>
                    <div className="text-black text-xs font-medium mr-3">USD</div>
                </div>
            </div> 
            <div>
                <div className="text-black text-xs my-2 font-medium">Received Amount</div>
                <div className="flex items-center justify-between h-8 bg-white rounded border border-black border-opacity-30">
                    <div className="text-black text-opacity-70 text-xs font-medium ml-3">11,000</div>
                    <div className="text-black text-xs font-medium mr-3">BDT</div>
                </div>
            </div> 
        </div>
        <div className="text-black text-xs my-2 font-medium">Receiver Country</div>
        <div className="h-8 bg-white rounded border border-black border-opacity-30">
        <div className='flex justify-between'>
          <div className="text-black text-opacity-70 text-xs font-medium mt-2 ml-3">Bangladesh</div>
        </div>
        </div>
        <button onClick={() => router.push('/send-money-2')} className="w-80 flex h-8 bg-blue-950 rounded mt-10 justify-between">
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
    <div className='mx-auto'>
        <h1 className='mt-8 font-bold text-center'>Legal Disclaimer & Important Info</h1>
        <div className="text-black text-xs font-normal px-44 py-6">
            When you send money outside of the U.S. or its territories, the term "receiver" means your Final Receiver and the terms "transaction" or "transfer" generally mean the two separate money transfer transactions as described in our terms and conditions.<br/><br/>1 Date available will be displayed on receipt for international transfers over $15. Service and funds may be delayed or unavailable depending on certain factors including the Service selected, the selection of delayed delivery options, special terms applicable to each Service, amount sent, destination country, currency availability, regulatory issues, consumer protection issues, identification requirements, delivery restrictions, agent location hours, and differences in time zones (collectively, "Restrictions"). Additional restrictions may apply; see our terms and conditions for details.<br/><br/>2 In addition to the transfer fee, Western Union also makes money from currency exchange. When choosing a money transmitter, carefully compare both transfer fees and exchange rates. Fees, foreign exchange rates and taxes may vary by brand, channel, and location based on a number of factors. Fees and rates subject to change without notice.<br/>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default page
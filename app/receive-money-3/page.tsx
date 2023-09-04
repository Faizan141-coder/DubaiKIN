'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {

    const router = useRouter()

    const renderCodeBlock = () => (
        <div className='flex justify-between pr-16 my-3'>
          <Image 
            width={50} 
            height={10} 
            className="ml-14 border border-black border-opacity-30" 
            src="/r1.svg"
            alt='image' 
          />
          <div className="text-black text-xs mt-3 font-normal">MD Al amin</div>
          <div className="text-black text-xs mt-3 font-normal">USA</div>
          <div className="text-black text-xs mt-3 font-normal">$3</div>
          <div className="text-black text-xs mt-3 font-normal">0000....................xx</div>
          <div className="text-black text-xs mt-3 font-normal">$100</div>
        </div>
    );

    const renderAccountBlock = () => (
        <div className='flex pr-16 my-3 justify-between'>
          <Image 
            width={50} 
            height={10} 
            className="ml-14 border rounded-full border-black border-opacity-30" 
            src="/r2.svg" 
            alt='image' 
          />
          <div className="text-black text-xs mt-4 font-normal">MD Al amin</div>
          <div className="text-black text-xs mt-4 font-normal">USA</div>
          <div className="text-black text-xs mt-4 font-normal">0000....................xx</div>
          <div className="text-black text-xs mt-4 font-normal">$100</div>
          <div className="text-black text-xs mt-4 font-normal">10/08/23</div>
          <button className="w-16 h-6 bg-blue-950 mt-3 bg-opacity-50 rounded">
            <div className="text-white text-xs font-normal">Pending</div>
          </button>
        </div>
    )

    const renderAccount1Block = () => (
        <div className='flex pr-16 my-3 justify-between'>
            <div className="text-black ml-16 text-xs mt-3 font-normal">Image</div>
            <div className="text-black text-xs mt-3 font-normal">Name</div>
            <div className="text-black text-xs mt-3 font-normal">From</div>
            <div className="text-black text-xs mt-3 font-normal">Transaction ID</div>
            <div className="text-black text-xs mt-3 font-normal">Pending <br />Amount</div>
            <div className="text-black text-xs mt-3 font-normal">Sent <br />Date</div>
            <div className="text-black text-xs mt-3 font-normal">Status</div>
        </div>
    )

    const codeBlocks = 3;
    const accountBlocks = 1
    const account1Blocks = 1

  return (
    <>
        {/* Your Pending Money */}
        <div className='bg-orange-400 pl-28 pt-5'>
            <div className="text-white text-lg font-semibold mb-4 mr-24">Your Pending Money</div>
            <div className="bg-white rounded mr-[185px] py-1">
                <div>
                {Array(accountBlocks).fill(null).map((_, index) => (
                    <React.Fragment key={index}>
                    {renderAccount1Block()}
                    {index < accountBlocks - 1 && <div className="w-full border border-black border-opacity-30"></div>}
                    </React.Fragment>
                ))}
                </div>
            </div>

            <div className='flex'>
                <div className="bg-white w-full rounded mt-3 py-1">
                    <div>
                    {Array(accountBlocks).fill(null).map((_, index) => (
                        <React.Fragment key={index}>
                            {renderAccountBlock()}
                            {index < accountBlocks - 1 && <div className="w-full border border-black border-opacity-30"></div>}
                        </React.Fragment>
                    ))}
                    </div>
                </div>
                <button className="w-16 h-6 bg-blue-950 ml-4 mr-28 mt-10 rounded">
                    <div className="text-white text-xs font-normal">Check</div>
                </button>
            </div>
            
            <div className='flex'>
                <div className="bg-white w-full rounded mt-3 py-1">
                    <div>
                    {Array(accountBlocks).fill(null).map((_, index) => (
                        <React.Fragment key={index}>
                            {renderAccountBlock()}
                            {index < accountBlocks - 1 && <div className="w-full border border-black border-opacity-30"></div>}
                        </React.Fragment>
                    ))}
                    </div>
                </div>
                <button className="w-16 h-6 bg-blue-950 ml-4 mr-28 mt-10 rounded">
                    <div className="text-white text-xs font-normal">Check</div>
                </button>
            </div>
        </div>

        <div className='flex bg-orange-400 items-center justify-center'>

            <div className="w-88 h-[900px]">
                {/* Box */}
                <div className="h-[680px] bg-white rounded mt-28  p-5">
                    <Image 
                        src="/image 4.svg" 
                        width={200} 
                        className='ml-14' 
                        height={43} 
                        alt={'DubaiKin'} 
                    />
                    <div className='flex space-x-3 justify-center'> 
                        <div>
                            <div className="text-black text-xs my-2 font-medium">Received Amount</div>
                            <div className="flex items-center justify-between h-8 bg-white rounded border border-black border-opacity-30">
                                <div className="text-black text-opacity-70 text-xs font-medium ml-3">11,000</div>
                                <div className="text-black text-xs font-medium mr-3">BDT</div>
                            </div>
                        </div> 
                    </div>
                        
                    <div className='flex mt-6'>
                        <div className="text-black text-xs font-medium mr-4">Transaction ID:</div>
                        <div className="text-black text-opacity-70 text-xs font-medium ml-[2px]">0000....................xx</div> 
                    </div>

                    <div className='flex mt-5'>
                        <div className="text-black text-xs font-medium mr-4">Sender Name:</div>
                        <div className="text-black text-opacity-70 text-xs font-medium ml-[7px]">MD Abdul Ali</div> 
                    </div>

                    <div className='flex mt-5'>
                        <div className="text-black text-xs font-medium mr-4">From:</div>
                        <div className="text-black text-opacity-70 text-xs font-medium ml-14">USA</div> 
                    </div>

                    <div className='flex mt-5'>
                        <div className="text-black text-xs font-medium mr-4">Sending Date:</div>
                        <div className="text-black text-opacity-70 text-xs font-medium ml-2">11/08/23</div> 
                    </div>

                    <div className='flex mt-5'>
                        <div className="text-black text-xs font-medium mr-4">Sending Time:</div>
                        <div className="text-black text-opacity-70 text-xs font-medium ml-2">12:44 AM</div> 
                    </div>

                    <div className='flex mt-5'>
                        <div className="text-black text-xs font-medium mr-4">Your Name:</div>
                        <div className="text-black text-opacity-70 text-xs font-medium ml-6">Mohit Shafkat</div> 
                    </div>

                    <div className='flex mt-5'>
                        <div className="text-black text-xs font-medium mr-4">Area:</div>
                        <div className="text-black text-opacity-70 text-xs font-medium ml-[60px]">Uttara, Dhakam Bangladesh</div> 
                    </div>

                    <div className='flex mt-5'>
                        <div className="text-black text-xs font-medium mr-4">Email:</div>
                        <div className="text-black text-opacity-70 text-xs font-medium ml-[56px]">muhiitshafkat59@gmail.com</div> 
                    </div>

                    <div className='flex mt-5'>
                        <div className="text-black text-xs font-medium mr-4">Phone:</div>
                        <div className="text-black text-opacity-70 text-xs font-medium ml-[50px]">+8801628312158</div> 
                    </div>

                    <h1 className="text-black text-md my-3 text-center font-medium">Digital Signature</h1>

                    <Image 
                        src='/Vect.svg'
                        width={150}
                        height={50}
                        alt='sign'
                        className='ml-20'
                    />

                    <h1 onClick={() => router.push('/id-card')} className="text-orange-400 cursor-pointer my-2 text-xs font-medium">Scan Your Id Card</h1>

                    <Image 
                        src={'/g7.svg'}
                        className='mt-2 ml-28'
                        alt='image'
                        width={30}
                        height={10}
                    />

                    <button className="w-full h-8 mt-5 bg-blue-950 rounded">
                        <h1 className="text-white text-sm font-semibold">Confirm Withdraw</h1>
                    </button>
                </div>
            </div>
        </div>
        
        <div className='mx-auto'>
            <h1 className='mt-8 font-bold text-center'>Legal Disclaimer & Important Info</h1>
            <div className="text-black text-xs font-normal px-44 py-6">
                When you send money outside of the U.S. or its territories, the term "receiver" means your Final Receiver and the terms "transaction" or "transfer" generally mean the two separate money transfer transactions as described in our terms and conditions.<br/><br/>1 Date available will be displayed on receipt for international transfers over $15. Service and funds may be delayed or unavailable depending on certain factors including the Service selected, the selection of delayed delivery options, special terms applicable to each Service, amount sent, destination country, currency availability, regulatory issues, consumer protection issues, identification requirements, delivery restrictions, agent location hours, and differences in time zones (collectively, "Restrictions"). Additional restrictions may apply; see our terms and conditions for details.<br/><br/>2 In addition to the transfer fee, Western Union also makes money from currency exchange. When choosing a money transmitter, carefully compare both transfer fees and exchange rates. Fees, foreign exchange rates and taxes may vary by brand, channel, and location based on a number of factors. Fees and rates subject to change without notice.<br/>
            </div>
        </div>
    </>
  )
}

export default page
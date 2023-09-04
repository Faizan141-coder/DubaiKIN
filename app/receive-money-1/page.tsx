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
                <button onClick={() => router.push('receive-money-2')} className="w-16 h-6 bg-blue-950 ml-4 mr-28 mt-10 rounded">
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
                <button onClick={() => router.push('receive-money-2')} className="w-16 h-6 bg-blue-950 ml-4 mr-28 mt-10 rounded">
                    <div className="text-white text-xs font-normal">Check</div>
                </button>
            </div>
        </div>

        <div className='flex bg-orange-400'>

            <div className="w-full h-[620px] pl-28">
                {/* Previous Transactions */}
                <div className="text-white text-lg font-semibold mt-20 mb-1 text-center mr-24">Your Previous Transactions</div>
                <div className="bg-white rounded mr-28 py-3">
                    <div className='flex justify-between px-16 mb-3'>
                        <h1 className="text-black text-opacity-70 text-xs font-medium">Image</h1>
                        <h1 className="text-black ml-10 text-opacity-70 text-xs font-medium">Name</h1>
                        <h1 className="text-black ml-8 text-opacity-70 text-xs font-medium">Country</h1>
                        <h1 className="text-black mr-6 text-opacity-70 text-xs font-medium">Transfer fee</h1>
                        <h1 className="text-black mr-6 text-opacity-70 text-xs font-medium">Transaction ID</h1>
                        <h1 className="text-black text-opacity-70 text-xs font-medium">Amount</h1>
                    </div>
                    <div className="h-px border border-black w-full border-opacity-50"></div>

                    <div>
                    {Array(codeBlocks).fill(null).map((_, index) => (
                        <React.Fragment key={index}>
                            {renderCodeBlock()}
                            {index < codeBlocks - 1 && <div className="w-full border border-black border-opacity-30"></div>}
                        </React.Fragment>
                    ))}
                    </div>
            
                </div>

            </div>

            {/* Box */}
            <div className="h-[380px] bg-white rounded mt-28 mr-28 p-5">
                <div className="text-black text-opacity-80 text-xl font-semibold">Last Received Money</div>
                <div className='flex space-x-3 justify-center'> 
                    <div>
                        <div className="text-black text-xs my-2 font-medium">Received Amount</div>
                        <div className="flex items-center justify-between h-8 bg-white rounded border border-black border-opacity-30">
                            <div className="text-black text-opacity-70 text-xs font-medium ml-3">11,000</div>
                            <div className="text-black text-xs font-medium mr-3">BDT</div>
                        </div>
                    </div> 
                </div>
                    
                <div className='flex mt-5'>
                    <div className="text-black text-xs font-medium mr-4">Sender name:</div>
                    <div className="text-black text-opacity-70 text-xs font-medium">MD Abdul Ali</div> 
                </div>

                <div className='flex mt-5'>
                    <div className="text-black text-xs font-medium mr-4">From:</div>
                    <div className="text-black text-opacity-70 text-xs font-medium ml-12">USA</div> 
                </div>

                <div className='flex mt-5'>
                    <div className="text-black text-xs font-medium mr-4">Sending Date:</div>
                    <div className="text-black text-opacity-70 text-xs font-medium">11/08/23</div> 
                </div>

                <div className='flex mt-5'>
                    <div className="text-black text-xs font-medium mr-4">Sending Time:</div>
                    <div className="text-black text-opacity-70 text-xs font-medium">11/08/23</div> 
                </div>

                <button onClick={() => router.push('/receive-money-5')} className="w-80 h-8 mt-10 bg-blue-950 rounded">
                    <h1 className="text-white text-sm font-semibold">Check Out</h1>
                </button>

                <div className="text-black text-opacity-50 text-xs mt-2 font-normal">Check Out for withdraw your account.</div> 
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
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react'

const page = () => {

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
        <Navbar />
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

            <div className="w-96 h-[530px]">
                {/* Box */}
                <div className="w-full h-[300px] bg-white rounded mt-28 p-5">
                    <Image 
                        src="/image 4.svg" 
                        width={200} 
                        className='ml-14' 
                        height={43} 
                        alt={'DubaiKin'} 
                    />

                    <div className='flex'>
                        <Image 
                            src='/mobile.svg'
                            width={150}
                            height={50}
                            alt='sign'
                            className='mt-5'
                        />

                        <div className='mt-14'>
                            <Image 
                                src='/Congratulations.svg'
                                width={180}
                                height={50}
                                alt='congratulation'
                            />
                            <Image 
                                src='/Withdraw.svg'
                                width={150}
                                height={50}
                                alt='withdraw'
                                className='mt-4 ml-3'
                            />

                            <div className='flex'>
                                <Image 
                                    src='/$110.svg'
                                    width={70}
                                    height={50}
                                    alt='money'
                                    className='mt-10 ml-7'
                                />
                                <Image 
                                    src='/tick.svg'
                                    width={40}
                                    height={50}
                                    alt='tick'
                                    className='mt-7 ml-1'
                                />
                            </div>
                        </div>
                    </div>
                    
                </div>
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
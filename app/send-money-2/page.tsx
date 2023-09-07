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
          <div className="text-black text-xs mt-3 font-normal">MD Al amin</div>
          <div className="text-black mr-52 text-xs mt-3 font-normal">USA</div>
          <button className="w-20 h-6 mt-3 bg-blue-950 rounded" >
            <h1 className="text-white text-xs font-semibold">Details</h1>
          </button>
        </div>
    )

    const codeBlocks = 5;
    const accountBlocks = 1

  return (
    <>
    <Navbar />
    <div className='flex bg-orange-400'>
      <div className="w-full h-[920px] pl-28">
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

        <div className="text-white text-lg font-semibold mt-5 mb-1 text-center mr-24">Your Save Accounts</div>
        <h1 className="text-white mb-2 text-center mr-28 text-xs font-normal">If you want to send your save accounts just click and send</h1>

        <div className="bg-white rounded mr-28 py-1">
            <div>
            {Array(accountBlocks).fill(null).map((_, index) => (
                <React.Fragment key={index}>
                {renderAccountBlock()}
                {index < accountBlocks - 1 && <div className="w-full border border-black border-opacity-30"></div>}
                </React.Fragment>
            ))}
            </div>
        </div>

        <div className="bg-white rounded mt-3 mr-28 py-1">
            <div>
            {Array(accountBlocks).fill(null).map((_, index) => (
                <React.Fragment key={index}>
                {renderAccountBlock()}
                {index < accountBlocks - 1 && <div className="w-full border border-black border-opacity-30"></div>}
                </React.Fragment>
            ))}
            </div>
        </div>

        <div className="bg-white rounded mt-3 mr-28 py-1">
            <div>
            {Array(accountBlocks).fill(null).map((_, index) => (
                <React.Fragment key={index}>
                {renderAccountBlock()}
                {index < accountBlocks - 1 && <div className="w-full border border-black border-opacity-30"></div>}
                </React.Fragment>
            ))}
            </div>
        </div>

      </div>
      <div className="h-[700px] bg-white rounded mt-28 mr-28 p-5">
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
                <div className="text-black text-xs my-2 font-medium">Transfered Rate</div>
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
        
        <div className="text-black text-opacity-80 items-center text-center text-sm mt-5 font-semibold">Enter Your Receiver Information</div>
        
        <div className="text-black text-xs my-2 mt-2 font-medium">First Name*</div>
        <div className="flex items-center justify-between w-[88] h-8 bg-white rounded border border-black border-opacity-30">
          <input className="text-black w-full h-full text-opacity-70 text-xs font-medium" placeholder="   Enter Your First Name" />
        </div>  

        <div className="text-black text-xs my-2 mt-2 font-medium">Last Name*</div>
        <div className="flex items-center justify-between w-[88] h-8 bg-white rounded border border-black border-opacity-30">
          <input className="text-black w-full h-full text-opacity-70 text-xs font-medium" placeholder="   Enter Your Last Name" />
        </div>

        <div className="text-black text-xs my-2 mt-2 font-medium">Email*</div>
        <div className="flex items-center justify-between w-[88] h-8 bg-white rounded border border-black border-opacity-30">
          <input className="text-black w-full h-full text-opacity-70 text-xs font-medium" placeholder="   Enter Your Email" />
        </div>  

        <div className="text-black text-xs my-2 mt-2 font-medium">Phone Number*</div>
        <div className="flex items-center justify-between w-[88] h-8 bg-white rounded border border-black border-opacity-30">
          <input className="text-black w-full h-full text-opacity-70 text-xs font-medium" placeholder="   Enter Your Phone Number" />
        </div>

        <div className="text-black text-xs my-2 mt-2 font-medium">Address*</div>
        <div className="flex items-center justify-between w-[88] h-8 bg-white rounded border border-black border-opacity-30">
          <input className="text-black w-full h-full text-opacity-70 text-xs font-medium" placeholder="   Choose Your Area" />
        </div>

        <div className="text-black text-xs my-2 mt-2 font-medium">Town*</div>
        <div className="flex items-center justify-between w-[88] h-8 bg-white rounded border border-black border-opacity-30">
          <input className="text-black w-full h-full text-opacity-70 text-xs font-medium" placeholder="   Choose Your District" />
        </div>

        <div className="text-black text-xs my-2 mt-2 font-medium">Receiver Country*</div>
        <div className="flex items-center justify-between w-[88] h-8 bg-white rounded border border-black border-opacity-30">
          <input className="text-black w-full h-full text-opacity-70 text-xs font-medium" placeholder="   Bangladesh" />
        </div>

        <button className="w-80 h-8 mt-10 bg-blue-950 rounded">
          <h1 className="text-white text-sm font-semibold">Send</h1>
        </button> 
              
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
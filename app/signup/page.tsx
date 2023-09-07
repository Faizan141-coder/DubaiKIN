import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar />
    <div className='flex bg-orange-400'>
      <div className="w-full h-[770px] p-28">
        <div className="text-white text-3xl font-bold">Transfer Money Across<br/>World In Real Time<br/>With No charge</div>
        <div className="w-72 text-white text-sm font-normal mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
        <button className="w-44 h-8 bg-orange-400 rounded-3xl border border-white mt-5">
          <h1 className="text-white text-sm font-normal">Watch Video</h1>
        </button>
      </div>
      <div className="w-96 h-[550px] bg-white rounded mt-28 mr-28 p-5">

        <div className="text-black text-opacity-80 items-center text-center text-xl font-semibold">Sign Up</div>
        
        <div className="text-black text-xs my-2 mt-2 font-medium">First Name</div>
        <div className="flex items-center justify-between w-[88] h-8 bg-white rounded border border-black border-opacity-30">
          <input className="text-black w-full h-full text-opacity-70 text-xs font-medium" placeholder="   Enter Your First Name" />
        </div>  

        <div className="text-black text-xs my-2 mt-2 font-medium">Last Name</div>
        <div className="flex items-center justify-between w-[88] h-8 bg-white rounded border border-black border-opacity-30">
          <input className="text-black w-full h-full text-opacity-70 text-xs font-medium" placeholder="   Enter Your Last Name" />
        </div>

        <div className="text-black text-xs my-2 mt-2 font-medium">Email</div>
        <div className="flex items-center justify-between w-[88] h-8 bg-white rounded border border-black border-opacity-30">
          <input className="text-black w-full h-full text-opacity-70 text-xs font-medium" placeholder="   Enter Your Email" />
        </div>  

        <div className="text-black text-xs my-2 mt-2 font-medium">Phone</div>
        <div className="flex items-center justify-between w-[88] h-8 bg-white rounded border border-black border-opacity-30">
          <input className="text-black w-full h-full text-opacity-70 text-xs font-medium" placeholder="   Enter Your Phone Number" />
        </div>

        <div className="text-black text-xs my-2 mt-2 font-medium">Password</div>
        <div className="flex items-center justify-between w-[88] h-8 bg-white rounded border border-black border-opacity-30">
          <input className="text-black w-full h-full text-opacity-70 text-xs font-medium" placeholder="   Enter Your Password" />
        </div>

        <div className="text-black text-xs my-2 mt-2 font-medium">Confirm Psssword</div>
        <div className="flex items-center justify-between w-[88] h-8 bg-white rounded border border-black border-opacity-30">
          <input className="text-black w-full h-full text-opacity-70 text-xs font-medium" placeholder="   Enter Your Password" />
        </div>

        <button className="w-80 h-8 mt-10 bg-teal-800 rounded">
          <h1 className="text-white text-sm font-semibold">Sign Up</h1>
        </button>       
      </div>
    </div>
    <Footer />
    </>
  )
}

export default page
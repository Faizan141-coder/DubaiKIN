'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {

  const router = useRouter()

  return (
    <div className='flex bg-orange-400'>
      <div className="w-full h-[600px] p-28">
        <div className="text-white text-3xl font-bold">Transfer Money Across<br/>World In Real Time<br/>With No charge</div>
        <div className="w-72 text-white text-sm font-normal mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
        <button className="w-44 h-8 bg-orange-400 rounded-3xl border border-white mt-5">
          <h1 className="text-white text-sm font-normal">Watch Video</h1>
        </button>
      </div>
      <div className="w-96 h-96 bg-white rounded mt-28 mr-28 p-5">
        <div className="text-black text-opacity-80 items-center text-center text-xl font-semibold">Log In</div>
        <div className="text-black text-xs my-2 font-medium">Email</div>
        <div className="flex items-center justify-between w-[88] h-8 bg-white rounded border border-black border-opacity-30">
          <div className="text-black text-opacity-70 text-xs font-medium ml-3">Enter Your Email</div>
        </div>
        <div className="text-black text-xs my-2 font-medium">Password</div>
        <div className="w-[88] h-8 bg-white rounded border border-black border-opacity-30">
        <div className='flex justify-between'>
          <div className="text-black text-opacity-70 text-xs font-medium mt-2 ml-3">Enter Your Password</div>
        </div>
        <div className='text-end items-end mt-5 text-orange-400 text-xs font-medium'>Forgot Password</div> 
        </div>
        <button className="w-80 h-8 bg-blue-950 rounded mt-16">
          <h1 className="text-white text-sm font-semibold">Log In</h1>
        </button>
        <h1 className="text-black text-center my-2 text-sm font-semibold">OR</h1>
        <button className="w-80 h-8 bg-teal-800 rounded">
          <h1 onClick={() => router.push('signup')} className="text-white text-sm font-semibold">Sign Up</h1>
        </button>       
      </div>
    </div>
  )
}

export default page
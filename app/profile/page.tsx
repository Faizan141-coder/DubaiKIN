import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='bg-orange-400 h-[780px]'>
        <div className='py-7 px-20 flex'>
            <div className="w-16 h-16 bg-zinc-300 rounded-full" />
            <div className='ml-3 mt-1'>
                <h1 className="text-white text-2xl font-semibold">Md Al Amin</h1>
                <h1 className="text-white text-lg font-medium">Profile</h1>
            </div>
        </div>
        <div className="w-full h-px border border-white"></div>
        
        <div className='flex px-56 py-5 justify-between'>
            <div className='flex'>
                <div className="text-white text-lg font-normal">First Name:</div>
                <div className="text-white ml-[55px] text-lg font-semibold">Md Al</div>
            </div>
            <div>
                <button className="flex items-center w-24 h-7 bg-white rounded border border-black border-opacity-30">
                    <Image 
                        src={'/mingcute.svg'}
                        alt='edit'
                        className='ml-6'
                        width={20}
                        height={20}
                    />
                    <h1 className="text-black text-sm font-normal">Edit</h1>
                </button>
            </div>
        </div>
        <div className='flex px-56'>
            <div className="text-white text-lg font-normal">Last Name:</div>
            <div className="text-white ml-[56px] text-lg font-semibold">Admin</div>
        </div>
        <div className='flex px-56 py-5'>
            <div className="text-white text-lg font-normal">Date of Birth:</div>
            <div className="text-white ml-10 text-lg font-semibold">12/22/97</div>
        </div>
        <div className='flex px-56'>
            <div className="text-white text-lg font-normal">Gender:</div>
            <div className="text-white ml-[90px] text-lg font-semibold">Male</div>
        </div>
        <div className='flex px-56 py-5'>
            <div className="text-white text-lg font-normal">Contact:</div>
            <div className="text-white ml-[80px] text-lg font-semibold">+8801628312158</div>
        </div>
        <div className='flex px-56 pb-5'>
            <div className="text-white text-lg font-normal">Email:</div>
            <div className="text-white ml-[105px] text-lg font-semibold">muhiitshafkat@gmail.com</div>
        </div>

        <div className="w-full h-px border border-white"></div>
        <div className='flex px-56 py-5 justify-between'>
            <div>
                <div className="text-white text-lg font-normal">Present Address:</div>
                <div className="text-white mt-5 text-lg font-semibold">Sector- 01, Road- 03m Uttara model toen, uttara <br/>Dhaka, 1230.</div>
            </div>
            <button className="flex items-center w-24 h-7 bg-white rounded border border-black border-opacity-30">
                <Image 
                    src={'/mingcute.svg'}
                    alt='edit'
                    className='ml-6'
                    width={20}
                    height={20}
                />
                <h1 className="text-black text-sm font-normal">Edit</h1>
            </button>
        </div>

        <div className="w-full h-px border border-white"></div>
        <div className='flex px-56 py-5 justify-between'>
            <div>
                <div className="text-white text-lg font-normal">Permanent Address:</div>
                <div className="text-white mt-5 text-lg font-semibold">Sector- 01, Road- 03m Uttara model toen, uttara <br/>Dhaka, 1230.</div>
            </div>
            <button className="flex items-center w-24 h-7 bg-white rounded border border-black border-opacity-30">
                <Image 
                    src={'/mingcute.svg'}
                    alt='edit'
                    className='ml-6'
                    width={20}
                    height={20}
                />
                <h1 className="text-black text-sm font-normal">Edit</h1>
            </button>
        </div>

    </div>
  )
}

export default page
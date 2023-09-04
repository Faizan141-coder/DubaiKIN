'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {

    const router = useRouter()

    return (
        <div className='px-28 py-32 bg-orange-400 h-[750px]'>
            <h1 className="text-white mb-3 text-lg font-bold">Please Give Your Digital Signature</h1>
            <div className="w-full h-96 bg-white bg-opacity-50">
                <Image 
                    src={'/vector.svg'}
                    className='ml-[30%]'
                    alt='signature'
                    width={500}
                    height={200}
                />
            </div>  
            <div className='text-end'>
                <button onClick={() => router.push('/receive-money-3')} className="w-36 mt-5 h-10 bg-blue-950 rounded">
                    <h1 className="text-white text-lg font-bold">Save</h1>
                </button>
            </div>
        </div>
    )
}

export default page
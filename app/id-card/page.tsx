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
        <div className='px-28 py-32 bg-orange-400 h-[750px]'>
            <h1 className="text-white mb-3 text-lg font-bold">Please Give Your Digital Signature</h1>
            <div className='flex justify-center'>
                <Image 
                    src='/id-left.svg'
                    width={100}
                    height={100}
                    alt='id-left'
                />
                <Image 
                    src='/id-center.svg'
                    width={500}
                    height={100}
                    alt='id-center'
                />
                <Image 
                    src='/id-right.svg'
                    width={100}
                    height={100}
                    alt='id-right'
                />
            </div>
            <div className='text-end'>
                <button onClick={() => router.push('/receive-money-4')} className="w-36 mt-5 justify-center h-10 bg-blue-950 rounded">
                    <h1 className="text-white text-lg font-bold">Save</h1>
                </button>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default page
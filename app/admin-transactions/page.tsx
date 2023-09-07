'use client'

import NavbarAdmin from '@/components/NavbarAdmin'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {

    const router = useRouter()

    return (
        <div>
            <NavbarAdmin />
            <div className="w-full h-[1000px] relative bg-neutral-100">

                {/* SideBar */}
                <div className="w-64 h-96 left-[16px] top-[20px] absolute">
                    <div className="w-64 h-[460px] left-0 top-0 absolute bg-white rounded-2xl" />
                    <div onClick={() => router.push('/admin')} className="cursor-pointer w-64 h-10 left-0 top-[25px] absolute">
                        <div className="w-52 h-10 left-[24px] top-0 absolute">
                        <Image 
                            src="/dashboard.png"
                            width={24}
                            height={24}
                            alt="Dashboard"
                            className='mt-2 ml-2'
                        />
                        </div>
                        <div className="w-6 h-6 left-[38px] top-[8px] absolute" />
                        <div className="w-36 h-4 left-[86px] top-[11px] absolute text-sm font-medium leading-tight tracking-tight">Dashboard</div>
                    </div>
                    <div onClick={() => router.push('/admin-people')} className="cursor-pointer w-64 h-10 left-0 top-[70px] absolute">
                        <div className="w-52 h-10 left-[24px] top-[6px] absolute">
                        <Image 
                            src="/people.svg"
                            width={24}
                            height={24}
                            alt="People"
                            className='mt-2 ml-2'
                        />
                        </div>
                        <div className="w-36 h-4 left-[86px] top-[16px] absolute text-sm font-medium leading-tight tracking-tight">People</div>
                    </div>
                    
                    <div onClick={() => router.push('/admin-transfer')} className="cursor-pointer w-64 h-10 left-0 top-[120px] absolute">
                    <div className="w-52 h-10 left-[24px] top-[6px] absolute">
                        <Image 
                            src="/transfer.svg"
                            width={24}
                            height={24}
                            alt="Transfer Rate"
                            className='mt-2 ml-2'
                        />
                    </div>
                    <div className="w-36 h-4 left-[86px] top-[16px] absolute text-sm font-medium leading-tight tracking-tight">Transfer Rate</div>
                    </div>
                    <div onClick={() => router.push('/admin-calendar')} className="cursor-pointer w-64 h-10 left-0 top-[168px] absolute">
                    <div className="w-52 h-10 left-[24px] top-[6px] absolute">
                        <Image 
                            src="/calendar.svg"
                            width={24}
                            height={24}
                            alt="Calendar"
                            className='mt-2 ml-2'
                        />
                    </div>
                    <div className="w-36 h-4 left-[86px] top-[16px] absolute text-sm font-medium leading-tight tracking-tight">Calendar</div>
                    </div>
                    <div className="cursor-pointer w-64 h-10 left-0 top-[216px] absolute">
                    <div className="w-52 h-10 left-[24px] top-[6px] absolute bg-blue-100 rounded">
                        <Image 
                            src="/transactions-orange.png"
                            width={24}
                            height={24}
                            alt="Transactions"
                            className='mt-2 ml-2'
                        />
                        </div>
                        <div className="w-36 h-4 left-[86px] top-[16px] absolute text-orange-400 text-sm font-medium leading-tight tracking-tight">Transactions</div>
                    </div>
                    <div className="cursor-pointer w-64 h-10 left-0 top-[264px] absolute">
                        <Image 
                            src="/fees.svg"
                            width={24}
                            height={24}
                            alt="Fees"
                            className='mt-2 ml-8'
                        />
                    <div className="w-6 h-6 left-[38px] top-[8px] absolute">
                        <div className="w-6 h-6 left-0 top-0 absolute" />
                    </div>
                    <div className="w-36 h-4 left-[86px] top-[11px] absolute text-black text-opacity-90 text-sm font-medium leading-tight tracking-tight">Fees</div>
                    </div>
                    <div onClick={() => router.push('/admin-currency')} className="cursor-pointer w-64 h-10 left-0 top-[312px] absolute">
                        <Image 
                            src="/currency.svg"
                            width={24}
                            height={24}
                            alt="Currency Settings"
                            className='mt-2 ml-8'
                        />
                        <div className="w-6 h-6 left-[38px] top-[8px] absolute">
                            <div className="w-6 h-6 left-0 top-0 absolute" />
                        </div>
                        <div className="w-36 h-4 left-[86px] top-[11px] absolute text-black text-opacity-90 text-sm font-medium leading-tight tracking-tight">Currency Setup</div>
                    </div>
                    <div className="cursor-pointer w-64 h-10 left-0 top-[360px] absolute">
                        <Image 
                            src="/settings.svg"
                            width={24}
                            height={24}
                            alt="Settings"
                            className='mt-2 ml-8'
                        />
                        <div className="w-6 h-6 left-[38px] top-[8px] absolute">
                            <div className="w-6 h-6 left-0 top-0 absolute" />
                        </div>
                        <div className="w-36 h-4 left-[86px] top-[11px] absolute text-black text-opacity-90 text-sm font-medium leading-tight tracking-tight">Settings</div>
                    </div>
                    <div className="cursor-pointer w-64 h-10 left-0 top-[408px] absolute">
                        <Image 
                            src="/help.svg"
                            width={24}
                            height={24}
                            alt="Help"
                            className='mt-2 ml-8'
                        />
                        <div className="w-6 h-6 left-[38px] top-[8px] absolute">
                            <div className="w-6 h-6 left-0 top-[-2px] absolute" />
                        </div>
                        <div className="w-36 h-4 left-[86px] top-[11px] absolute text-black text-opacity-90 text-sm font-medium leading-tight tracking-tight">Help</div>
                    </div>
                </div>
                
                {/* Footer */}
                <div className="w-64 h-20 left-[16px] top-[883px] absolute">
                    <div className="w-64 h-20 left-0 top-0 absolute bg-white rounded-2xl" />
                    <div className="w-36 h-8 left-[56px] top-[44px] absolute text-center text-neutral-400 text-xs font-normal leading-none tracking-tight">Version: 1.0.0.11</div>
                </div>
                <Image className="w-40 h-8 left-[63px] top-[892px] absolute" width={40} height={8} src="/image 4.svg" alt='DubaiKIN Logo' />
            </div>
        </div>
    )
}

export default page
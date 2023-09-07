import NavbarAdmin from '@/components/NavbarAdmin'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
        <NavbarAdmin />
        <div className="w-full h-[1000px] relative bg-neutral-100">

            {/* SideBar */}
            <div className="w-64 h-96 left-[16px] top-[20px] absolute">
                <div className="w-64 h-[460px] left-0 top-0 absolute bg-white rounded-2xl" />
                <div className="w-64 h-10 left-0 top-[25px] absolute">
                    <div className="w-52 h-10 left-[24px] top-0 absolute bg-blue-100 rounded">
                    <Image 
                        src="/dashboard.svg"
                        width={24}
                        height={24}
                        alt="Dashboard"
                        className='mt-2 ml-2'
                    />
                    </div>
                    <div className="w-6 h-6 left-[38px] top-[8px] absolute" />
                    <div className="w-36 h-4 left-[86px] top-[11px] absolute text-blue-500 text-sm font-medium leading-tight tracking-tight">Dashboard</div>
                </div>
                <div className="w-64 h-10 left-0 top-[72px] absolute">
                    <div className="w-6 h-6 left-[38px] top-[6px] absolute" />
                    <Image 
                        src="/people.svg"
                        width={24}
                        height={24}
                        alt="People"
                        className='mt-2 ml-8'
                    />
                    <div className="w-36 h-4 left-[86px] top-[11px] absolute text-black text-opacity-90 text-sm font-medium leading-tight tracking-tight">People</div>
                </div>
                
                <div className="w-64 h-10 left-0 top-[120px] absolute">
                    <div className="w-6 h-6 left-[38px] top-[8px] absolute" />
                    <Image 
                        src="/transfer.svg"
                        width={24}
                        height={24}
                        alt="Transfer Rate"
                        className='mt-2 ml-8'
                    />
                    <div className="w-36 h-4 left-[86px] top-[11px] absolute text-black text-opacity-90 text-sm font-medium leading-tight tracking-tight">Transfer Rate</div>
                </div>
                <div className="w-64 h-10 left-0 top-[168px] absolute">
                    <Image 
                        src="/calendar.svg"
                        width={24}
                        height={24}
                        alt="Calendar"
                        className='mt-2 ml-8'
                    />
                    <div className="w-36 h-4 left-[86px] top-[11px] absolute text-black text-opacity-90 text-sm font-medium leading-tight tracking-tight">Calendar</div>
                    <div className="w-6 h-6 left-[38px] top-[8px] absolute" />
                </div>
                <div className="w-64 h-10 left-0 top-[216px] absolute">
                    <Image 
                        src="/transactions.svg"
                        width={24}
                        height={24}
                        alt="Transactions"
                        className='mt-2 ml-8'
                    />
                    <div className="w-6 h-6 left-[38px] top-[8px] absolute" />
                    <div className="w-36 h-4 left-[86px] top-[11px] absolute text-black text-opacity-90 text-sm font-medium leading-tight tracking-tight">Transactions</div>
                </div>
                <div className="w-64 h-10 left-0 top-[264px] absolute">
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
                <div className="w-64 h-10 left-0 top-[312px] absolute">
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
                <div className="w-64 h-10 left-0 top-[360px] absolute">
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
                <div className="w-64 h-10 left-0 top-[408px] absolute">
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
            
            {/* Add Widget Button */}
            <div className="w-36 h-10 left-[1190px] top-[20px] absolute">
                <div className="w-36 h-10 left-0 top-0 absolute bg-green-500 rounded-2xl shadow border border-green-500" />
                <div className="w-6 h-6 left-[16px] top-[8px] absolute">
                </div>
                <div className="w-24 h-6 left-[26px] top-[11px] absolute text-center text-white text-sm font-bold leading-tight tracking-tight">ADD WIDGET</div>
            </div>
            
            {/* Transaction Box */}
            <div className="w-96 h-96 left-[288px] top-[20px] absolute">
                <div className="w-96 h-96 left-0 top-0 absolute bg-white rounded-2xl" />
                <div className="w-10 h-2 left-[216px] top-[448px] absolute">
                    <div className="w-2 h-2 left-0 top-0 absolute bg-blue-500 rounded-full" />
                    <div className="w-2 h-2 left-[16px] top-0 absolute bg-zinc-300 rounded-full" />
                    <div className="w-2 h-2 left-[32px] top-0 absolute bg-zinc-300 rounded-full" />
                </div>
                <div className="w-16 h-5 left-[74px] top-[392px] absolute">
                    <div className="w-4 h-4 left-0 top-[2px] absolute bg-orange-300 rounded-full" />
                    <div className="w-10 left-[24px] top-0 absolute text-black text-sm font-normal leading-tight tracking-wide">Paris</div>
                </div>
                <div className="w-20 h-5 left-[154px] top-[392px] absolute">
                    <div className="w-4 h-4 left-0 top-[2px] absolute bg-emerald-400 rounded-full" />
                    <div className="w-16 left-[24px] top-0 absolute text-black text-sm font-normal leading-tight tracking-wide">Bangkok</div>
                </div>
                <div className="w-28 h-5 left-[258px] top-[392px] absolute">
                    <div className="w-4 h-4 left-0 top-[2px] absolute bg-violet-500 rounded-full" />
                    <div className="left-[24px] top-0 absolute text-black text-sm font-normal leading-tight tracking-wide">San Francisco</div>
                </div>
                <div className="w-56 h-8 left-[24px] top-[16px] absolute text-black text-xl font-medium leading-normal tracking-tight">Transaction</div>
                <div className="w-20 h-8 left-[24px] top-[56px] absolute text-neutral-400 text-base font-normal leading-normal tracking-tight">Total</div>
                <div className="w-6 h-6 left-[440px] top-[224px] absolute">
                </div>
                <div className="w-6 h-6 left-[8px] top-[224px] absolute">
                </div>
                <div className="w-96 h-64 left-[54px] top-[112px] absolute">
                    <div className="w-80 h-px left-0 top-[35px] absolute border border-neutral-400"></div>
                    <div className="w-80 h-px left-0 top-[99px] absolute border border-neutral-400"></div>
                    <div className="w-80 h-px left-[4px] top-[171px] absolute border border-neutral-400"></div>
                    <div className="w-8 h-4 left-[344px] top-[26px] absolute text-neutral-600 text-base font-normal leading-normal tracking-tight">707</div>
                    <div className="w-8 h-4 left-[344px] top-[90px] absolute text-neutral-600 text-base font-normal leading-normal tracking-tight">400</div>
                    <div className="w-10 h-4 left-[30px] top-[240px] absolute text-center text-neutral-600 text-base font-normal leading-normal tracking-tight">2016</div>
                    <div className="w-10 h-4 left-[110px] top-[240px] absolute text-center text-neutral-600 text-base font-normal leading-normal tracking-tight">2017</div>
                    <div className="w-10 h-4 left-[189px] top-[240px] absolute text-center text-neutral-600 text-base font-normal leading-normal tracking-tight">2018</div>
                    <div className="w-10 h-4 left-[270px] top-[240px] absolute text-center text-neutral-600 text-base font-normal leading-normal tracking-tight">2019</div>
                    <div className="w-8 h-4 left-[344px] top-[157px] absolute text-neutral-600 text-base font-normal leading-normal tracking-tight">200</div>
                    <div className="w-8 h-4 left-[344px] top-[217px] absolute text-neutral-600 text-base font-normal leading-normal tracking-tight">0</div>
                    <div className="w-80 h-px left-0 top-[227px] absolute border border-neutral-400"></div>
                    <div className="w-10 h-4 left-[344px] top-0 absolute text-neutral-600 text-base font-normal leading-normal tracking-tight">Total</div>
                    <div className="w-2 h-px left-[49px] top-[227px] absolute origin-top-left rotate-90 border border-neutral-400"></div>
                    <div className="w-2 h-px left-[129px] top-[227px] absolute origin-top-left rotate-90 border border-neutral-400"></div>
                    <div className="w-2 h-px left-[209px] top-[227px] absolute origin-top-left rotate-90 border border-neutral-400"></div>
                    <div className="w-2 h-px left-[289px] top-[227px] absolute origin-top-left rotate-90 border border-neutral-400"></div>
                </div>
            </div>

            {/* Statistics Box */}
            <div className="w-96 h-96 left-[776px] top-[20px] absolute">
                <div className="w-96 h-96 left-0 top-0 absolute bg-white rounded-2xl" />
                <div className="w-56 h-8 left-[24px] top-[16px] absolute text-black text-xl font-medium leading-normal tracking-tight">Statistics</div>
                <div className="w-6 h-6 left-[8px] top-[224px] absolute">
                </div>
                <div className="w-6 h-6 left-[432px] top-[224px] absolute">
                </div>
                <div className="w-64 h-64 left-[104px] top-[64px] absolute">
                    <div className="w-64 h-64 left-0 top-0 absolute bg-rose-500 rounded-full" />
                    <div className="w-64 h-64 left-0 top-0 absolute bg-yellow-500 rounded-full" />
                    <div className="w-64 h-64 left-0 top-0 absolute bg-pink-700 rounded-full" />
                    <div className="w-64 h-64 left-0 top-0 absolute bg-teal-500 rounded-full" />
                    <div className="w-64 h-64 left-0 top-0 absolute bg-sky-500 rounded-full" />
                    <div className="w-64 h-64 left-0 top-0 absolute bg-purple-500 rounded-full" />
                    <div className="w-64 h-64 left-0 top-0 absolute bg-green-400 rounded-full" />
                    <div className="w-64 h-64 left-0 top-0 absolute bg-violet-600 rounded-full" />
                </div>
                <div className="w-32 left-[168px] top-[179px] absolute text-center text-black text-base font-normal leading-normal tracking-tight">Projects by account</div>
                <div className="w-14 h-4 left-[40px] top-[360px] absolute">
                    <div className="w-4 h-4 left-0 top-0 absolute bg-rose-500 rounded-full" />
                    <div className="w-8 h-4 left-[24px] top-0 absolute text-black text-sm font-normal leading-tight tracking-wide">KFC</div>
                </div>
                <div className="w-36 h-4 left-[112px] top-[360px] absolute">
                    <div className="w-4 h-4 left-0 top-0 absolute bg-yellow-500 rounded-full" />
                    <div className="w-28 h-4 left-[24px] top-0 absolute text-black text-sm font-normal leading-tight tracking-wide">FIAT-Chrysler LLC</div>
                </div>
                <div className="w-14 h-4 left-[272px] top-[360px] absolute">
                    <div className="w-4 h-4 left-0 top-0 absolute bg-pink-700 rounded-full" />
                    <div className="w-8 h-4 left-[24px] top-0 absolute text-black text-sm font-normal leading-tight tracking-wide">KLM</div>
                </div>
                <div className="w-20 h-4 left-[344px] top-[360px] absolute">
                    <div className="w-4 h-4 left-0 top-0 absolute bg-teal-500 rounded-full" />
                    <div className="w-16 h-4 left-[24px] top-0 absolute text-black text-sm font-normal leading-tight tracking-wide">Aeroflot</div>
                </div>
                <div className="w-16 h-4 left-[40px] top-[397px] absolute">
                    <div className="w-4 h-4 left-0 top-0 absolute bg-sky-500 rounded-full" />
                    <div className="w-10 h-4 left-[24px] top-0 absolute text-black text-sm font-normal leading-tight tracking-wide">Lukoil</div>
                </div>
                <div className="w-36 h-5 left-[120px] top-[395px] absolute">
                    <div className="w-4 h-4 left-0 top-[2px] absolute bg-purple-500 rounded-full" />
                    <div className="left-[24px] top-0 absolute text-black text-sm font-normal leading-tight tracking-wide">American Express</div>
                </div>
                <div className="w-20 h-5 left-[280px] top-[395px] absolute">
                    <div className="w-4 h-4 left-0 top-[2px] absolute bg-green-400 rounded-full" />
                    <div className="left-[24px] top-0 absolute text-black text-sm font-normal leading-tight tracking-wide">Daimler</div>
                </div>
                <div className="w-10 h-2 left-[216px] top-[448px] absolute">
                    <div className="w-2 h-2 left-0 top-0 absolute bg-blue-500 rounded-full" />
                    <div className="w-2 h-2 left-[16px] top-0 absolute bg-zinc-300 rounded-full" />
                    <div className="w-2 h-2 left-[32px] top-0 absolute bg-zinc-300 rounded-full" />
                </div>
            </div>

            {/* Assigned Risks Box */}
            <div className="w-96 h-96 left-[288px] top-[576px] absolute">
                <div className="w-96 h-96 left-0 top-0 absolute bg-white rounded-2xl" />
                <div className="w-56 h-7 left-[24px] top-[13.12px] absolute text-black text-xl font-medium leading-normal tracking-tight">Assigned Risks</div>
                <div className="w-40 h-3 left-[160px] top-[187.76px] absolute text-neutral-400 text-xs font-normal leading-none tracking-tight">There are no risks assigned.</div>
            </div>

            {/* Assigned Action Items Box */}
            <div className="w-96 h-96 left-[776px] top-[576px] absolute">
                <div className="w-96 h-96 left-0 top-0 absolute bg-white rounded-2xl" />
                <div className="w-56 h-7 left-[24px] top-[13.12px] absolute text-black text-xl font-medium leading-normal tracking-tight">Assigned Action Items</div>
                <div className="w-48 h-3 left-[139px] top-[187.76px] absolute text-neutral-400 text-xs font-normal leading-none tracking-tight">There are no action items assigned.</div>
            </div>

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
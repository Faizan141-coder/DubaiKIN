'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility
  const router = useRouter();

  const handleLinkClick = (path: React.SetStateAction<string>) => {
    setActiveLink(path);
    router.push(`/${path}`);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMenuOption = (path: React.SetStateAction<string>) => {
    setActiveLink(path);
    router.push(`/${path}`);
    setIsMenuOpen(false);
  };
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between">
        <div
          onClick={() => {
            setActiveLink('');
            router.push('/');
          }}
          className="text-black cursor-pointer font-semibold text-lg"
        >
          <Image src="/image 4.svg" width={200} height={43} alt={'DubaiKin'} />
        </div>
        <div className="space-x-7 flex items-center">
          <a
            href="#"
            onClick={() => handleLinkClick('send-money')}
            className={`text-blue-950 text-base font-semibold hover:text-gray-300 ${
              activeLink === 'send-money' ? 'underline' : ''
            }`}
          >
            Send Money
          </a>
          <a
            href="#"
            onClick={() => handleLinkClick('receive-money-1')}
            className={`text-blue-950 text-base font-semibold hover:text-gray-300 ${
              activeLink === 'receive-money-1' ? 'underline' : ''
            }`}
          >
            Receive Money
          </a>
          <a
            href="#"
            className='text-blue-950 text-base font-semibold hover:text-gray-300'
          >
            Track Transfer
          </a>
          <a>
            <Image
              src="/ic_outline-menu.svg"
              className="ml-5 cursor-pointer"
              width={24}
              height={24}
              alt={''}
              onClick={toggleMenu}
            />
          </a>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute text-center top-16 right-4 w-80 bg-white bg-opacity-80 border border-black border-opacity-30">
          <ul>
            <div>
              <h1 className='cursor-pointer py-4 bg-white bg-opacity-20 hover:bg-opacity-100' onClick={() => toggleMenuOption('profile')}>Profile</h1>
            </div>
            <div className="w-full h-px border border-black border-opacity-30"></div>
            <li>
              <h1 className='cursor-pointer py-4 bg-white bg-opacity-20 hover:bg-opacity-100' onClick={() => toggleMenuOption('transaction-history')}>Transaction History</h1>
            </li>
            <div className="w-full h-px border border-black border-opacity-30 hover:bg-white"></div>
            <li>
              <h1 className='cursor-pointer py-4 bg-white bg-opacity-20 hover:bg-opacity-100' onClick={() => toggleMenuOption('')}>Privacy & Policy</h1>
            </li>
            <div className="w-full h-px border border-black border-opacity-30 hover:bg-white"></div>
            <li>
              <h1 className='cursor-pointer py-4 bg-white bg-opacity-20 hover:bg-opacity-100' onClick={() => toggleMenuOption('about-us')}>About Us</h1>
            </li>
            <div className="w-full h-px border border-black border-opacity-30 hover:bg-white"></div>
            <li>
              <h1 className='cursor-pointer py-4 bg-white bg-opacity-20 hover:bg-opacity-100' onClick={() => toggleMenuOption('')}>Your Saved Accounts</h1>
            </li>
            <div className="w-full h-px border border-black border-opacity-30 hover:bg-white"></div>
            <li>
              <h1 className='cursor-pointer py-4 bg-white bg-opacity-20 hover:bg-opacity-100' onClick={() => toggleMenuOption('login')}>Log In</h1>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


// 'use client'
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import React, { useState, useEffect } from 'react';

// const Navbar = () => {
//   const [activeLink, setActiveLink] = useState('');
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility
//   const router = useRouter();

//   const handleLinkClick = (path: React.SetStateAction<string>) => {
//     setActiveLink(path);
//     router.push(`/${path}`);
//     setIsMenuOpen(false); // Close the menu when an option is clicked
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Close the menu when clicking outside of it
//   useEffect(() => {
//     const closeMenu = () => {
//       setIsMenuOpen(false);
//     };

//     if (isMenuOpen) {
//       window.addEventListener('click', closeMenu);
//     }

//     return () => {
//       window.removeEventListener('click', closeMenu);
//     };
//   }, [isMenuOpen]);

//   return (
//     <nav className="bg-white p-4">
//       <div className="container mx-auto flex justify-between">
//         <div
//           onClick={() => {
//             setActiveLink('');
//             router.push('/');
//           }}
//           className="text-black cursor-pointer font-semibold text-lg"
//         >
//           <Image src="/image 4.svg" width={200} height={43} alt={'DubaiKin'} />
//         </div>
//         <div className="space-x-7 flex items-center">
//           <a
//             href="#"
//             onClick={() => handleLinkClick('send-money')}
//             className={`text-blue-950 text-base font-semibold hover:text-gray-300 ${
//               activeLink === 'send-money' ? 'underline' : ''
//             }`}
//           >
//             Send Money
//           </a>
//           <a
//             href="#"
//             onClick={() => handleLinkClick('receive-money-1')}
//             className={`text-blue-950 text-base font-semibold hover:text-gray-300 ${
//               activeLink === 'receive-money-1' ? 'underline' : ''
//             }`}
//           >
//             Receive Money
//           </a>
//           <a
//             href="#"
//             className="text-blue-950 text-base font-semibold hover:text-gray-300"
//           >
//             Track Transfer
//           </a>
//           <a>
//             <Image
//               src="/ic_outline-menu.svg"
//               className="ml-5 cursor-pointer"
//               width={24}
//               height={24}
//               alt={'DropDown Menu'}
//               onClick={toggleMenu}
//             />
//           </a>
//         </div>
//       </div>

//       {isMenuOpen && (
//         <div className="absolute text-center top-16 right-4 w-80 bg-white bg-opacity-80 border border-black border-opacity-30">
//           <ul>
//             <div>
//               <h1
//                 className="cursor-pointer py-4 bg-white bg-opacity-20 hover:bg-opacity-100"
//                 onClick={() => {
//                   router.push('/profile');
//                   setIsMenuOpen(false); // Close the menu
//                 }}
//               >
//                 Profile
//               </h1>
//             </div>
//             <div className="w-full h-px border border-black border-opacity-30"></div>
//             <li>
//               <h1
//                 className="cursor-pointer py-4 bg-white bg-opacity-20 hover:bg-opacity-100"
//                 onClick={() => {
//                   router.push('/transaction-history');
//                   setIsMenuOpen(false); // Close the menu
//                 }}
//               >
//                 Transaction History
//               </h1>
//             </li>
//             <div className="w-full h-px border border-black border-opacity-30 hover:bg-white"></div>
//             <li>
//               <h1
//                 className="cursor-pointer py-4 bg-white bg-opacity-20 hover:bg-opacity-100"
//                 onClick={() => {
//                   router.push('/');
//                   setIsMenuOpen(false); // Close the menu
//                 }}
//               >
//                 Privacy & Policy
//               </h1>
//             </li>
//             <div className="w-full h-px border border-black border-opacity-30 hover:bg-white"></div>
//             <li>
//               <h1
//                 className="cursor-pointer py-4 bg-white bg-opacity-20 hover:bg-opacity-100"
//                 onClick={() => {
//                   router.push('/about-us');
//                   setIsMenuOpen(false); // Close the menu
//                 }}
//               >
//                 About Us
//               </h1>
//             </li>
//             <div className="w-full h-px border border-black border-opacity-30 hover:bg-white"></div>
//             <li>
//               <h1
//                 className="cursor-pointer py-4 bg-white bg-opacity-20 hover:bg-opacity-100"
//                 onClick={() => {
//                   router.push('/');
//                   setIsMenuOpen(false); // Close the menu
//                 }}
//               >
//                 Your Saved Accounts
//               </h1>
//             </li>
//             <div className="w-full h-px border border-black border-opacity-30 hover:bg-white"></div>
//             <li>
//               <h1
//                 className="cursor-pointer py-4 bg-white bg-opacity-20 hover:bg-opacity-100"
//                 onClick={() => {
//                   router.push('/login');
//                   setIsMenuOpen(false); // Close the menu
//                 }}
//               >
//                 Log In
//               </h1>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

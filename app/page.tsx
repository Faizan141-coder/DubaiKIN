// import Image from "next/image";

// export default function Home() {
//   return (
//     <>
//       <div className="flex w-full h-[459px] bg-orange-400">
//         <div className="flex flex-col justify-center items-center">
//           <button className="w-52 h-12 ml-10 bg-white rounded-3xl">
//             <h1 className="text-indigo-950 text-sm font-semibold">Find Your Location</h1>
//           </button>
//           <h1 className="text-white ml-10 mt-2 text-sm font-semibold underline">Protect Your Fund By Your</h1>
//         </div>
//         <div className="flex-grow flex items-end justify-end">
//           <Image src="/home.svg" alt="" width={754} height={400} />
//         </div>
//       </div>
//       <div className="flex w-full h-[459px] items-center justify-center bg-white">
//         <div className="text-center items-center mx-10">
//           <Image 
//             src="/home-3.svg"
//             alt=""
//             width={265}
//             height={144}
//           />
//           <h1 className="text-blue-950 text-xl font-semibold mt-10">Send Money</h1>
//           <p className="w-72 text-black mt-3 text-opacity-70 text-xs text-justify font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//         </div>
//         <div className="text-center items-center mx-10">
//           <Image 
//             src="/home-2.svg"
//             alt=""
//             width={316}
//             height={144}
//           />
//           <h1 className="text-blue-950 text-xl font-semibold mt-10">Receive Money</h1>
//           <p className="w-72 text-black mt-3 text-opacity-70 text-xs text-justify font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//         </div>
//         <div className="text-center items-center mx-10">
//           <Image 
//             src="/home-1.svg"
//             alt=""
//             width={185}
//             height={167}
//           />
//           <h1 className="text-blue-950 text-xl font-semibold">Become a DubaiKin</h1>
//           <p className="w-72 text-black mt-3 text-opacity-70 text-xs text-justify font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
//         </div>
//       </div>
//     </>
    
//   );
// }


import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex w-full h-[459px] bg-orange-400">
        <div className="flex flex-col justify-center items-center">
          <button className="w-52 h-12 ml-10 bg-white rounded-3xl">
            <h1 className="text-indigo-950 text-sm font-semibold">Find Your Location</h1>
          </button>
          <h1 className="text-white ml-10 mt-2 text-sm font-semibold underline">Protect Your Fund By Your</h1>
        </div>
        <div className="flex-grow flex items-end justify-end">
          <Image src="/home.svg" alt="" width={754} height={400} />
        </div>
      </div>
      <div className="flex w-full h-[459px] items-center justify-center bg-white">
        <div className="text-center items-center mx-10">
          <div className="image-container mt-10">
            <Image 
              src="/home-3.svg"
              alt=""
              width={265}
              height={144}
            />
          </div>
          <h1 className="text-blue-950 text-xl font-semibold">Send Money</h1>
          <p className="w-72 text-black mt-3 text-opacity-70 text-xs text-justify font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="text-center items-center mx-10">
          <div className="image-container mt-20">
            <Image 
              src="/home-2.svg"
              alt=""
              width={265} 
              height={144}
            />
          </div>
          <h1 className="text-blue-950 text-xl font-semibold">Receive Money</h1>
          <p className="w-72 text-black mt-3 text-opacity-70 text-xs text-justify font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="text-center items-center mx-10">
          <div className="image-container">
            <Image 
              src="/home-1.svg"
              alt=""
              width={200}  
              height={80} 
            />
          </div>
          <h1 className="text-blue-950 text-xl font-semibold">Become a DubaiKin</h1>
          <p className="w-72 text-black mt-3 text-opacity-70 text-xs text-justify font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
      </div>
    </>
  );
}

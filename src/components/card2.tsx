

import React from "react";
import Image from 'next/image';
// import CardImage from '../../public/CardImage1.avif';




export const MarketValue: React.FC = () => {


  return (
    <div className="max-w-md   mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6 mt-5">
      {/* Heading */}
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Total Franchisees Onboard</h2>
      </div>

      <div className="flex justify-between w-full">
        <div className='flex gap-2'>
          <h1 className="text-black text-2xl">14</h1>
          <p className="px-3 h-5 dark:text-black  text-sm border border-black rounded-lg">7.4%</p>
        </div>
        <div className="w-10 h-10  flex justify-evenly rounded-full overflow-hidden border-2 border-gray-300">
          <Image
            src='/CardImage1.avif'
            alt="card"
            width={40}
            height={40}

          />


        </div>
      </div>

      <div className="mt-10 flex justify-between">
        <div className="h-3 rounded-full  bg-black w-20"></div>
        <div className="h-3 rounded-full bg-blue-400 w-16"></div>
        <div className="h-3 rounded-full bg-sky-300 w-28"></div>
      </div>


      <div className="">
        <div className="flex justify-between">
          <li className="text-sm dark:text-black">
            Stage 1 (Initial Inquiry)
          </li>
          <h1 className="  text-black text-2xl">02</h1>
        </div>
        <div className="flex justify-between mt-3">
          <li className="text-sm dark:text-black">
            Stage 2 (Document Submission)
          </li>
          <h1 className="text-black text-2xl">07</h1>
        </div>
        <div className="flex justify-between mt-4">
          <li className="text-sm dark:text-black  ">
            Stage 3 (Training)
          </li>
          <h1 className="text-black text-2xl">05</h1>
        </div>
      </div>


    </div>
  );
};

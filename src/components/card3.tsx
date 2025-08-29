

import React from "react";
import Image from 'next/image';
import CardImage2 from '../../public/cardImage2.avif'


export const Feedback: React.FC = () => {


  return (
    <div className="max-w-md   mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6 mt-5">
      {/* Heading */}
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Key Insights & Feedback</h2>
      </div>

      <div className="flex justify-between w-full">
        <div className='flex gap-2'>
          <h1 className="text-black text-3xl">10 %</h1>

        </div>
        <div className="w-10 h-10  flex justify-evenly rounded-full overflow-hidden border-2 border-gray-300">
          <Image
            src={CardImage2}
            alt="card"
            width={40}
            height={40}

          />

        </div>

      </div>
      <div className="flex justify-between">
        <p className="dark:text-black text-0.5xl">Sales Growth</p>
        <button className="bg-sky-200 px-3 border-1 border-sky-100 text-sm rounded-lg">Top Performer</button>
      </div>

      <div className="mt-10 border dark:text-black  border-gray-200 p-3 rounded-sm bg-sky-50">
        <h1 className="p-2 text-2xl dark:text-black">Feedback</h1>
        <p className="text-sm dark:text-black">Freanchisees are requesting more detailed Training materials</p>
      </div>





    </div>
  );
};

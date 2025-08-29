

import React from "react";


export const Finacial: React.FC = () => {


  return (
    <div className="max-w-md   mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6 mt-3">
      {/* Heading */}
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Finacial Wellbeing</h2>
      </div>

      <div className="flex justify-between w-full">
        <div className='flex gap-2'>
          <h1 className="text-black text-2xl">20</h1>

        </div>

      </div>

      <div className="flex justify-between">
        <p className="dark:text-black text-0.5xl">Total Franchisees</p>
        <button className="bg-sky-200 px-3 border-1 border-green-400 text-sm rounded-lg text-black">2.1%</button>
      </div>

      <hr className="bg-gray-400" />

      <div className='flex gap-14  p-2'>
        <div className="text-black border-1 border-gray-300 p-2 rounded-sm bg-gray-100">
          <h1>Target</h1>
          <p className='text-sm'>$ 500,0000</p>
        </div>
        <div className="text-black border-1 border-gray-300  p-2 rounded-sm  bg-gray-100  ">
          <h1>Current</h1>
          <p className='text-sm'>$ 450,000</p>
        </div>
      </div>


    </div>
  );
};



import React from "react";
import Image from 'next/image';
import CardImage2 from '../../public/cardImage2.avif';
import NavbarImage from '../../public/NavbarImage.jpg';
import CardImage from '../../public/CardImage1.avif';

export const Card5: React.FC = () => {


  return (
    <div className="max-w-md   mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6 mt-5">
      {/* Heading */}
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Prospect Leads</h2>

        <div className="mt-10">
          <div className="flex gap-2 justify-beetween text-black bg-gray-100 border-1 border-gray-200 rounded-sm ">
            <Image
              src='/NavbarImage.jpg'
              alt="profile"
              width={40}
              height={40}
              className='rounded-full w-10 h-10 mt-2'
            />
            <h1 className="mt-2 text-sm">Wade Wareen</h1>
            <p className="mt-2 text-sm">Stage:Initial Inquiry</p>
          </div>
          <div className="flex gap-2 justify-beetween text-black bg-gray-100 border-1 border-gray-200 rounded-sm mt-2">
            <Image
              src='/CardImage2.avif'
              alt="profile"
              width={40}
              height={40}
              className='rounded-full w-10 h-10 mt-2'
            />
            <h1 className="mt-2">Ava Wright</h1>
            <p className="mt-2">Stage:Initial Inquiry</p>
          </div>
          <div className="flex gap-2 justify-beetween text-black bg-gray-100 border-1 border-gary-200 rounded-sm mt-2">
            <Image
              src='/CardImage1.avif'
              alt="profile"
              width={40}
              height={40}
              className='rounded-full w-10 h-10 mt-2'
            />
            <h1 className="mt-2">Cody Fisher</h1>
            <p className="mt-2">Stage:Initial Inquiry</p>
          </div>
        </div>
      </div>



    </div>
  );
};

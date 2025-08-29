import React from "react"
import { Settings } from "lucide-react"
import NavbarImage from '../../public/NavbarImage.jpg';
import Image from "next/image"

export const Navbar: React.FC = () => {
  return (
    <nav className="w-[100%] justify-items-end  dark:bg-black bg-white  px-5 py-2 flex  items-center">
      {/* Settings Icon */}
      <button className="mr-4 p-2 dark:text-white rounded-full hover:bg-gray-100 dark:hover:text-black">
        <Settings size={24} />
      </button>

      {/* Dummy Profile Picture */}
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300">
        <Image
          src={NavbarImage}
          alt="Profile"
          className="object-cover"
          width={40}
          height={40}
        />
      </div>
    </nav>
  )
}

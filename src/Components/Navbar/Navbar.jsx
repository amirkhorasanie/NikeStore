import React from 'react'
import { SiNike } from "react-icons/si";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoMoonOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
    <div className="flex">
        <div className="flex z-10 fixed w-full
        bg-gray-200 py-1 justify-between px-8">
            <p className="font-semibold">
                Just Landed: The Nike App. Learn More
            </p>
            <div className="flex gap-6 font-semibold">
                <p>Sign in</p>
                <p>Join Us</p>
                <p>Help</p>
            </div>
        </div>  
        <div className="w-full border-y-2 fixed z-10 border-gray-400
        px-8 flex items-center justify-between  h-15 top-8 bg-white">
            <div className='text-6xl border-x-2 px-5 border-gray-400'>
                <SiNike />
            </div>
            <div>
                <ul className='flex gap-10 *:cursor-pointer
                 *:hover:text-gray-700 
                 *:transition-transform *:duration-400 
                 *:hover:scale-112 font-semibold'>
                    <li>HOME</li>
                    <li>MAN</li>
                    <li>WOMAN</li>
                    <li>KIDS</li>
                    <li>COLLECTIONS</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <div className=''>
                <button className='border-x-2 border-gray-400 p-3.5'>
                    <IoMoonOutline className='text-3xl hover:text-gray-700
                    transition-transform duration-400 hover:scale-110'
                    />
                </button>
                <button className='border-r-2 border-gray-400 p-3.5'>
                    <RiShoppingBagLine className='text-3xl hover:text-gray-700
                    transition-transform duration-400 hover:scale-110'
                    />
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
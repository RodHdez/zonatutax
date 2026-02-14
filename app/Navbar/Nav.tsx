import React from 'react'
import { GrTechnology } from 'react-icons/gr'
import { navlinks } from '../constant/constant'
import Link from 'next/link'
import { HiBars3, HiBars3BottomLeft, HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
    openNav:()=>void;
};

const Nav = ({openNav}:Props) => {
  return (
    <div className="transition-all duration-200 h-[12vh] z-[100] fixed w-full">
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
        {/*LOGO */}
      <div className='flex items-center space-x-2'>
        <div className='w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center flex-col'>
            <GrTechnology className='w-6 h-6 text-white'/>
        </div>
      </div>
      {/*Navelinks */}
      <div className='hidden lg:flex items-center space-x-4'>
       {navlinks.map((link)=>{
            return<Link href={link.url} key={link.id} className='text-white hover:text-rose-500 transition-all duration-200'>
                <p>{link.label}</p>
            </Link>
       })}

      </div>
      <div>
         {/*Burger Menu */}
       <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden'/>
      </div>
    </div>
    </div>
  )
}

export default Nav

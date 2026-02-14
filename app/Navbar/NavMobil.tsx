import React from 'react'
import { navlinks } from '../constant/constant'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

type Props = {
    showNav:boolean;
    closeNav:()=> void;
};

const NavMobil = ({closeNav,showNav}:Props) => {
    const navOpen = showNav?'translate-x-0':'translate-x-[100%]';
  return(
    <div>
    {/*Overlay */}
    <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z[1002] bg-red opacity-70 w-full h-screen`}> 
    </div>
    {/*NaveLinks */}
    <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[40%] sm:w-[60%] bg-red-900 space-y-6 z-[1050]`}>
        {navlinks.map((link)=>{
            return <Link key={link.id} href={link.url}>
                <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[20px]'>{link.label}</p>
            </Link>
        })}
        {/*Close Icon */}
        <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6'/>
    </div>
    </div>
  )
}

export default NavMobil

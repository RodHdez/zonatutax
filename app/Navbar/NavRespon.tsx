"use client";
import React, { useState } from 'react'
import NavMobil from './NavMobil'
import Nav from './Nav'

const NavRespon = () => {
    const[showNav,setShowNav]=useState(false);

    const openNavHandler =()=>setShowNav(true);
    const closeNavHandler =()=>setShowNav(false);

  return (
    <div>
      <Nav openNav={openNavHandler}/>
      <NavMobil showNav={showNav} closeNav={closeNavHandler}/>
    </div>
  )
}

export default NavRespon

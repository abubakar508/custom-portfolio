"use client";
import React, { useEffect, useState } from 'react'


//import icons
import { RxArrowUp } from 'react-icons/rx'

//import react-scroll link
import { Link } from 'react-scroll';

const Bottom = () => {
    const [bottom, setBottom] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setBottom(true)
      } else {
        setBottom(false)
      }
    };
      // add event listener 
      window.addEventListener('scroll', handleScroll);

      return () => {

        // remove event listener 
        window.removeEventListener('scroll', handleScroll);
      };
   
  })
  return (
    <Link 
    smooth
    spy
    offset={-50}
    to='home'>
    <div  className={` fixed right-3 bottom-3 bg-accent-hover p-2 ${bottom ? ' flex items-center z-50 text-white rounded-md' : ' hidden'}`}>
        <RxArrowUp />
    </div>
    </Link>
  )
}

export default Bottom
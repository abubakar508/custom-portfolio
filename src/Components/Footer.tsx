import React from 'react'

//import assets
import Socials from './Socials'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className=' relative mt-20 -z-10 sm:mt-0 h-[200px] bg-accent flex flex-col gap-2 text-center items-center justify-start'>
        <div className=' flex items-center gap-2'>
            <span>Email:</span>
            <span>
                <a href="mailto:abubakarismail508@gmail.com">abubakarismail508@gmail.com</a>
            </span>
        </div>
        <div className=' flex items-center gap-2'>
        <span>Email:</span>
        <span>
                <a href="mailto:imabubakar508@gmail.com">imabubakar508@gmail.com</a>
            </span>
        </div>
        <div>
          <Image alt='Footer Logo' src={require('../../public/assets/NavNew.png')} />
        </div>
        <div className=' absolute w-full flex items-center justify-center bottom-4'>
        <Socials />
        </div>
    </footer>
  )
}

export default Footer
'use client'
import React from 'react'

//import types
import { NavMobileProps } from '@/Type'

//import icons
import { BsX} from 'react-icons/bs'

//import constants
import { NavData } from '@/Constants'

//import link
import { Link } from 'react-scroll'

//import components
import Socials from './Socials'

//import framer
import { motion } from 'framer-motion'

//import variants
import { fadeIn } from '../../Variants'


const NavMobile = ({closeModal} : NavMobileProps) => {
  return (
    <motion.div
    variants={fadeIn('left', 0.3)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.3}}
    className=' fixed inset-0 bg-tertiary'>
        <div className=' w-fit' onClick={closeModal}>
            <BsX className=' text-white text-5xl' />
        </div>
        <div className=' flex flex-col space-y-6 text-4xl uppercase font-semibold flexCenter h-screen'>
            {NavData.map((link, index: number) => (
                <Link to={link.Path}
                onClick={closeModal}
                key={index}
                smooth
                spy
                activeClass='active'
                >
                <span className=' hover:text-accent hover:border-b-2 border-accent cursor-pointer'>
                    {link.name}
                </span>
                </Link>
            ))}
           
        </div>
    </motion.div>
  )
}

export default NavMobile
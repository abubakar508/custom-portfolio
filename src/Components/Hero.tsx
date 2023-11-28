"use client";
import React from 'react'

//import next image
import Image from 'next/image'

//import type animation
import { TypeAnimation} from 'react-type-animation'

//import icons
import { AiOutlineDesktop} from 'react-icons/ai'

//import components
import CustomButton from './CustomButton';

//import constants
import { typeSequence } from '@/Constants';

//import assets
import ParticlesContainer from './ParticlesContainer';

//import variants
import { fadeIn } from '../../Variants';

//import framer
import { motion } from 'framer-motion'

//import assets
import logo from '../../public/assets/Abisma.png'

const Hero = () => {
  return (
    <motion.div
    variants={fadeIn('up', 0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.2}}
    className=' flex items-center justify-center lg:justify-start' id='home'>
        <ParticlesContainer />
        <div className=' h-screen lg:w-[80%] z-20 flex lg:items-start items-center justify-center flex-col lg:ml-20'>
            <h1 className=' text-tertiary uppercase font-extrabold text-[150px] lg:text-[250px] tracking-wider relative flex items-center'>
                Abu
                <Image src={require('../../public/assets/CodingWriter.png')} width={500} height={50} alt='' className=' absolute bottom-0 lg:bottom-10 lg:w-[800px]' />
            </h1>
            <div className=' flex items-center gap-2 justify-start'>
                <AiOutlineDesktop className=' hidden lg:block text-3xl text-accent' />
            <TypeAnimation
            sequence={typeSequence}
            deletionSpeed={20}
            repeat={Infinity}
            wrapper='div'
            className=' text-2xl lg:text-3xl text-accent'
             />
               
             </div>
             <a href="https://github.com/abubakar508"  target="_blank"
            rel="noopener noreferrer">
             <CustomButton title='Explore More' containerStyles=' mt-2 px-4 py-2 hover:bg-accent-hover' />
             </a>
        </div>
        <div className=' hidden lg:block absolute right-2 top-2 -z-10'>
            <Image height={300} width={300} src={logo} alt='Hero Image' className=' h-screen w-max mix-blend-color-dodge bg-blend-color-dodge' />

        </div>
    </motion.div>
  )
}

export default Hero

//footer comments
//link explore more button to the github profile using the anchor tag
"use client";
import React from 'react'

//import icons
import { RiGithubFill, RiTwitterFill, RiLinkedinFill, RiInstagramFill, RiMailFill} from 'react-icons/ri'

const Socials = () => {
    const socialData = [
        {
            icon: <RiGithubFill />,
            link: 'https://github.com/abubakar508'
        },
        {
            icon: <RiTwitterFill />,
            link: 'www.twitter.com'
        },
        {
            icon: <RiLinkedinFill />,
            link: 'https://www.linkedin.com/in/ismail508/'
        },
        {
            icon: <RiInstagramFill />,
            link: 'www.instagram.com'
        },
        {
            icon: <RiMailFill />,
            link: 'https://mail.google.com/abubakarismail508@gmail.com'
        },
        
        
    ]
  return (
    <div className=' lg:w-[150px] flex items-center gap-2 justify-between px-2'>
        {socialData.map((socials : any, index : number) => (
            <a href={socials.link} target="_blank"
            rel="noopener noreferrer">
            <div className=' text-2xl text-white hover:text-accent-hover'>
                {socials.icon}
            </div>
            </a>
        ))}
    </div>
  )
}

export default Socials
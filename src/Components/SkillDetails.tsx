import React from 'react'

//import types
import { SkillProps } from '@/Type'

//import icons
import { BsX } from 'react-icons/bs'

//skill detail prop types
interface skillDetailsProps {
  skill: SkillProps
  closeModal: () => void
}
const SkillDetails = ({skill, closeModal} : skillDetailsProps) => {
  return (
    <div className=' fixed inset-0 bg-tertiary z-50 h-screen flex items-center justify-center'>
      <div className=' absolute left-2 top-2 text-4xl bg-accent aspect-square p-2 rounded-lg' onClick={closeModal}>
      <BsX />
      </div>
      <section className=' bg-primary p-2 rounded-md m-10 w-full flex flex-col space-y-3 shadow-lg shadow-black'>
      <div className=' flex items-center justify-between px-3'>
        <span className=' lg:text-3xl uppercase font-medium'>
        {skill.name}
        </span>
        <span className=' lg:text-3xl font-medium bg-accent rounded-md p-2'>
          {skill.perc}%
        </span>
        
      </div>
      <div className=' flex items-center justify-between px-3'>
        <span className=' lg:text-lg text-[10px]'>
          Use Case:
        </span>
        <div className=' flex items-center gap-2'>
        <span className=' flex items-center gap-3 text-3xl'>
          {skill.progLang}
        </span>
        </div>
      </div>
      <div className=' flex flex-col space-y-4 items-center text-center'>
        <span className=' text-2xl lg:text-3xl uppercase fomt-extrabold border-b-2 border-accent text-accent'>Details</span>
        <small className=' m-3 lg:text-lg text-sm'>
          {skill.details}
        </small>
      </div>
      </section>
    </div>
  )
}

export default SkillDetails
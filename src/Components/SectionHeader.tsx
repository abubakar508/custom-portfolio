import React from 'react'

//import types
import { SectionHeaderProps } from '@/Type'

const SectionHeader = ({title, subTitle} : SectionHeaderProps) => {
  return (
    <div className=' flex flex-col items-center justify-center space-y-2 w-full'>
        <h1 className=' text-3xl font-extrabold text-accent uppercase'>
            {title}.
        </h1>
        <small className=' font-medium text-tertiary'>
            {subTitle}
        </small>
    </div>
  )
}

export default SectionHeader
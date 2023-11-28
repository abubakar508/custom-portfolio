'use client'
import React, { useState } from "react";

//import components
import SectionHeader from "./SectionHeader";

//import Skills data constant
import { skillData } from "@/Constants";

//import framer
import { motion } from "framer-motion";

//import variants
import { fadeIn } from "../../Variants";

const Skills = () => {

  const [index, setIndex] = useState(0)
  return (
    <div className=" h-screen lg:h-max md:h-max pt-20 lg:pt-5" id="skills">
      <SectionHeader title="skills" subTitle="skills is excellence" />
      <motion.section
      variants={fadeIn('up', 0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.3}}
      className=" flex flex-col items-center justify-center gap-1 mt-5">
        <div className=" flex items-center gap-3 pb-5">
        {skillData.map((skill, skillIndex : any) => (
          <div className={` ${ index === skillIndex && ' text-white bg-accent  p-1 rounded-md transition-all duration-300'} cursor-pointer capitalize xl:text-lg`}
          key={skillIndex}
          onClick={() => setIndex(skillIndex)}
          >
            {skill.title}
          </div>
        ))}
        </div>
        <div className=" w-full lg:w-1/2 px-10 gap-4 flex flex-col">
          {skillData[index].info.map((item, itemIndex) => (
            <div className=" bg-tertiary rounded-md py-2" key={itemIndex}>
              <div className=" w-full flex flex-col items-center justify-between gap-2">
                <span className=" text-sm text-accent lg:text-lg">
              {item.title}:
              </span>
              <span className=" text-xl  lg:text-2g flex items-center gap-3">
                {item.icons}
              </span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Skills;

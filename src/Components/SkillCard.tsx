"use client";
import React, { useState } from "react";

//import components
import CustomButton from "./CustomButton";
import SkillDetails from "./SkillDetails";

//import icons
import { AiOutlineEnter } from "react-icons/ai";

//import types
import { SkillProps } from "@/Type";

//skillcard prop types
interface SkillCardProps {
  skill: SkillProps;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const [modal, setModal] = useState(false);
  return (
    <div className=" bg-tertiary w-full lg:w-2/3 py-2 px-3 m-2 rounded-md space-y-2 flex flex-col hover:shadow-md">
      <div className=" flex items-center justify-between px-3">
        <span className=" text-sm">{skill.name}</span>
        <CustomButton
          containerStyles=" flex items-center gap-2 py-1 px-1"
          title="View skills"
          icon={<AiOutlineEnter />}
          handleClick={() => setModal(!modal)}
        />
      </div>
      <div className=" bg-secondary w-full rounded-full py-1 flex items-center">
        <div className={` h-[5px] w-[${skill.perc}%] bg-accent rounded-full ml-2`} />
      </div>
      {modal && (
        <SkillDetails closeModal={() => setModal(!modal)} skill={skill} />
      )}
    </div>
  );
};

export default SkillCard;

import React from "react";

//import types props
import { CustomButtonProps } from "@/Type";

const CustomButton = ({
  title,
  icon,
  btnType,
  handleClick,
  containerStyles,
  iconStyles,
  titleStyles,
}: CustomButtonProps) => {
  return (
    <button
      className={` bg-accent p-2 text-sm rounded-full ${containerStyles}`}
      onClick={handleClick}
      type={btnType}
    >
      <span className={` ${titleStyles}`}>{title}</span>
      <span className={` ${iconStyles}`}>{icon}</span>
    </button>
  );
};

export default CustomButton;

"use client";
//import useState & useEffect
import React, { useEffect, useState } from "react";

//import next image
import Image from "next/image";

//import components
import NavMobile from "./NavMobile";
import Socials from "./Socials";

//imoort constants
import { NavData } from "@/Constants";

//import icons
import { BiMenu } from "react-icons/bi";

//import next link
import { Link } from "react-scroll";

//import assets
import logo from '../../public/assets/NavNew.png'

const NavBar = () => {

  const [header, setHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };
    //add event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      //remove event listener
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const [modal, setModal] = useState(false);
  return (
    <nav
      className={` flexBetween px-3 py-3 fixed w-full z-40 ${
        header ? "  bg-secondary" : ""
      }`}
    >
      <div>
        <Image
          src={logo}
          width={150}
          height={70}
          quality={100}
          priority
          alt="Navigation logo"
          className=" w-[120px] h-[30px]"
        />
      </div>
      <div className=" hidden lg:flex">
        {NavData.map((link, index) => (
          <Link
            to={link.Path}
            key={index}
            smooth
            spy
            offset={-50}
            activeClass="active"
          >
            <span className=" mx-2 text-white hover:text-accent cursor-pointer text-sm">
              {link.name}
            </span>
          </Link>
        ))}
      </div>
      <div>
        <Socials />
      </div>
      <div className=" block lg:hidden " onClick={() => setModal(!modal)}>
        <BiMenu className=" text-4xl text-accent" />
        {modal && <NavMobile closeModal={() => setModal(!modal)} />}
      </div>
    </nav>
  );
};

export default NavBar;

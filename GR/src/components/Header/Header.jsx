import React from "react";
import styles from "./header.module.css";
import logo from "../../assets/images/header/logo.svg";
import userIcon from "../../assets/images/header/smallUserPic.svg";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-[#161B22] py-[.8rem] px-[1.5rem]">
      <div className="flex items-center cursor-pointer gap-[.5rem]">
        <img src={logo} alt="Logo" className="w-[1rem]" />
        <a className="text-white">OpenSource Supporter</a>
      </div>
      <div className="cursor-pointer relative">
        <img src={userIcon} alt="User Icon" className="w-[2rem]" />
        <div className="bg-[#006EED] w-[1rem] absolute top-0 right-0 aspect-square border-[2px] border-[#161B22] rounded-[50%]"></div>
      </div>
    </header>
  );
}

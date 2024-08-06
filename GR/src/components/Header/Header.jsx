import React from "react";
import styles from "./header.module.css";
import logo from "../../assets/images/header/logo.svg";
import userIcon from "../../assets/images/header/smallUserPic.svg";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-[#161B22] py-[.75rem] px-[1.5rem]">
      <div className="flex items-center gap-2.5">
        <img src={logo} alt="Logo" className="w-[1.5rem]" />
        <a className="text-white text-xl">OpenSource Supporter</a>
      </div>
      <div className="cursor-pointer relative">
        <img src={userIcon} alt="User Icon" className="w-[1.25rem]" />
        <div className="bg-[#006EED] w-[.7rem] absolute bottom-2.5 left-3.5 aspect-square border-[1.5px] border-[#161B22] rounded-[50%]"></div>
      </div>
    </header>
  );
}

import React from "react";
import logo from "../../assets/images/header/logo.svg";
import userIcon from "../../assets/images/header/smallUserPic.svg";

export default function Header() {
  return (
    <nav className="flex justify-between items-center h-[60px] bg-[#161B22]">
      <left className="flex items-center">
        <img className="py-[11px] ml-[24px]" src={logo} alt="Logo" />
        <a className="text-white ml-[10px] text-[21px]">OpenSource Supporter</a>
      </left>
      <right>
        <img
          className="size-[20px] w-[30px] h-[37px] mr-[38px]"
          src={userIcon}
          alt="User Icon"
        />
        <a className="bg-[#006EED] size-[15px] border-[2px] border-[#161B22] rounded-[50%] absolute top-3 right-8" />
      </right>
    </nav>
  );
}
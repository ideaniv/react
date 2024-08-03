import React from "react";
import styles from "./RightSide.module.css";
import home from "../../assets/images/rightSide/home.svg";
import book from "../../assets/images/rightSide/book.svg";
import globe from "../../assets/images/rightSide/globe.svg";
import pack from "../../assets/images/rightSide/pack.svg";
import star from "../../assets/images/rightSide/star.svg";

export default function RightSide() {
  return (
    <nav className="flex flex-col text-[1.3rem] text-white py-[140px] pl-[46px] pr-[29.72px]">
      <div className="flex cursor-pointer">
        <img className=" mr-[4px]" src={home} alt="Home" />
        <a className="mb-[90px]">Your profile</a>
      </div>
      <div className="flex cursor-pointer">
        <img className=" mr-[4px]" src={book} alt="Book" />
        <a className="mb-[90px]">Your Repositories</a>
      </div>
      <div className="flex cursor-pointer">
        <img className=" mr-[4px]" src={globe} alt="Home" />
        <a className="mb-[90px]">Your Links</a>
      </div>
      <div className="flex cursor-pointer">
        <img className=" mr-[4px]" src={pack} alt="Home" />
        <a className="mb-[90px]">Your Points</a>
      </div>
      <div className="flex cursor-pointer">
        <img className=" mr-[4px]" src={star} alt="Home" />
        <a className="mb-[45px]">Your Ranks</a>
      </div>
      <a className=" border-y border-[#21262D] py-[45px] cursor-pointer">
        Opensource Licenses
      </a>
      <a className="text-[#FF000087] mt-[45px] cursor-pointer">Log out</a>
    </nav>
  );
}

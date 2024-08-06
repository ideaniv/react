import React from "react";
import styles from "./leftSide.module.css";
import userIcon from "../../assets/images/leftSide/bigUserPic.svg";
import coin from "../../assets/images/leftSide/coin.svg";
import tier from "../../assets/images/leftSide/supportTier.svg";
import grass from "../../assets/images/leftSide/contributions.svg";

export default function LeftSide() {
  return (
    <section className="flex flex-col">
      {/* Profile 시작 */}
      <article className=" flex flex-col p-[1rem] gap-[1rem]">
        <div className="text-white text-[1.2rem] ">Profile</div>
        <img className="w-[50%] self-center" src={userIcon} alt="User Icon" />
        <div className="flex justify-between items-center mt-[.5rem] sm:flex-col sm:gap-[1rem] border-b border-[#21262D] pb-9">
          <div>
            <div className="text-[#C9D1D9] text-[1.45rem]">권혁원</div>
            <div className="text-[#8B949E]">ambition-kwon</div>
          </div>
          <div className="flex items-center flex-wrap justify-center sm:justify-start gap-x-[0.3rem]">
            <div className="text-white text-[0.8rem] text-center">
              15.9 / 30.8
            </div>
            <img className="w-[1rem]" src={coin} alt="Coin" />
          </div>
        </div>
      </article>
      {/* Profile 끝 */}
      {/* Support Tier 시작 */}
      <article className="p-[1rem]">
        <div className="text-white text-[1.2rem] pb-6">Support Tier</div>
        <img className="border-b border-[#21262D] pb-9" src={tier} alt="Tier" />
      </article>
      {/* Support Tier 끝 */}
      {/* Contributions 시작 */}
      <article className="p-[1rem]">
        <div className="text-white text-[1.2rem] mb-[1rem]">Contributions</div>
        <img className="" src={grass} alt="Grass" />
      </article>
      {/* Contributions 끝 */}
    </section>
  );
}

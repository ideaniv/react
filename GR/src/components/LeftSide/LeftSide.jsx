import React from "react";
import styles from "./leftSide.module.css";
import userIcon from "../../assets/images/leftSide/bigUserPic.svg";
import coin from "../../assets/images/leftSide/coin.svg";
import tier from "../../assets/images/leftSide/supportTier.svg";
import grass from "../../assets/images/leftSide/contributions.svg";

export default function LeftSide() {
  return (
    <section className="flex flex-col mr-[16px] ml-[17px]">
      {/* Profile 시작 */}
      <article className="mt-[22px]">
        <div className="text-white text-[18px]">Profile</div>
        <img
          className="size-[169px] mt-[15px] ml-[70px]"
          src={userIcon}
          alt="User Icon"
        />
        <div className="text-white text-[23px] mt-[24px] ml-[30px]">권혁원</div>
        <div className="flex justify-end">
          <div className="text-white text-[12px] mr-[5px]">15.9 / 30.8 </div>
          <img className="" src={coin} alt="Coin" />
        </div>
        <div className="text-[#8B949E] mb-[18px]">ambition-kwon</div>
      </article>
      {/* Profile 끝 */}
      {/* Support Tier 시작 */}
      <article className="">
        <div className="text-white text-[18px] border-t border-[#21262D] pt-[36px] pb-[24px]">
          Support Tier
        </div>
        <img
          className="border-b border-[#21262D] pb-[36px]"
          src={tier}
          alt="Tier"
        />
      </article>
      {/* Support Tier 끝 */}
      {/* Contributions 시작 */}
      <article className="mt-[24px]">
        <div className="text-white text-[18px] mb-[15px] ml-[3px]">
          Contributions
        </div>
        <img className="ml-[-3px]" src={grass} alt="Grass" />
      </article>
      {/* Contributions 끝 */}
    </section>
  );
}

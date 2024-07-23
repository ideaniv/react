import React from "react";
import Image from "next/image";
import fetchGuide from "@/public/fetch.png";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <p className="text-xl mb-5">안녕하세요! 자바스크립트 스터디 입니다 😊</p>
      <p>- fetch 사용법 -</p>
      <Image src={fetchGuide} alt="fetchGuide" />
      <ul>
        <li>
          <Link href={"/api/summary"} className="hover:font-bold">
            /api/summary
          </Link>
        </li>
        <li>
          <Link href={"/api/history"} className="hover:font-bold">
            /api/history
          </Link>
        </li>
      </ul>
    </>
  );
}

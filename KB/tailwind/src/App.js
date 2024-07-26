import React from "react";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className="bg-red-100 flex flex-col min-h-[100vh]">
      <header className="bg-mybrowny sticky top-0">헤더</header>
      <main className="bg-[#ea580c] flex-1 flex">
        <section className="bg-[#65a30d] text-mybrowny grad ">
          left section
        </section>
        <section className="flex-1 bg-[#c5b2b2] font-bold">
          {Array.from(Array(200), (_, i) => i).map((v) => (
            <p
              className={`${styles["base_font"]} hover:bg-[#000000] hover:cursor-pointer hover:text-white`}
              key={v}
            >
              {v}
            </p>
          ))}
        </section>
        <section>right section</section>
      </main>
      <footer>푸터</footer>
    </div>
  );
}

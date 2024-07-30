
import React from'react';

export default function App() {
  return (
    <div className="bg-red-100 flex flex-col min-h-[100vh]">
      {/* header start */}
      <header className='bg-[#500724]'>헤더</header>
      {/* header end */}
      <main className="bg-[#ea580c] flex-1 flex">
        <section className='bg-[#65a30d] text-mybrowny'>left section</section>
        <section className='flex-1 bg-[#f00]'>
          {Array.from(Array(200), (_, i)=>i).map((v)=>(
            <p className="base_font" key={v}>{v}</p>
        ))}
        </section>
        <section>right section</section>
      </main>
      <footer>푸터</footer>
    </div>
  )
}

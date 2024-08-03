import React from 'react'
import Header from '../../components/Header'
import LeftAside from '../../components/Left-aside'
import RightAside from '../../components/Right-aside'
import Center from './components/Center/Center'

export default function MainPage() {
  return (
    <>
      <Header />
        <main className="body-container flex">
        <LeftAside />
        <Center />
        {/*<section className='flex-1 bg-[#0d1117]'>메인</section>*/}
        <RightAside />
      </main>
    </>
  )
}

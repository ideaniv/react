import logo from '../assets/img/image_19_1.png'
import userIcon from '../assets/img/Frame.png'
import React from 'react'

export default function Header() {
    return (
        <header className="sticky top-0 flex justify-between items-center bg-[#161B22] px-[24px] py-[11px]">
            <div className="flex items-center">
                <img src={logo} />
                <p className="text-white ml-[10px]">
                    OpenSource Suppoter
                </p>
            </div>
            <img src={userIcon}  alt="user icon img"/>
        </header>
    );
}
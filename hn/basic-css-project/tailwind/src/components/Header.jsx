import logo from '../assets/img/image_19_1.png'
import userIcon from '../assets/img/Frame.png'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    return (
        <header className="sticky top-0 flex justify-between items-center bg-[#161B22] px-[24px] py-[11px] z-10">
            <div className="flex items-center">
                <img src={logo} className='hover:cursor-pointer' onClick={()=>navigate('/')}/>
                <p className="text-white ml-[10px]">
                    OpenSource Suppoter
                </p>
            </div>
            <img src={userIcon}  alt="user icon img"/>
        </header>
    );
}
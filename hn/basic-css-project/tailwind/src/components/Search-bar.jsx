import { useState } from 'react'
import searchImg from '../assets/img/search.svg'
import sendImg from '../assets/img/send.svg'

export default function SearchBar() {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className="relative z-0">
            <form onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Repositories, Users" value={search} onChange={(e) => handleChange(e)}
                    className="bg-[#1C1F28] py-3 px-48 border-2 border-solid border-[#5C688C] rounded-full
                    text-center text-xl font-normal text-white focus:outline-none placeholder:text-white/[0.3]"
                />
                <img src={searchImg} className="absolute left-6 top-[30%]" alt=""/>
                <img src={sendImg} className="absolute right-6 top-1/3" alt="" />

            </form>
        </div>
    )
}
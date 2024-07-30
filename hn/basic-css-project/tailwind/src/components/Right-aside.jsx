import homeIcon from '../assets/img/home.svg'
import bookIcon from '../assets/img/book.svg'
import globeIcon from '../assets/img/globe.svg'
import packageIcon from '../assets/img/package.svg'
import starIcon from '../assets/img/star.svg'
import { useNavigate } from 'react-router-dom'

export default function RightAside() {
    const navigate = useNavigate();
    return (
        <section className="flex flex-col justify-around bg-[#0d1117] border-l border-l-solid border-l-white/[0.3] py-[80px] px-[46px]">
            <nav className="menu_item hover:cursor-pointer"><img className="mr-[4px]" src={homeIcon} alt="" />Your profile</nav>
            <nav className="menu_item hover:cursor-pointer"><img className="mr-[4px]" src={bookIcon} alt="" />Your Repositories</nav>
            <nav className="menu_item hover:cursor-pointer"><img className="mr-[4px]" src={globeIcon} alt="" />Your Links</nav>
            <nav className="menu_item hover:cursor-pointer" onClick={()=>navigate('/point')}><img className="mr-[4px]" src={packageIcon} alt="" />Your Points</nav>
            <nav className="menu_item hover:cursor-pointer"><img className="mr-[4px]" src={starIcon} alt="" />Your Ranks</nav>
            <nav className="menu_item hover:cursor-pointer py-[35px] border-y border-y-solid border-y-[#21262D] ">Opensource Licenses</nav>
            <nav className="menu_item hover:cursor-pointer text-[#FF0000]/[0.53]">Log out</nav>
        </section>
    )
}
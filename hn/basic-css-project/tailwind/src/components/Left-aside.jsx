import userIconImg from '../assets/img/user_icon.png'
import coinImg from '../assets/img/coin_img.png'
import supportTierCard from '../assets/img/support_tier_card.png'
import contributionCalendar from '../assets/img/contribution_calendar.png'

export default function LeftAside() {
    return (
        <>
            <section className="bg-[#0d1117] border-r border-r-solid border-r-white/[0.3] px-4 py-5">
                <div>
                    <div className="text-white text-[18px] font-semibold mt-5">Profile</div>
                    <div className="flex flex-col">
                        <div className="flex justify-center mt-4 mb-6">
                            <img src={userIconImg} alt="user icon img" />
                        </div>
                        <div className="flex justify-between items-center pb-7 mx-8 border-b border-b-solid border-b-white/[0.3]">
                            <div className="flex flex-col">
                                <div className="text-2xl font-semibold text-[#C9D1D9FF]">권혁원</div>
                                <div className="text-lg font-semibold text-[#8B949EFF]">ambition-kwon</div>
                            </div>
                            <div className="flex items-center">
                                <div className="text-xs text-white mr-1">15.9 / 30.8 </div>
                                <img className="w-5 h-5" src={coinImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="text-white text-[18px] font-semibold mt-5 mb-6">Support Tier</div>
                    <div className="flex justify-center">
                        <img src={supportTierCard} alt="support tier card img" />
                    </div>
                </div>
                <div className="w-full">
                    <div className="text-white text-[18px] font-semibold mt-5 mb-4">Contribution</div>
                    <div className="flex justify-center">
                        <img src={contributionCalendar} alt="contribution calendar img" />
                    </div>
                </div>
            </section>
        </>
    );
}
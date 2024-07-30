export default function PointHistoryBox({ date, points, username, repository, status, background }) {
    return (
        <li className="flex py-5 border-t border-solid border-t-[#21262D]" style={{ background }}>
            <div className='flex flex-1 justify-center items-center w-4/5 p-1.5 text-[#C9D1D9] text-base font-semibold text-center'>{date}</div>
            <div className='flex flex-1 justify-center items-center text-[#C33D3D] text-lg font-semibold text-center'> {points}P</div>
            <div className='flex flex-1 justify-center items-center text-[#C9D1D9] text-xs font-semibold text-center'>{username} / {repository}</div>
            <div className={`flex flex-1 justify-center items-center text-sm font-semibold text-center ${status === 'IN PROGRESS' ? 'text-[#6DB1FF]' : 'text-[#47A54B]'}`}>{status}</div>
        </li>
    )
}
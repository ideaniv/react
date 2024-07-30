export default function PointHistoryBox({ date, points, username, repository, status, background }) {
    return (
        <li className="flex py-5 border-t border-solid border-t-[#21262D] *:justify-center *:items-center *:font-semibold *:text-center *:flex" style={{ background }}>
            <div className='basis-[calc(100%/6*1)] text-[#C9D1D9] text-base'>{date}</div>
            <div className='basis-[calc(100%/6*2)] text-[#C33D3D] text-lg'> {points}P</div>
            <div className='basis-[calc(100%/6*2)] text-[#C9D1D9] text-xs'>{username} / {repository}</div>
            <div className={`basis-[calc(100%/6*1)] text-sm ${status === 'IN PROGRESS' ? 'text-[#6DB1FF]' : 'text-[#47A54B]'}`}>{status}</div>
        </li>
    )
}
export default function PointBox({img, title, content, point, profitRate}) {
    return(
        <>
            <div className='bg-[#303641] px-4 pt-5 pb-3.5 mr-2.5 cursor-pointer last:mr-0'>
                <div className='flex mb-7 pr-12'>
                    <img className='mr-2.5' src={img} alt="" />
                    <div className="flex flex-col">
                        <div className={title.includes("Spent") ? 'text-[#58A6FF] text-lg font-extrabold' : 'text-[#6CD064] text-lg font-extrabold'}>{title}</div>
                        <div className="text-white text-xs font-medium">{content}</div>
                    </div>
                </div>
                <div className='flex justify-between items-center mr-0'>
                    <div className='flex flex-col'>
                        <div className='text-white text-xl font-semibold'>{point}P</div>
                        <div className='text-white/[0.5] text-sm font-medium'>last month</div>
                    </div>
                    <div>
                        <div className={`rounded-2xl text-xs font-bold text-center py-1.5 pr-3 pl-2 ${
                            profitRate === 0
                                ? 'bg-[#A1A6AB] text-white'
                                : profitRate > 0
                                    ? 'bg-[#FFE5D7] text-[#FF0000]'
                                    : 'bg-[#C8E2FF] text-[#0000FF]'
                        }`}>
                            {profitRate === 0 ? '-' : profitRate > 0 ? '↑' : '↓'}{'\u00A0\u00A0'}{profitRate === 0 ? `0.0` : Math.abs(profitRate)}%
                        </div>
                        {/*<div className={`${styles['rate-box']} ${profitRate === 0 ? styles.zero : profitRate > 0 ? styles.plus : styles.minus}`}>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </>
    )
}